import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../../ui/loader/Loader";
import "./postPage.css"; // Import the CSS

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [images, setImages] = useState([]); // Now handling multiple images

  // Fetching post by ID
  const [fetchPostById, isLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  // Fetching multiple images (simulated or via API)
  const [fetchImagesById, isImgLoading, imgError] = useFetching(async (id) => {
    const response = await PostService.getImageById(id); // Simulated single image fetch
    const repeatedImages = Array(4).fill(response.data); // Simulate multiple images (using the same one)
    setImages(repeatedImages); // Set the repeated images into state
  });

  useEffect(() => {
    fetchPostById(params.id); // Fetch the post
    fetchImagesById(params.id); // Fetch multiple images (simulated)
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
            {post.id}. {post.title}. {post.body}
          </div>
        )}

        {postError && <p className='error-message'>Error: {postError}</p>}

        {isImgLoading ? (
          <div className='loader-container'>
            <Loader />
          </div>
        ) : (
          <div className='post-images-container'>
            {images.length > 0 ? (
              images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Image ${index + 1}`}
                  className='post-image'
                  loading='lazy'
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        )}

        {imgError && <p className='error-message'>Error: {imgError}</p>}
      </div>
    </div>
  );
};

export default PostPage;
