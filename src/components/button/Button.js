import React from "react";
import style from "./Button.module.css";

export default ({ label, onClick }) => {
  return (
    <button className={style.wrapper} onClick={onClick}>
      {label}
    </button>
  );
};
