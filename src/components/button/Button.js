import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ label, onClick, disabled }) {
  return (
    <button className={style.wrapper} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
