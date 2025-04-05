import React from "react";
import "../Pages/Discover.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDirections } from "react-icons/fa";

function Discover(props) {
  return (
    < >
      <div className="libraries-container-1">
        <div className="libraries-container-2">
          <div className="content-container">
            <p className="top_content">{props.contentName}</p>
            <div className="edu_flex">
              <div>
                <img src={props.img} alt="" height={"170px"} width={" 100%"} />
              </div>
              <div>
                <a href="#" className="library_name">
                  {props.libraryName}
                </a>
                <p className="library_location">
                  <i>
                    <FaMapMarkerAlt />
                  </i>
                  {props.location}
                </p>

                <p className="text1">{props.text1}</p>
                <p className="text2">{props.text2}</p>
                <p className="text3">{props.text3}</p>
                <a href="#" className="library_directions">
                  {props.direction}{" "}
                  <i>
                    <FaDirections />
                  </i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Discover;
