import React from "react";
import { useState } from "react";
import "../Pages/Navbar.css";
import { FiMenu } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";



const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu =() =>{
    setMenuOpen(!menuOpen)
  };
    return(
        <>
        <div className="ibadan">
          <button className="menu-toggle" onClick={toggleMenu}><FiMenu /></button>
          <div className={`link-wrap ${menuOpen ? "active" : ""} `}>
            <a href="/">Home</a>
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