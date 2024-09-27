import React, { useState } from "react";
// import { useState } from "react";
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
  function handleLogin(e) {
    e.preventDefault();

    // ASSUMING SIGNUPDATA AND SETERROR ARE DEFINED SOMEWHERE IN YOUR COMPONENT STATE
    let error = {};

    if (!signupData.firstname) {
      error = { ...error, firstname: "First Name Is Required !" };
    }

    if (!signupData.lastname) {
      error = { ...error, lastname: "Last Name Is Required !" };
    }

    if (!signupData.number) {
      error = { ...error, number: "Mobile Number Is Required !" };
    }

    if (!signupData.email) {
      error = { ...error, email: "Email Address Is Required !" };
    }

    if (!signupData.password) {
      error = { ...error, password: "Password Is Required !" };
    }

    if (!signupData.confirm) {
      error = { ...error, confirm: "Confirm Password !" };
    }

    //CHECK IF THERE IS ANY ERROR
    if (Object.key(error).length === 0) {
      // IF NO ERRORS NAVIGATE TO THE LOGIN PAGE
      try {
        // ASSUMING NAVIGATE IS A FUNCTION TO NAVIGATE TO ANOTHER PAGE
        Navigate("/login");
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
      <div id="page">
        <img src="bookshelf.jpg" alt="bookshelf" style={{ width: "100%" }} />
        <div className="form-content">
          <h1>Library Registration📚</h1>
          <p className="fill">Fill out the form carefully for registration</p>
          <p className="fill">It"s Quick & Easy</p>
          <form id="form-container" action="" onSubmit={handleLogin}>
            <input
              type="text"
              name="firstname"
              id="input-content"
              placeholder="First Name"
              onChange={handleInput}
            />
            <br />
            {error.firstname && <p className="error">{error.firstname}</p>}
            {/* <input type="text" name="" id="" placeholder="Middle Name"/> */}
            <input
              type="text"
              name="lastname"
              id="input-content"
              placeholder="Last Name"
              onChange={handleInput}
            />
            <br />
            {error.lastname && <p className="error">{error.lastname}</p>}
            <input
              type="number"
              name="number"
              id="input-content"
              placeholder="Mobile Number"
              onChange={handleInput}
            />
            <br />
            {error.number && <p className="erorr">{error.number}</p>}
            <input
              type="email"
              name="email"
              id="input-content"
              placeholder="Email Address"
              onChange={handleInput}
            />
            <br />
            {error.email && <p className="error">{error.email}</p>}
            <input
              type="password"
              name="password"
              id="input-content"
              placeholder="Passward"
              onChange={handleInput}
            />
            <br />
            {error.password && <p className="error">{error.password}</p>}
            <input
              type="password"
              name="confirm"
              id="input-content"
              placeholder="Confirm Password"
              onChange={handleInput}
            />
            <br />
            {error.confirm && <p className="error">{error.confirm}</p>}
            <input type="radio" name="gender" id="" />
            Male
            <br />
            <input type="radio" name="gender" id="" />
            Female
            <br />
            <button type="submit">Sign Up</button>
          </form>
          <input type="checkbox" name="" id="" />
          <span>Accept Terms And Condition</span>
          <div>
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
