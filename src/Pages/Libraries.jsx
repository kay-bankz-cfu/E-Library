import React, { useEffect, useState } from "react";
import "../Pages/Libraries.css";
import Navbar from "./Navbar";
import Discover from "./Discover";
import Worldcat from "./Worldcat";
import Footer from "./footer";

function Libraries() {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    async function getLibraryData() {
      const response = await fetch("http://localhost:3000/api/library");
      const data = await response.json();

      if (response.ok) {
        setLibrary(data.data);
      }
    }

    getLibraryData();
  }, []);

  console.log(library);

  return (
    <>
      <div>
        <Worldcat />
        <Navbar />
        <hr />
        <div className="img-container">
          <div>
            <p className="img-container-content-1">Libraries</p>
            <p className="img-container-content-2">
              Discover libraries near you
            </p>
          </div>
        </div>

        <div className="discover-container">
          {library.length &&
            library.map((lib) => {
              return (
                <Discover
                  key={lib._id}
                  contentName={lib.contentName}
                  libraryName={lib.libraryName}
                  img={lib.img}
                  location={lib.location}
                  text1={lib.text1}
                  text2={lib.text2}
                  text3={lib.text3}
                  directions={lib.directions}
                />
              );
            })}
        </div>

        <Footer />
      </div>
    </>
  );
}
export default Libraries;
