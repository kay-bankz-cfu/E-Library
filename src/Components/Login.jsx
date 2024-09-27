import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components/Login.css";


function Login() {
const [loginData, setLoginData] = useState({
  email: "",
  Password: "",
});
const [error, setError] = useState({
  email: "",
  password: "",
});

// HANDLE INPUT CHANGE

const handleChange = (e) => {
  setLoginData((previous) => (
    {
    ...previous,
    [e.target.name]: e.target.value,
   }
   ));
};

function submitData(e) {
  e.preventDefault();
  if (!loginData.email || !loginData.Password) {
    if (!loginData.email) {
      setError((previous) => ({
        ...previous,
        email: "Email is reguired",
      }));
    }

    if (!loginData.Password) {
      setError((previous) => ({
        ...previous,
        password: "Password is required",
      }));
      return;
    }
    console.log(error);
  }
 };
  return (
    <>
      <div className="whole-container">
        <div>
          <img
            src="bookbg.webp"
            alt=""
            style={{ width: "100%", height: "603px" }}
          />
        </div>
        <form action="" id="form-container" onSubmit={submitData}>
          <h1>Login Into Your E-library Acc</h1>
          {/* <label htmlFor=""> */}
            Email
            <br />
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email Address"
              value={loginData.email}
              onChange={handleChange}
            />
          {/* </label> */}
          {error.email && <p className="error">{error.email}</p>}
          <br />
          {/* <label htmlFor=""> */}
            Password
            <br />
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter Your Password"
              value={loginData.password}
              onChange={handleChange}
            />
          {/* </label> */}
          {error.password && <p className="error">{error.password}</p>}
          <br />
          <input type="radio" name="gender" id="" />
          Male
          <br />
          <input type="radio" name="gender" id="" />
          Female
          <br />
          <button type="submit">Login</button>
          <br />
        <Link style={{ fontSize: "23px" }} to="/signup">
          Not a member? Sign Up
        </Link>
        </form>
      </div>
    </>
  );
}
export default Login;