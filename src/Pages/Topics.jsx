import React from "react";
import "../Pages/Topics.css";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import Topicsbooks from "./Topicsbooks";
import Footer from "./footer";

function Topics() {
  return (
    <>
      <div className="all">
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
        <Navbar />
        {/* <hr /> */}
        <div className="background-img">
          <h1>Topics</h1>
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /> */}
        </div>
        <div className="bg-img-buttom-content">
          <p>
            It’s amazing what’s available in the world’s libraries. To help you
            get started, we’ve put
          </p>
          <p>
            together some scenarios to explore. They’ll provide guidance for
            finding libraries near
          </p>

          <p>
            you and around the globe. Our hope is that you’ll use what you find
            here to connect with
          </p>
          <p>a library.</p>
        </div>
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
        <div className="topic-products">
          <Topicsbooks
            image="book4.jpg"
            women="Women's history"
            text="Both histrical and current resources."
          />
          <Topicsbooks
            image="book4.jpg"
            women="Books For Book Lover."
            text="If you love books, there are books for that."
          />
          <Topicsbooks
            image="book4.jpg"
            women="Genealogy"
            text="If you’re interested in genealogy or family history, you’re in the right place."
          />
        </div>
        <div className="topic-products">
          <Topicsbooks
            image="book4.jpg"
            women="Sustainability"
            text="Explore resources related to sustainability, conservation, and environmentalism."
          />
          <Topicsbooks
            image="book4.jpg"
            women="Cooking"
            text="Much more than making meals."
          />
          <Topicsbooks
            image="book4.jpg"
            women="Martin Luther King, Jr."
            text="Historical and current resources pertaining to Civil Rights leader Martin Luther King, J."
          />
        </div>
        <div className="topic-products">
          <Topicsbooks
            image="book4.jpg"
            women="Automobiles"
            text="Hit the road for unique automobile resources."
          />
          <Topicsbooks
            image="book4.jpg"
            women="Cycling"
            text="Explore cycling history, legendary riders, the art of the bike, movies inspired by bicycling, and more."
          />
          <Topicsbooks
            image="book4.jpg"
            women="Back To Campus"
            text="Resources for college success."
          />
        </div>
        <div className="topic-products">
          <Topicsbooks
            image="book4.jpg"
            women="Use WorldCat.Org For School Research"
            text="Learn additional basic and advanced search techniques in this simple tutoria."
          />
          <Topicsbooks
            image="book4.jpg"
            women="Open Content"
            text="Find open access materials for research and study."
          />
          <Topicsbooks
            image="book4.jpg"
            women="Welcome to WorldCat.org"
            text="Get started with WorldCat.org."
          />
        </div>
        <div className="topic-products">
          <Topicsbooks
            image="book4.jpg"
            women="News"
            text="Check back here for news and updates related to WorldCat.org."
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Topics;
