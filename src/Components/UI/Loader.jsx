import React from "react";
import "./Loader.css";
import { RiLoader2Fill } from "react-icons/ri";

const Loader = () => {
  return (
    <div className="loader">
      <RiLoader2Fill className="loaderIcon" />
    </div>
  );
};

export default Loader;
