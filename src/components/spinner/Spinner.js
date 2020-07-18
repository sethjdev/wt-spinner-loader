import React from "react";
import propTypes from "prop-types";
import styles from "./Spinner.module.css";

function Spinner(props) {
  const { started, progress, complete } = props;

  const circleWidth = 50;
  const strokeDasharray = 2 * 3.14 * circleWidth;
  const strokeDashoffset = strokeDasharray - strokeDasharray * (progress / 100);

  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r={circleWidth - 5}
          style={{
            strokeDasharray,
            strokeDashoffset,
          }}
        />
      </svg>
    </div>
  );
}

Spinner.propTypes = {
  started: propTypes.bool,
  progress: propTypes.number,
  complete: propTypes.bool,
};

export default Spinner;
