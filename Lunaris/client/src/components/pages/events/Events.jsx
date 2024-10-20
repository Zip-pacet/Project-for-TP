import React, { useState, useMemo, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./events.css";
import PostList from "../../ui/postform/PostList";
import PostForm from "../../ui/postform/PostForm";
import PostFilter from "../../ui/postform/PostFilter";
import MyModal from "../../ui/modal/MyModal";
import MyButton from "../../ui/button/MyButton";
import { usePosts } from "../../hooks/usePosts";
import PostService from "../../../API/PostService";
import Loader from "../../ui/loader/Loader";
import { useFetching } from "../../hooks/useFetching";
import { getPageCount } from "../../../utils/pages";
import Pagination from "../../ui/pagination/Pagination";
import { AuthContext } from "../../../context";

function Events() {
  const { isAuth } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? JSON.parse(savedPage) : 1; // Default to page 1 if no saved page
  });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, arePostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);

      // Проверка на наличие заголовка
      const totalCount = response.headers["x-total-count"];
      console.log("Total Count from Headers:", totalCount); // Это должно выводить количество

      if (totalCount) {
        setTotalPages(getPageCount(totalCount, limit));
      } else {
        console.error(
          "Заголовок 'x-total-count' отсутствует в ответе сервера."
        );
        setTotalPages(1); // Устанавливаем 0 страниц, если заголовок отсутствует
      }
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [limit, page]);

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(page)); // Save current page to local storage
  }, [page]);

  // Updated createPost to use PostService.createPost
  const createPost = async (newPost) => {
    try {
      const response = await PostService.createPost(newPost);
      setPage(1);
      setPosts([response.data, ...posts]);
      setModal(false);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (newPage) => {
    setPage(newPage);
    fetchPosts(limit, newPage);
  };

  return (
    <div className='events'>
      <div className='container'>
        <div>
          {isAuth && (
            <div>
              <MyButton onClick={fetchPosts}>Запросить посты</MyButton>
              <MyButton onClick={() => setModal(true)}>
                Создать новость
              </MyButton>
              <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
              </MyModal>
            </div>
          )}

          <PostFilter filter={filter} setFilter={setFilter} />
          {postError && <h1>Произошла ошибка {postError}</h1>}
          {arePostsLoading ? (
            <div className='loading'>
              <Loader />
            </div>
          ) : (
            <PostList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title={"Новости и мероприятия"}
            />
          )}
          <div className='pag'>
            <Pagination
              page={page}
              changePage={changePage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
