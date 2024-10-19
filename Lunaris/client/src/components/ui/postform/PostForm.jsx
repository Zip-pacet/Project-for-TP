import React, { useState } from "react"; // Added useState import
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "", image: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type='text'
        placeholder='Заголовок новости'
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type='text'
        placeholder='Содержание новости'
      />
      <MyInput
        value={post.image}
        onChange={(e) => setPost({ ...post, image: e.target.value })}
        type='text'
        placeholder='URL изображения'
      />
      <MyButton onClick={addNewPost}>Создать новость</MyButton>
    </form>
  );
};

export default PostForm;
