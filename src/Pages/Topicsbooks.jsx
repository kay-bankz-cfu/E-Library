import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Pages/Topicsbooks.css";

const SlicedText = ({text}) => {
  // Slice text to a certain length and add ellipsis
  const SliceText = text.slice(0, 70) + "...";
  return<p>{SliceText}</p>;
};


function Topicsbooks(props) {
   const [data, setData] = useState({});

   useEffect(() => {
       async function getTextData() {
         const fetchData =[

          {
                 id: 1,
                 text: "Both histrical and current resources.",
               },
               {
                 id: 2,
                 text: "If you love books, there are books for that.",
               },
               {
                 id: 3,
                 text: "If you’re interested in genealogy or family history, you’re in the right place.",
               },
               {
                 id: 4,
                 text: "Explore resources related to sustainability, conservation, and environmentalism.",
               },
               {
                 id: 5,
                 text: "Much more than making meals.",
               },
               {
                 id: 6,
                 text: "Historical and current resources pertaining to Civil Rights leader Martin Luther King, J.",
               },
               {
                 id: 7,
                 text: "Hit the road for unique automobile resources.",
               },
               {
                 id: 8,
                 text: "Explore cycling history, legendary riders, the art of the bike, movies inspired by bicycling, and more.",
               },
               {
                 id: 9,
                 text: "Resources for college success.",
               },
               {
                 id: 10,
                 text: "Learn additional basic and advanced search techniques in this simple tutoria.",
               },
               {
                 id: 11,
                 text: "Find open access materials for research and study.",
               },
               {
                 id: 12,
                 text: "Get started with WorldCat.org.",
               },
               {
                 id: 13,
                 text: "Check back here for news and updates related to WorldCat.org.",
               },

         ];
         setData(fetchData);
        };

        getTextData();
      }, []);

  return (
    <>
      <div className="Topicsbooks">
        <img src={props.image} alt="" height={"200px"} width={"100%"} />
        <div>
          <a href="#">{props.women}</a>
          {/* <p>{props.text}</p> */}
            {data.length > 0 && <SlicedText text= {data[0].text}/>}
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
