import React from "react";
import "../Pages/About.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import { FaSearch } from "react-icons/fa";
import Worldcat from "./Worldcat";

function About() {
  return (
    <>
      <div>
        <Worldcat/>
        <Navbar />
        <div className="background-imgs">
          <h1>About WorldCat.Org</h1>
        </div>

        <div className="what">
          <div>
            <h2>What is WorldCat.Org?</h2>
            <br />
            <p>
              WorldCat.org is a resource for locating unique, trustworthy
              materials that you often can’t find
            </p>
            <p>
              anywhere except in a library. By connecting thousands of
              libraries’ collections in one place,
            </p>
            <p>
              WorldCat.org makes it easy for you to browse the world’s libraries
              from one search box.
            </p>
            <br />
            <p>
              In the past fifty years, thousands of libraries have represented
              their collections in WorldCat.
            </p>
            <p>
              Today, you can search WorldCat in nearly 500 languages to find
              physical items like books,
            </p>
            <p>
              audiobooks, maps, musical scores, and recordings, along with
              electronic items like ebooks, e-
            </p>
            <p>journals, articles, and digital images you can access online.</p>
            <br />
            <p>
              Search WorldCat.org for information on almost any topic: from
              science to cooking to history
            </p>
            <p>
              and genealogy. Here, you'll find out which libraries own
              bestsellers and one-of-a-kind items
            </p>
            <p>
              like family histories, photos, and other unique materials. A
              search on WorldCat.org delivers a
            </p>
            <p>
              single set of search results that integrates information about
              relevant library resources to
            </p>
            <p>support your information needs.</p>
            <br />
            <p>
              WorldCat.org is provided by OCLC, a nonprofit global library
              organization that provides shared
            </p>
            <p>
              technology services, original research, and community programs so
              libraries can better fuel
            </p>
            <p>learning, research, and innovation.</p>
            <br />
            <hr />
            <br />
            <h2>What is WorldCat find?</h2>
            <br />
            <p>
              WorldCat Find is an extension of WorldCat.org as an app, enabling
              anyone to search the
            </p>
            <p>
              collections of thousands of libraries represented in WorldCat.
              This app is designed with
            </p>
            <p>
              mobile users in mind, focusing on connecting people to libraries
              and their collections. It
            </p>
            <p>
              enables users to search WorldCat.org to identify all formats of
              library resources with search
            </p>
            <p>
              results that highlight libraries closest to them. Additional
              functionality will be added to the
            </p>
            <p>app over time.</p>
            <br />
            <p>
              In its initial release, WordCat Find is available with an English
              language interface to users in
            </p>
            <p>
              the United States. You can download WorldCat Find from the{" "}
              <a href="#">Apple App</a> and <a href="#">Google Play</a>
            </p>
            <p>stories</p>
            <br />
            <hr />
            <br />
            <h2>Where do i go from here?</h2>
            <br />
            <p>
              Search, click on a result, and you’ll see a list of libraries that
              have indicated they have that
            </p>
            <p>
              resource. From there, you can either directly access online
              content or link to the catalog of a
            </p>
            <p>
              library near you for information about how to get the item. If
              what you want is available only
            </p>
            <p>
              from a library far away from you, don’t panic. Save the link to
              the item and ask your local
            </p>
            <p>library if they can get it for you through interlibrary loan.</p>
            <br />
            <hr />
            <br />
            <h2>Partnerships</h2>
            <br />
            <p>
              We work with hundreds of library groups, publishers, technology
              providers, and other
            </p>
            <p>
              organizations to help get library resources in front of more
              people across the world every day.
            </p>
            <p>
              We invite you to
              <a href="#">
                learn more about how your organization could partner with us.
              </a>
            </p>
            <br />
            <div className="res">
              <h4>Resources</h4>
              <ul>
                <li>About WorldCat.org</li>
                <li>
                  <a href="#">WorldCat for librarians</a>
                </li>
                <li>
                  <a href="#">Help & FAQ</a>
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
        <Footer />
      </div>
    </>
  );
}
export default About;
