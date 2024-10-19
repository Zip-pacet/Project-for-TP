import React from "react";
import { Link } from "react-router-dom";

const ImgBlock = ({ link, title, imgSrc, text }) => {
  return (
    <li className='block-item'>
      <Link to={link}>
        <h2>{title}</h2>
        <img src={imgSrc} alt={title} className='block-item-image' />
        <p className='block-item-text'>{text}</p>
      </Link>
    </li>
  );
};

export default ImgBlock;
