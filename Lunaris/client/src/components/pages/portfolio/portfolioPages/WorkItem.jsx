import React from "react";
import classes from "./workItem.module.css";

const WorkItem = ({ img, title, description }) => {
  return (
    <div className={classes.work_item}>
      <img src={img} alt={title} className={classes.work_image} />
      <div className={classes.work_info}>
        <h3 className={classes.work_title}>{title}</h3>
        <p className={classes.work_description}>{description}</p>
      </div>
    </div>
  );
};

export default WorkItem;
