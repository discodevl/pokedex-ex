import React from "react";
import styles from "./Button.module.css";

function Button({ children, onClick }) {
    
    return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={onClick}><img alt="" src={require('../../assets/icons8-list-10.png')}/> {children}</button>
    </div>
  );
}

export default Button;
