import React from "react";
import styles from "./ListContainer.module.css";

function CardList({ children, title, main }) {
  return (
    <div className={`${styles.container} ${main && styles.main}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>{children}</div>
    </div>
  );
}

export default CardList;
