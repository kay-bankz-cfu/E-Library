import React from "react";
import "../Pages/Librarians.css";
import Worldcat from "./Worldcat";
import Footer from "./footer";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";

function Librarians() {
  return (
    <>
      <div>
        <Worldcat/>
        <Navbar />
        <div className="background-img">
          <h1>For Librarians</h1>
        </div>

        <div className="why">
          <div>
            <h2>Why become a WorldCat.Org library?</h2>
            <br />
            <p>
              WorldCat.org makes your library’s resources visible to information
              seekers on a freely
            </p>
            <p>
              available website. It is the foundation of our{" "}
              <a href="#">web visibility program</a>, which connects people to
            </p>
            <p>
              libraries from search engines and nonlibrary websites where they
              usually begin their research.
            </p>
            <p>
              Information about library materials is spread across the web via
              strategic partnerships with
            </p>
            <p>
              search engines and key sites, such as Google Books and Goodreads.
              Searchers link from
            </p>
            <p>
              those sites to WorldCat.org and from there, to catalogs of
              libraries that own needed items.
            </p>
            <p>
              The result: Your local resources gain a more global presence,
              promoting libraries as a vital
            </p>
            <p>
              information source and allowing anyone to quickly and easily
              access resources in libraries
            </p>
            <p>around the world. </p>
            <br />
            <p>
              As the world’s largest library catalog website, WorldCat.org helps
              users find items in libraries
            </p>
            <p>
              close to them. If your library is already on WorldCat.org, the
              best ways to maintain visibility on
            </p>
            <p>
              the site are to{" "}
              <a href="#">
                keep your holdings up to date in Worldcat and ensure that
                information about
              </a>
            </p>
            <p>
              <a href="#">
                your library, including links to your catalog, is accurate in
                the worldCat registry
              </a>
            </p>
            <br />
            <hr />
            <br />
            <h2>Put your library in WorldCat.Org</h2>
            <br />
            <p>
              WorldCat.org helps people know more about libraries and their
              collections, connecting people
            </p>
            <p>
              who may not otherwise visit in person or via a website. It expands
              the communities you serve
            </p>
            <p>
              while personalizing and localizing the experience for the people
              you care about most.
            </p>
            <br />
            <p>
              We invite you to learn more about our{" "}
              <a href="#">web visibility program</a> and how your library can
            </p>
            <p>participate.</p>
            <br />
            <div className="res">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">About WorldCat.org</a>
                </li>
                <li>WorldCat for librarians</li>
                <li>
                  <a href="#">Help & FAQ</a>
                </li>
                <li>
                  <a href="#">New features</a>
                </li>
                <li>
                  WorldCat Find app (<a href="#">Apple</a>,
                  <a href="#">Google Play</a> )
                </li>
                <li>
                  <a href="#">Videos: Navigating WorldCat.Org</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="resources">
              <h4>Resources</h4>
              <br />
              <p>About WorldCat.Org</p>
              <p>
                <a href="#">Worldcat for librarians</a>
              </p>
              <p>
                <a href="#">Helps & FAQ</a>
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
export default Librarians;
