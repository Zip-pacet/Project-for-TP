import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import "./events.css";
import PostList from "../../ui/postform/PostList";
import PostForm from "../../ui/postform/PostForm";
import PostFilter from "../../ui/postform/PostFilter";
import MyModal from "../../ui/modal/MyModal";
import MyButton from "../../ui/button/MyButton";
import { usePosts } from "../../hooks/usePosts";
import PostService from "../../../API/PostService";

function Events() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [arePostsLoading, setPostsAreLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    setPostsAreLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setPostsAreLoading(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='events'>
      <div className='container'>
        <div>
          <MyButton onClick={fetchPosts}>Запросить посты</MyButton>
          <MyButton onClick={() => setModal(true)}>Создать новость</MyButton>
          <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
          </MyModal>
          <PostFilter filter={filter} setFilter={setFilter} />
          {arePostsLoading ? (
            <h1> Загрузка...</h1>
          ) : (
            <PostList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title={"Новости и мероприятия"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;
