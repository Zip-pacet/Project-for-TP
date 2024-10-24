import React, { useState } from "react";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    body: "",
    image: null,
  });

  const addNewPost = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("description", post.description);
      formData.append("body", post.body);
      if (post.image) {
        formData.append("image", post.image);
      }

      await create(formData);
      setPost({ title: "", description: "", body: "", image: null });
    } catch (error) {
      console.error("Ошибка при создании поста:", error);
    }
  };

  return (
    <form onSubmit={addNewPost}>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type='text'
        placeholder='Заголовок новости'
      />
      <MyInput
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
        type='text'
        placeholder='Подзаголовок новости'
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type='text'
        placeholder='Содержание новости'
      />
      <input
        type='file'
        accept='image/*'
        onChange={(e) => setPost({ ...post, image: e.target.files[0] })}
      />
      <MyButton type='submit'>Создать новость</MyButton>
    </form>
  );
};

export default PostForm;
