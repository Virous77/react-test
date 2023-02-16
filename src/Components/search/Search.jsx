import React from "react";
import "./Search.css";
import { throttle } from "../utils/data";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Users"
        onChange={throttle(handleSearch, 300)}
      />
    </div>
  );
};

export default Search;
