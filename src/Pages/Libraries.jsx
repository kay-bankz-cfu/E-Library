import React from "react";
import "../Pages/Libraries.css";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import Discover from "./Discover";
import Footer from "./footer";

function Libraries(props) {
  return (
    <>
      <div>
        <div className="worldcat">
          <h1>
            <a href="/homepage">WorldCat</a>
          </h1>
          <div className="libraries-nav">
            <button>Libraries</button>
            <div>
              <input
                type="search"
                name=""
                id=""
                placeholder="Type a library name"
              />
              <i>
                <FaSearch />
              </i>
            </div>
          </div>
          <div className="create">
            <a href="signup">Create Account</a>
            <a href="login">SIgn In</a>
          </div>
        </div>
        <Navbar/>
        <hr />
        <div className="img-container">
          <div>
            <p className="img-container-content-1">Libraries</p>
            <p className="img-container-content-2">Discover libraries near you</p>
          </div>
        </div>
        <div>
          
        <Discover
        top_content="Special or cooperate library"
        library_name="Educational Bookstore"
        img="book5.jpg"
        library_location="0.8 kilometers from your current location."
        text1="284, Herbert Marcauley St., Sabo- Yaba"
        text2="Lagos 23401"
        text3="Nigeria"
        library_directions="Get Direction"
        />
        </div>
        <Discover
        top_content="Others"
        library_name="First Bank of Nigeria PLC"
        img="book5.jpg"
        library_location="4.8 kilometers from your current location"
        text1="2 Abebe Village Rd, Iganmu Complex"
        text2="Lagos"
        text3="Nigeria"
        library_directions="Get Direction"
        />
        <Discover
        top_content="Others"
        library_name="Micheal Joanna Publication"
        img="book5.jpg"
        library_location="8 kilometers from your current location."
        text1="c/o Professor Sofola A., Univ of Lagos"
        text2="Lagos"
        text3="Nigeria"
        library_directions="Get Direction"
        />
        <Footer/>
      </div>
    </>
  );
}
export default Libraries;
