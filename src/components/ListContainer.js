import React from "react";
import styles from "./ListContainer.module.css";

function CardList({ children, title }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>{children}</div>
    </div>
  );
}

export default CardList;
