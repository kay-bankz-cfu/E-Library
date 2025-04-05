import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Components/Signup.css";

function Signup() {
  const [signupData, setSignupData] = useState({});
  const [error, setError] = useState({});
  const Navigate = useNavigate();

  // HANDLE INPUT CHANGE
  const handleInput = (e) => {
    setSignupData((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  // HANDLE LOGIN
  async function handleLogin(e) {
    e.preventDefault();

    // ASSUMING SIGNUPDATA AND SETERROR ARE DEFINED SOMEWHERE IN YOUR COMPONENT STATE
    let error = [];

    if (!signupData.firstname) {
      error = { ...error, firstname: "First Name Is Required !" };
    }

    if (!signupData.lastname) {
      error = { ...error, lastname: "Last Name Is Required !" };
    }

    if (!signupData.email) {
      error = { ...error, email: "Email Address Is Required !" };
    }

    if (!signupData.number) {
      error = { ...error, number: "Mobile Number Is Required !" };
    }

    if (!signupData.password) {
      error = { ...error, password: "Password Is Required !" };
    }

    if (!signupData.confirm) {
      error = { ...error, confirm: "Confirm Password !" };
    }

    //CHECK IF THERE IS ANY ERROR
    if (Object.keys(error).length === 0) {
      // IF NO ERRORS NAVIGATE TO THE LOGIN PAGE
      try {
        // ASSUMING NAVIGATE IS A FUNCTION TO NAVIGATE TO ANOTHER PAGE
        const response = await fetch("http://localhost:3000/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw Error("Unable to complete your registration :(");
        }

        if (data.status === "success") {
          Navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    }

    // UPDATE THE STATE WITH THE ERROR OBJECTS
    setError(error);

    // LOG THE ERROR OBJECT TO THE CONSOLE
    console.log(error);
  }

  return (
    <>
      <div id="library-container">
        <span>Library Registration📚</span>
        <p className="fill">Fill out the form carefully for registration</p>
        <p className="fill">It"s Quick & Easy</p>
      </div>
      <div id="page">
        <div className="img-containers">
          <img
            src="bookshelf.jpg"
            alt="bookshelf"
          />
        </div>

        <div className="form-content">
          <form id="form-containerr" onSubmit={handleLogin}>
            <input
              type="text"
              name="firstname"
              className="input-content"
              placeholder="First Name"
              onChange={handleInput}
            />
            <br />
            {error.firstname && <p className="error">{error.firstname}</p>}
            {/* <input type="text" name="" className="" placeholder="Middle Name"/> */}
            <input
              type="text"
              name="lastname"
              className="input-content"
              placeholder="Last Name"
              onChange={handleInput}
            />
            <br />
            {error.lastname && <p className="error">{error.lastname}</p>}

            <input
              type="email"
              name="email"
              className="input-content"
              placeholder="Email Address"
              onChange={handleInput}
            />
            <br />
            {error.email && <p className="error">{error.email}</p>}

            <input
              type="number"
              name="number"
              className="input-content"
              placeholder="Mobile Number"
              onChange={handleInput}
            />
            <br />
            {error.number && <p className="error">{error.number}</p>}

            <input
              type="password"
              name="password"
              className="input-content"
              placeholder="Passward"
              onChange={handleInput}
            />
            <br />
            {error.password && <p className="error">{error.password}</p>}
            <input
              type="password"
              name="confirm"
              className="input-content"
              placeholder="Confirm Password"
              onChange={handleInput}
            />
            <br />
            {error.confirm && <p className="error">{error.confirm}</p>}
            {/* <input type="radio" name="gender" id="" />
            Male
            <br />
            <input type="radio" name="gender" id="" />
            Female
            <br /> */}
            <button type="submit" value="Signup">
              Sign Up
            </button>
          </form>
          <br />
          <div className="already">
            <input type="checkbox" name="" id="" />
            <span>Accept Terms And Condition</span>
            <br />
            <Link style={{ fontSize: "23px" }} to="/login">
              Already Have An Account? <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
