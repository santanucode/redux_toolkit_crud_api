import React from "react";
import "../styles.css";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-container">
      <ScaleLoader className="spinner" color="#fff" />
    </div>
  );
};

export default Loader;
