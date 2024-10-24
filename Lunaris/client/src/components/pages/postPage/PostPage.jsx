import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostService from "../../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../../ui/loader/Loader";
import "./postPage.css";
import MyButton from "../../ui/button/MyButton";
import { AuthContext } from "../../../context";

const PostPage = () => {
  const { isAuth } = useContext(AuthContext);
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [postError, setPostError] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [imageToDelete, setImageToDelete] = useState(false);

  const fetchPostById = async (id) => {
    try {
      const response = await PostService.getById(id);
      setPost(response);
    } catch (error) {
      setPostError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostById(params.id);
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, [params.id]);

  const handleUpdatePost = async () => {
    try {
      const updatedPostData = new FormData();
      updatedPostData.append("title", post.title);
      updatedPostData.append("description", post.description);
      updatedPostData.append("body", post.body);

      // Include new image if uploaded
      if (newImage) {
        updatedPostData.append("image", newImage);
      } else if (imageToDelete) {
        updatedPostData.append("deleteImage", true); // Indicate to delete the existing image
      }

      await PostService.updatePost(params.id, updatedPostData);
      setIsEditing(false);
      fetchPostById(params.id); // Refresh the post data after update
    } catch (error) {
      setPostError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    setNewImage(e.target.files[0]);
    setImageToDelete(false); // Reset deletion state when a new image is uploaded
  };

  const handleDeleteImage = () => {
    setImageToDelete(true); // Set the flag to delete the existing image
  };

  return (
    <div className='view-post'>
      <div className='post-page'>
        {loading ? (
          <div className='loader-container'>
            <Loader />
          </div>
        ) : (
          <>
            {isEditing ? (
              <div className='edit-post'>
                <h2 className='post-title'>Редактировать пост</h2>
                <input
                  type='text'
                  name='title'
                  value={post.title}
                  onChange={handleChange}
                  className='edit-input'
                  placeholder='Заголовок'
                />
                <input
                  type='text'
                  name='description'
                  value={post.description}
                  onChange={handleChange}
                  className='edit-input'
                  placeholder='Описание'
                />
                <textarea
                  name='body'
                  value={post.body}
                  onChange={handleChange}
                  className='edit-textarea'
                  placeholder='Содержание'
                />
                {post.image && (
                  <div className='post-image-container'>
                    <img
                      src={`http://193.227.240.138:3001/${post.image}`}
                      alt={post.title}
                      className='post-image'
                    />
                    {/* <MyButton onClick={handleDeleteImage}>
                      Удалить изображение
                    </MyButton> */}
                  </div>
                )}
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleImageUpload}
                  className='edit-input'
                />
                <MyButton onClick={handleUpdatePost}>
                  Сохранить изменения
                </MyButton>
                <MyButton onClick={() => setIsEditing(false)}>Отмена</MyButton>
              </div>
            ) : (
              <div className='post-content'>
                <h1 className='post-title'>{post.title}</h1>
                <h2 className='post-text'>{post.description}</h2>{" "}
                {/* Updated class for description */}
                <p className='post-body'>{post.body}</p>
                {post.image && (
                  <div className='post-image-container'>
                    <img
                      src={`http://193.227.240.138:3001/${post.image}`}
                      alt={post.title}
                      className='post-image'
                    />
                  </div>
                )}
                {isAuth && (
                  <MyButton onClick={() => setIsEditing(true)}>
                    Редактировать
                  </MyButton>
                )}
                <MyButton onClick={() => navigate(`/events`)}>Назад</MyButton>
              </div>
            )}
          </>
        )}

        {postError && <p className='error-message'>Error: {postError}</p>}
      </div>
    </div>
  );
};

export default PostPage;
