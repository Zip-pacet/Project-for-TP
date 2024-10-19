import React from "react";
import { Link } from "react-router-dom";
import classes from "./portfolioBlock.module.css";

const PortfolioBlock = ({ linkTo, text, imageAlt, imageSrc }) => {
  return (
    <Link to={linkTo} className={classes.portfolio_block_link}>
      <div className={classes.portfolio_block}>
        <p className={classes.portfolio_block_text}>{text}</p>

        <img
          src={imageSrc}
          alt={imageAlt}
          className={classes.portfolio_block_image}
        />
      </div>
    </Link>
  );
};

export default PortfolioBlock;
