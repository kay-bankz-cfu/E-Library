import React from "react";
import "../Pages/Homepage.css";
import Navbar from "./Navbar";
import Sustainability from "./Sustainability";
import Footer from "./footer";
import Discover from "./Discover";
import Libraries from "./Libraries";
import signup from "../Components/Signup";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaReadme } from "react-icons/fa";

function Home() {
  return (
    <>
      <div>
        <div className="worldcat">
          <h1>
            <a href="/homepage">WorldCat</a>
          </h1>
          <div className="create">
            <a href="signup">Create Account</a>
            <a href="#">SIgn In</a>
          </div>
        </div>
        <Navbar />
        <div className="img-background">
          {/* <img
            src="/backgroundimg.jpg"
            alt=""
            style={{ width: "100%", height: "500px" }}
          /> */}
          <div className="find">
            <p>Find items in libraries near you</p>
            <div className="dis">
              <div className="all-search-container">
                <button className="span-container">
                  Items
                  {/* <select name="" id="">
                    <option>Items</option>
                    <option>Libraries</option>
                    <option>Lists</option>
                  </select> */}
                  <i>
                    <FaCaretDown />
                  </i>
                </button>
                <span>
                  <input
                    type="search"
                    name=""
                    id="search"
                    placeholder="Search for books, articles and more"
                  />
                  <button>Search</button>
                </span>
              </div>
              <div>
                <i>
                  <FaRegPaperPlane />
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="whitebg">
          <div>
            <Sustainability
              image="book5.jpg"
              sus1="Sustainability"
              sus2="Sustainability"
              offer="Libraries offer extensive resources for anyone intere..."
              btn="Learn more"
            />
          </div>
          <div>
            <Sustainability
              image="book5.jpg"
              sus1="Books for book cover"
              sus2="Books for book cover"
              offer="Library resources to help you more fully explore your..."
              btn="Learn more"
            />
          </div>
          <div>
            <Sustainability
              image="book5.jpg"
              sus1="Genealogy"
              sus2="Genealogy"
              offer="WorldCat.org and genealogy: a powerful combination..."
              btn="Learn more"
            />
          </div>
          {/* <section className="bg">
            <div ClassName="three">
              <img
                src="/book5.jpg"
                alt=""
                style={{ width: "80%", height: "450px" }}
              />
              <p ClassName="sus1">Sustainability</p>
            </div>
            <p ClassName="sus2">Sustainability</p>
            <p Classname="offer">Libraries offer extensive resources for anyone intere...</p>
            <button ClassName="btn">Learn more</button>
          </section> */}
          {/* <section>
            <div>
              <img
                src="/book5.jpg"
                alt=""
                style={{ width: "80%", height: "450px" }}
              />
              <p>Sustainability</p>
            </div>
            <p>Sustainability</p>
            <p>Libraries offer extensive resources for anyone intere...</p>
            <button>Learn more</button>
          </section>
          <section>
            <div>
              <img
                src="/book5.jpg"
                alt=""
                style={{ width: "80%", height: "450px" }}
              />
              <p>Sustainability</p>
            </div>
            <p>Sustainability</p>
            <p>Libraries offer extensive resources for anyone intere...</p>
            <button>Learn more</button>
          </section> */}
        </div>

        <div className="woman">
          <a href="#">Woman in Sports For Young Readers</a>
          <p>Curated by Ryan Woodward</p>
        </div>

        <div className="books">
          <div>
            <a href="#">
              <img
                src="/book4.jpg"
                alt=""
                style={{ width: "80%", height: "210px" }}
              />
              <p>
                Queens of the ice
                <br />
                :they were fast,...
              </p>
            </a>
            <p className="carly">Carly Adams</p>
          </div>
          <div>
            <a href="#">
              <img
                src="/book4.jpg"
                alt=""
                style={{ width: "80%", height: "210px" }}
              />
              <p>
                Kate raelly good
                <br />
                at hockey.
              </p>
            </a>
            <p className="carly">Christina M. Frey</p>
          </div>
          <div>
            <a href="#">
              <img
                src="/book4.jpg"
                alt=""
                style={{ width: "80%", height: "210px" }}
              />
              <p>
                Unbeatable Betty
                <br />
                :the first female...
              </p>
            </a>
            <p className="carly">
              Allison Crotzer
              <br />
              Kimmel
            </p>
          </div>
          <div>
            <a href="#">
              <img
                src="/book4.jpg"
                alt=""
                style={{ width: "80%", height: "210px" }}
              />
              <p>Yusra swims</p>
            </a>
            <p className="carly">Julie Abery</p>
          </div>
          <div>
            <a href="#">
              <img
                src="/book4.jpg"
                alt=""
                style={{ width: "80%", height: "210px" }}
              />
              <p>
                Unsinkable :from
                <br />
                Russian orphan...
              </p>
            </a>
            <p className="carly">Jessica Tatiana Long</p>
          </div>
        </div>
        <section className="worldcat-usage">
          <p>
            <h3>How to use WorldCat.org</h3>
          </p>
          <section className="welcome">
            <div>
              <h3>Welcome to WorldCat.org</h3>
              <div>
                Get started with WorldCat.org. In about two minutes, you can
                learn how to
                <br />
                make a WorldCat.org profile, create and add items to lists,
                export citations,
                <br />
                and use facets to narrow your search criteria. It’s a quick way
                to introduce
                <br />
                yourself to the basics of searching the world’s largest
                collection
                <br />
                of information about materials in libraries.
              </div>
              <button>Learn more</button>
            </div>
            <div>
              <h3>Use WorldCat.org for school research</h3>
              <div>
                Get started with WorldCat.org. In about two minutes, you can
                learn how to
                <br />
                make a WorldCat.org profile, create and add items to lists,
                export citations,
                <br />
                and use facets to narrow your search criteria. It’s a quick way
                to introduce
                <br />
                yourself to the basics of searching the world’s largest
                collection
                <br />
                of information about materials in libraries.
              </div>
              <button>Learn more</button>
            </div>
          </section>
        </section>
        <div className="circle-img">
          <div className="cir-img">
            <img
              src="/book4.jpg"
              alt=""
              style={{ width: "68%", height: "400px" }}
            />
          </div>
          <div className="gen">
            <p>Genealogy</p>
            <div>
              If you’re interested in genealogy or family history, you’re in the
              right place. Libraries
              <br />
              and archives are often the only source for unique, local
              information about
              <br />
              cemetery, burial, and military records; family Bibles, church, and
              town histories;
              <br />
              indexes of births, marriages, and deaths; photographs, newspapers,
              microfilm, and
              <br />
              so much more.
            </div>
            <button>Learn more</button>
          </div>
        </div>
        <section className="explore-container">
          <p className="exp">Explore resources in libraries worldwide</p>
          <div>
            <div className="books-container">
              <div className="book-icon">
                <i>
                  <FaBook />
                </i>
                <div>
                  <p>Books</p>
                  <h1>405 million</h1>
                </div>
              </div>
              <div className="book-icon">
                <i>
                  <FaBookOpen />
                </i>
                <div>
                  <p>Articles</p>
                  <h1>440 million</h1>
                </div>
              </div>
              <div className="book-icon">
                <i>
                  <FaMicrophoneAlt />
                </i>
                <div>
                  <p>Sound Recording</p>
                  <h1>25 million</h1>
                </div>
              </div>
            </div>
            <div className="books-container">
              <div className="book-icon">
                <i>
                  <FaHeadphones />
                </i>
                <div>
                  <p>Musical Scores</p>
                  <h1>10 million</h1>
                </div>
              </div>
              <div className="book-icon">
                <i>
                  <FaLocationArrow />
                </i>
                <div>
                  <p>Maps</p>
                  <h1>6 million</h1>
                </div>
              </div>
              <div className="book-icon">
                <i>
                  <FaReadme />
                </i>
                <div>
                  <p>Theses/Dissertations</p>
                  <h1>30 million</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <div>
          <p className="exp">Popular WorldCat.org user lists</p>
          <div className="women">
            <a href="#">
              <img
                src="/library.jpg"
                alt=""
                style={{ width: "90%", height: "120px" }}
              />
              <p>Women in sports</p>
              <div>
                With the olympic and the women's world cup
                <br />
                coming up, female athletes are taking the
                <br />
                sports world by storm. Jump into theses
                <br />
                books featuring the stories of inspirational
                <br />
                females athletes and their decition to the...
              </div>
              <div className="empty"></div>
            </a>
            <a href="#">
              <img
                src="/library.jpg"
                alt=""
                style={{ width: "80%", height: "120px" }}
              />
              <p>Women in sports</p>
              <div>
                With the olympic and the women's world cup
                <br />
                coming up, female athletes are taking the
                <br />
                sports world by storm. Jump into theses
                <br />
                books featuring the stories of inspirational
                <br />
                females athletes and their decition to the...
              </div>
              <div className="empty"></div>
            </a>
            <a href="#">
              <img
                src="/library.jpg"
                alt=""
                style={{ width: "90%", height: "120px" }}
              />
              <p>Women in sports</p>
              <div>
                With the olympic and the women's world cup
                <br />
                coming up, female athletes are taking the
                <br />
                sports world by storm. Jump into theses
                <br />
                books featuring the stories of inspirational
                <br />
                females athletes and their decition to the...
              </div>
              <div className="empty"></div>
            </a>
          </div>
        </div>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}
export default Home;
