import React from "react";
import "../Pages/List.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import { FaSearch } from "react-icons/fa";

function List() {
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
        <Navbar />
        <div className="background-img">
          <h1>Lists</h1>
        </div>
        <div className="list">
          <p>
            Lists allow you to keep track of items of interest so you can refer
            to them whenever you want. You may use lists for a variety of
          </p>
          <p>
            purposes: curating your favorite items, keeping track of items you
            want to read, or grouping items together by research topics. Best
          </p>
          <p>
            of all, you can also share your lists with friends and colleagues!
            List invitations can be sent to anyone with an email address
          </p>
          <p>
            regardless of whether they maintain a WorldCat.org account. For
            library staff, lists are a powerful tool to highlight items from
            your
          </p>
          <p>
            collections. For example, you could use lists to curate seasonal
            reading materials or broadcast items related to trending cultural
          </p>
          <p>
            topics. Library-curated lists are promoted to users on our home page
            and are a great way to showcase the unique strengths of your
          </p>
          <p>
            library’s collections. WorldCat.org staff accounts enable multiple
            library staff to collaborate on shared library-associated lists.
          </p>
        </div>

        <div className="young-readers-bg">
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
        </div>

        <div>
            <div>
                <p>Creating a list is as easy as 1,2,3</p>
                <ol>
                    <li>From the Item Details screen, click “Add.”</li>
                    <li>From the Add item to a list dialog, click “Create New” to open the Create new list dialog.</li>
                    <li>From the 'Create New' list dialog, enter the list name and description, selete a privacy
                        <br />
                         setting, and click 'Create'.</li>
                </ol>
                <div>
                    Individual users can create up to 50 lists, each with up to 500 times; Institutional users using 
                    <br />
                    library staff account can create an unlimited number of lists each also up to 500 times. For 
                    <br />
                    additional information on creating and managing lists, visit <a href="#">WorldCat.org documentation</a> or
                    <br />
                    <a href="#">Watch a video</a> about how to create and share lists on WorldCat.org.
                </div>
            </div>
            <img src="" alt="" />
        </div>
        <Footer/>
      </div>
    </>
  );
}
export default List;
