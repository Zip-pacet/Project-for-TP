import React from "react";
import { Link } from "react-router-dom";
import classes from "./imgBlock.module.css";

const ImgBlock = ({ link, title, imgSrc, text }) => {
  return (
    <li className={classes.block_item}>
      <Link to={link}>
        <h2>{title}</h2>
        <img src={imgSrc} alt={title} className={classes.block_item_image} />
        <p className={classes.block_item_text}>{text}</p>
      </Link>
    </li>
  );
};

export default ImgBlock;
