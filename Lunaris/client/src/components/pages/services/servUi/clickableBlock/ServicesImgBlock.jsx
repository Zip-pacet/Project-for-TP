import React from "react";
import { Link } from "react-router-dom";
import classes from "./servicesImgBlock.module.css";

const ServicesImgBlock = ({ link, title, imgSrc, text }) => {
  return (
    <div className={classes.h2}>
      <h2>{title}</h2>
      <Link className={classes.block} to={link}>
        <img src={imgSrc} alt={title} className={classes.img} />
        <p>{text}</p>
      </Link>
    </div>
  );
};

export default ServicesImgBlock;
