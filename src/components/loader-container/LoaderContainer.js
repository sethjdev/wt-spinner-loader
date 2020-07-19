import React, { useState } from "react";
import styles from "./LoaderContainer.module.css";
import Button from "../button/Button";
import useInterval from "../../hooks/useInterval";
import DocumentTitle from "../../components/document-title/DocumentTitle";
import renderStatusText from "../../helpers/renderStatusText";
import Spinner from "../spinner/Spinner";

function LoaderContainer() {
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  useInterval(() => {
    if (started) {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        setStarted(false);
      }
    }
  }, 100);

  const complete = !started && progress === 100;

  return (
    <>
      <DocumentTitle title={renderStatusText(started, progress, complete)} />
      <div className={styles.wrapper}>
        <div className={styles.loaderWrapper}>
          <Spinner started={started} progress={progress} complete={complete} />
        </div>
        <div className={styles.controlsWrapper}>
          <Button
            label={"Start"}
            onClick={() => setStarted(true)}
            disabled={started || complete}
          />
          <Button
            label={"Stop"}
            onClick={() => setStarted(false)}
            disabled={!started}
          />
          <Button
            label={"Reset"}
            onClick={() => setProgress(0)}
            disabled={progress === 0}
          />
        </div>
      </div>
    </>
  );
}

export default LoaderContainer;
