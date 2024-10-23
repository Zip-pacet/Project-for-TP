import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../../ui/loader/Loader";
import "./postPage.css"; // Import the CSS

const PostPage = () => {
  const params = useParams();

  const [post, setPost] = useState({});

  // Fetching post by ID
  const [fetchPostById, isLoading, postError] = useFetching(async (id) => {
    console.log("доходит ли id " + params.id);

    const response = await PostService.getById(params.id);
    setPost(response);
  });

  useEffect(() => {
    fetchPostById(params.id); // Fetch the post
  }, [params.id]);

  return (
    <div className='view-post'>
      <div className='post-page'>
        <h1>Страница с новостью ID = {params.id}</h1>

        {isLoading ? (
          <div className='loader-container'>
            <Loader />
          </div>
        ) : (
          <div className='post-content'>
            {post.id}. {post.title}. {post.body}. {post.image}
          </div>
        )}

        {postError && <p className='error-message'>Error: {postError}</p>}
      </div>
    </div>
  );
};

export default PostPage;
