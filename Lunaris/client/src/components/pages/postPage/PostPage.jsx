import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import { useNavigate } from "react-router-dom";
import Loader from "../../ui/loader/Loader";
import "./postPage.css";
import MyButton from "../../ui/button/MyButton";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  const [fetchPostById, isLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, [params.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='view-post'>
      <div className='post-page'>
        <h1 className='post-title'>{post.title}</h1>

        {isLoading ? (
          <div className='loader-container'>
            <Loader />
          </div>
        ) : (
          <div className='post-content'>
            <div className='post-text'>
              <h2 className='post-subtitle'>{post.description}</h2>
              <p className='post-body'>{post.body}</p>
              {post.image && (
                <div className='post-image-container'>
                  <img
                    src={`http://localhost:3001/${post.image}`}
                    alt={post.title}
                    className='post-image'
                  />
                </div>
              )}
              <MyButton onClick={() => navigate(`/events`)}>Назад</MyButton>
            </div>
          </div>
        )}

        {postError && <p className='error-message'>Error: {postError}</p>}
      </div>
    </div>
  );
};

export default PostPage;
