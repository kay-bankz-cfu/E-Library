import React from "react";
import "../Pages/Worldcat.css";
import { FaSearch } from "react-icons/fa";

function WorldCat(props) {
  return (
    <>
      <div className="worldcat">
        <h1>
          <a  className="world" href="/">WorldCat</a>
        </h1>
        <div className="select-container">
          <select name="" id="">
            <option value="">Items</option>
            <option value="">Libraries</option>
            <option value="">Lists</option>
          </select>
          <div className="input-nav">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search For Books Articles And More"
            />
            <FaSearch className="search" />
          </div>
        </div>
        <div className="create">
          <a href="signup">Create Acc</a>
          <a href="login">Sign In</a>
        </div>
      </div>
    </>
  );
}
export default WorldCat;
