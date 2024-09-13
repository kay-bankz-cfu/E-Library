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
            <a href="#">Topics</a>
            <a href="#">Lists</a>
            <a href="#">About</a>
            <a href="#">For Librarians</a>
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