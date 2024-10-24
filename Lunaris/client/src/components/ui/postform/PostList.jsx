import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1 className='events-header'>{title}</h1>
      <div className='posts'>
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post, index) => (
            <PostItem
              key={post.id} // Используйте уникальный идентификатор поста
              remove={remove}
              number={index + 1}
              post={post}
            />
          ))
        ) : (
          <p>Новостей не найдено</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
