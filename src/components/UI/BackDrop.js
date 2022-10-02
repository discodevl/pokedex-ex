import React from "react";
import ReactDom from "react-dom";
import styles from "./BackDrop.module.css";

function Backdrop({ onCancel }) {
  return ReactDom.createPortal(
    <div className={styles.backdrop} onClick={onCancel}></div>,
    document.getElementById("portal")
  );
}

export default Backdrop;
