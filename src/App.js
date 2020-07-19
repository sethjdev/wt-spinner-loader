import React from "react";
import LoaderContainer from "./components/loader-container/LoaderContainer";
import "./App.css";

export default (props) => {
  return (
    <div className="app-wrapper">
      <LoaderContainer />
      <p className="copyright">WeTransfer Technical Assesment - &copy; 2020 <a href="mailto:seth.johnson0126@gmail.com">Seth Johnson</a></p>
    </div>
  );
};
