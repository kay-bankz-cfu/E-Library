import React from "react";
import { Link } from "react-router-dom";
import "../Pages/Topicsbooks.css";

function Topicsbooks(props) {
  return (
    <>
      <div className="Topicsbooks">
        <img src={props.image} alt="" height={"200px"} width={"100%"} />
        <div>
          <a href="#">{props.women}</a>
          <p>{props.text}</p>
          <hr />
          <Link to="#">
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Topicsbooks;
