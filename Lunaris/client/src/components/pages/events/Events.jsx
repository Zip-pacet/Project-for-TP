import React, { useState, useEffect, useContext, useRef } from "react";
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
import { AuthContext } from "../../../context";

function Events() {
  const { isAuth } = useContext(AuthContext);
  const [allPosts, setAllPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1); // Убрали логику с localStorage
  const [modal, setModal] = useState(false);
  const lastElement = useRef();
  const observer = useRef();

  const [fetchPosts, arePostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setAllPosts((prevPosts) => {
        const newPosts = response.posts.filter(
          (post) => !prevPosts.find((p) => p.id === post.id)
        );
        return [...prevPosts, ...newPosts];
      });
      const totalCount = response.totalCount;
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    if (arePostsLoading) return;
    if (observer.current) observer.current.disconnect();

    const callback = function (entries) {
      if (entries[0].isIntersecting && page < totalPages) {
        setPage((prevPage) => prevPage + 1); // Увеличиваем страницу
      }
    };

    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [arePostsLoading]);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [limit, page]);

  const createPost = async (newPost) => {
    try {
      const createdPost = await PostService.createPost(newPost);
      setAllPosts((prevPosts) => [createdPost, ...prevPosts]); // Добавляем новый пост в начало списка
      setModal(false);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const removePost = async (post) => {
    try {
      await PostService.deletePost(post.id);
      setAllPosts(allPosts.filter((p) => p.id !== post.id));
    } catch (error) {
      console.error("Ошибка при удалении поста:", error);
    }
  };

  const sortedAndSearchedPosts = usePosts(allPosts, filter.sort, filter.query);

  return (
    <div className='events'>
      <div className='container'>
        <div>
          {isAuth && (
            <div>
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
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title={"Новости и мероприятия"}
          />
          <div ref={lastElement}></div>
          {arePostsLoading && (
            <div className='loading'>
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;
