import React, { useRef } from "react";
import propTypes from "prop-types";
import styles from "./Spinner.module.css";

function Spinner(props) {
  const { started, progress, complete } = props;
  const spinSvgRef = useRef(null);
  const circleWidth = 50;

  const strokeDasharray = Math.PI * (2 * circleWidth) - 30;
  let strokeDashoffset = ((100 - progress) / 100) * strokeDasharray;

  if (!!spinSvgRef.current) {
    if (started) {
      spinSvgRef.current.style.animationPlayState = "running";
    } else {
      spinSvgRef.current.style.animationPlayState = "paused";
    }
  }

  return (
    <div className={styles.wrapper}>
      {/* SPINNER CIRCLES */}
      <svg
        className={styles.spinAnim}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        ref={spinSvgRef}
      >
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
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.circleBg}
      >
        <circle
          cx="50"
          cy="50"
          r={circleWidth - 5}
          className={styles.circleTrack}
        />
      </svg>

      {/* STATUS TEXT */}
      <div className={`${styles.innerCircleWrapper}`}>
        <div
          className={`${styles.percentInnerWrapper} ${
            complete ? styles.complete : ""
          }`}
        >
          <span className={styles.percentText}>{progress}</span>
          <span className={styles.percentUnit}>%</span>
        </div>
        {complete && (
          <div className={styles.completeWrapper}>
            <p>UPLOAD COMPLETE!</p>
          </div>
        )}
      </div>
    </div>
  );
}

Spinner.defaultProps = {
  started: false,
  progress: 0,
  complete: false,
};

Spinner.propTypes = {
  started: propTypes.bool,
  progress: propTypes.number,
  complete: propTypes.bool,
};

export default Spinner;
