import React from "react";
import { Link } from "react-router-dom";
import classes from "./aboutBlock.module.css";

const AboutBlock = ({ link, text }) => {
  return (
    <li>
      <Link to={link} className={classes.about_block_link}>
        <div className={classes.about_block}>
          <p className={classes.about_block_text}>{text}</p>
        </div>
      </Link>
    </li>
  );
};

export default AboutBlock;
