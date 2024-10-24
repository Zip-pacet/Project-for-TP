import React, { useContext } from "react";
import MyButton from "../../ui/button/MyButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context";

const PostItem = (props) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const placeholderImage = "https://placehold.co/300x200/png";

  return (
    <div className='posts'>
      <div
        className='post'
        onClick={() => navigate(`/events/${props.post.id}`)}
      >
        <div className='post__content'>
          {/*<strong>{props.post.id}</strong>*/}
          <div className='post__title'>{props.post.title}</div>
          <div className='post__body'>{props.post.description}</div>
          <div className='post__btns'>
            {isAuth ? (
              <div>
                <MyButton
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the click event from bubbling up to the post
                    props.remove(props.post);
                  }}
                >
                  Удалить
                </MyButton>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className='post__content'>
          <img
            className='post__img'
            src={"http://193.227.240.138:3001/" + props.post.image}
            alt={props.post.title}
            onError={(e) => {
              e.target.onerror = null; // предотвратить бесконечный цикл
              e.target.src = placeholderImage; // показываем запасное изображение
              console.error("Image failed to load:", props.post.picture);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
