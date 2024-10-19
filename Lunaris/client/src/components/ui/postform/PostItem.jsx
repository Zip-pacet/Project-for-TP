import React from "react";
import MyButton from "../button/MyButton";

const PostItem = (props) => {
  return (
    <div className='posts'>
      <div className='post'>
        <div className='post__content'>
          <strong>{props.number}</strong>
          <div>{props.post.title}</div>
          <div>{props.post.body}</div>
          <img src={props.post.image}></img>
          <div className='post__btns'>
            <MyButton onClick={() => props.remove(props.post)}>
              Удалить
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
