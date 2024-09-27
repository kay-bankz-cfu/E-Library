import React from "react";
import "../Pages/Navbar.css";
import { FaRegPaperPlane } from "react-icons/fa";



function Navbar(props){
    return(
        <>
        <div className="ibadan">
          <div>
            <a href="homepage">Home</a>
            <a href="libraries">Libraries</a>
            <a href="topics">Topics</a>
            <a href="list">Lists</a>
            <a href="about">About</a>
            <a href="librarians">For Librarians</a>
          </div>
          <div>
            <i>
            <FaRegPaperPlane />
            </i>
            Ibadan, Nigeria
          </div>
        </div>
        </>
    );
}
export default Navbar;