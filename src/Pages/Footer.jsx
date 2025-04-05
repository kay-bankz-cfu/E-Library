import React from "react";
import "../Pages/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer(props) {
  return (
    <>
      <section className="oclc-container">
        <div className="oclc-container2">
          <div className="oclc">
            <h3 id="oclc-diff">
              <a className="firstfooter" href="/homepage">
                WorldCat 
              </a>
            </h3>
          </div>
          <div className="oclc">
            <h3>
              <a href="/homepage">OCLC</a>
            </h3>
          </div>
        </div>
        <div className="footer">
          <p>
            WorldCat is the world’s largest library catalog, helping you find
            library materials
            <br />
            online.
          </p>
          <ul className="footer-button">
            <li>
              <a href="homepage">Home</a>
            </li>
            <li>
              <a href="/libraries">Libraries</a>
            </li>
            <li>
              <a href="topics">Topics</a>
            </li>
            <li>
              <a href="list">Lists</a>
            </li>
          </ul>
          <ul className="footer-button">
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="librarians">For Librarians</a>
            </li>
            <li>
              <a href="#">Help & FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div className="footer-icon">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="language-container">
          <h4>Language</h4>
            <select name="" id="">
              <option value="">English</option>
              <option value="">English</option>
              <option value="">English</option>
              <option value="">English</option>
              <option value="">English</option>
            </select>
        </div>

        <div className="copyright"> 
          <a href="#">Copyright &copy; 2001-2024 OCLC. All right reserved. <br />Terms and Conditions Help</a>
          <br /> <br />
          <div className="footer-FAQ">
            <div>
              <a href="#">
                &copy; 2024 OCLC Domestic and international trademarks and /or
                service marks of OCLC. inc. and its affiliates.
              </a>
              <a href="#">cookies notice</a>
              <h3>
                <a href="#">Manage my cookies</a>
              </h3>
            </div>
            <div>
              <a href="#">Privacy policy.</a>
              <a href="#">Accessibility Statement</a> 
              <a href="#">ISO 27001 <br /> Certificate</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
