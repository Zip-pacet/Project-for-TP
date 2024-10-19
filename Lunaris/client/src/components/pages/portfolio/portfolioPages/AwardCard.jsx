import React from "react";
import styles from "./awardCard.module.css";

function AwardCard({ title, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default AwardCard;
