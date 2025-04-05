import React from "react";
import "../Pages/Homepage.css";
import Navbar from "./Navbar";
import Sustainability from "./Sustainability";
import Footer from "./footer";
import Discover from "./Discover";
import Libraries from "./Libraries";
import Topics from "./Topics";
import List from "./List";
import About from "./About";
import Librarians from "./Librarians";
import signup from "../Components/Signup";
import Login from "../Components/Login";
import Otpverification from "../Components/Otpverification";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaReadme } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";

function Home() {
  return (
    <>
      <div>
        <div className="worldcat">
          <div>
            <h1>
              <a href="/">WorldCat</a>
            </h1>
          </div>
          <div className="create">
            <a href="signup">Create Account</a>
            <a href="login">Sign In</a>
          </div>
        </div>
        <Navbar />
        <div className="img-background">
          <div className="find">
            <p>Find items in libraries near you</p>
            <div className="dis">
              <div className="all-search-container">
                <select name="" id="">
                  <option value="">Items</option>
                  <option value="">
                    <a href="/libraries"></a>Libraries
                  </option>
                  <option value="">Lists</option>
                </select>
                <div className="input-box">
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search For Books, Articles And More"
                  />
                  <button className="btn-search">Search</button>
                </div>
                {/* <div>
                  <FaRegPaperPlane />
                </div> */}
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
        </div>

        <div className="woman">
          <a href="#">Woman in Sports For Young Readers</a>
          <p>Curated by Ryan Woodward</p>
        </div>

        <div className="novel">
          <div className="img1">
            <img src="/book4.jpg" alt="" />
            <br />
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStarHalf />
            </i>{" "}
            <br />
            <a href="">
              Queens of the ice
              <br />
              :they were fast,...
            </a>
            <p className="carly">Carly Adams</p>
          </div>

          <div className="img1">
            <img src="/book4.jpg" alt="" />
            <br />
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStarHalf />
            </i>
            <br />
            <a href="">
              Kate raelly good
              <br />
              at hockey.
            </a>

            <p className="carly">Christina M. Frey</p>
          </div>

          <div className="img1">
            <img src="/book4.jpg" alt="" />
            <br />
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <br />
            <a href="">
              Unbeatable Betty
              <br />
              :the first female...
            </a>

            <p className="carly">
              Allison Crotzer
              <br />
              Kimmel
            </p>
          </div>

          <div className="img1">
            <img src="/book4.jpg" alt="" />
            <br />
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStarHalf />
            </i>
             <br />
            <a href="">Yusra swims</a>

            <p className="carly">Julie Abery</p>
          </div>

          <div className="img1">
            <img src="/book4.jpg" alt="" />
            <br />
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStarHalf />
            </i>
            <br />
            <a href="">
              Unsinkable :from
              <br />
              Russian orphan...
            </a>

            <p className="carly">Jessica Tatiana Long</p>
          </div>
        </div>

        {/* <div className="books">
          <div className="img1">
            <img src="/book4.jpg" alt="" />
            <br />
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStarHalf />
            </i>{" "}
            <br />
            <a href="">
              Queens of the ice
              <br />
              :they were fast,...
            </a>
            <p className="carly">Carly Adams</p>
          </div>
          <div className="img1">
            <img src="/book4.jpg" alt="" />
            <br />
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStarHalf />
            </i>
            <br />
            <a href="">
              Kate raelly good
              <br />
              at hockey.
            </a>

            <p className="carly">Christina M. Frey</p>
          </div>
          <div className="img1">
            <img src="/book4.jpg" alt="" />
            <br />
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <br />
            <a href="">
              Unbeatable Betty
              <br />
              :the first female...
            </a>

            <p className="carly">
              Allison Crotzer
              <br />
              Kimmel
            </p>
          </div>
          <div className="img1">
            <img src="/book4.jpg" alt="" />
            <br />
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStarHalf />
            </i>
             <br />
            <a href="">Yusra swims</a>

            <p className="carly">Julie Abery</p>
          </div>
          <div className="img1">
            <img src="/book4.jpg" alt="" />
            <br />
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStar />
            </i>
            <i>
              <FaRegStarHalf />
            </i>
            <br />
            <a href="">
              Unsinkable :from
              <br />
              Russian orphan...
            </a>

            <p className="carly">Jessica Tatiana Long</p>
          </div>
        </div> */}
        <section className="worldcat-usage">
          <h3>How to use WorldCat.org</h3>
          <section className="welcome">
            <span>
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
            </span>
            <span>
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
            </span>
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
            <div className="books-container1">
              <div className="book-icon1">
                <i>
                  <FaHeadphones />
                </i>
                <div>
                  <p>Musical Scores</p>
                  <h1>10 million</h1>
                </div>
              </div>
              <div className="book-icon1">
                <i>
                  <FaLocationArrow />
                </i>
                <div>
                  <p>Maps</p>
                  <h1>6 million</h1>
                </div>
              </div>
              <div className="book-icon1">
                <i>
                  <FaReadme />
                </i>
                <div>
                  <p>Dissertations</p>
                  <h1>30 million</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        {/*  */}
        <div className="popular">
          <p className="exp">Popular WorldCat.org user lists</p>
          <div className="women-in-sport">
            <a href="#">
              <img
                src="/library.jpg"
                alt=""
                style={{ width: "90%", height: "120px" }}
              />
              <div className="in-sport-bg">
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
              </div>
            </a>
            <a href="#">
              <img
                src="/library.jpg"
                alt=""
                style={{ width: "90%", height: "120px" }}
              />
              <div className="in-sport-bg">
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
              </div>
            </a>
            <a href="#">
              <img
                src="/library.jpg"
                alt=""
                style={{ width: "90%", height: "120px" }}
              />
              <div className="in-sport-bg">
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
              </div>
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
