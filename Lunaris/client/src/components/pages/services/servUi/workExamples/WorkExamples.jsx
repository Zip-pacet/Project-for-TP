import React from "react";
import classes from "./workExamples.module.css";

const WorkExamples = (props) => {
  return (
    <div className={classes.work_examples}>
      <strong>Примеры работ</strong>
      <div className={classes.example_pictures}>
        <img
          src={props.pic1}
          alt='Example work 1'
          className={classes.example_img}
        />
        <img
          src={props.pic2}
          alt='Example work 2'
          className={classes.example_img}
        />
      </div>
      <div className={classes.example_pictures}>
        <img
          src={props.pic3}
          alt='Example work 3'
          className={classes.example_img}
        />
        <img
          src={props.pic4}
          alt='Example work 4'
          className={classes.example_img}
        />
      </div>
    </div>
  );
};

export default WorkExamples;
