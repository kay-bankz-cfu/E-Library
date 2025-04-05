import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components/Login.css";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {
    setLoginData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  async function submitData(e) {
    e.preventDefault();

    if (!loginData.email) {
      setError((previous) => ({
        ...previous,
        email: "Email is reguired",
      }));

      return;
    }

    if (!loginData.password) {
      setError((previous) => ({
        ...previous,
        password: "Password is required",
      }));

      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw Error("Details provided not match :(");
      }

      if (data.status === "success") {
        navigate("/otpverification");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="whole-container">
        <div id="log-img">
          <img
            src="library.jpg"
            alt=""
            style={{ height: "auto", width: "100%" }}
          />
        </div>
        <form action="" id="form-container" onSubmit={submitData}>
          <h1>Please Enter Your Login Details</h1>
          <br />

          {/* <div className="undraw">
            <img src="undraw.png" style={{width: "55%", height: "100px"}} alt="" />
          </div> */}
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={loginData.email}
            onChange={handleChange}
          />
          {error.email && <p className="error">{error.email}</p>}
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={loginData.password}
            onChange={handleChange}
          />
          {error.password && <p className="error">{error.password}</p>}
          <br />
          <button type="submit">Login</button>
          <br />
          <br />
          <Link style={{ fontSize: "20px" }} to="/signup">
            Not a member? Sign Up
          </Link>
        </form>
      </div>
    </>
  );
}
export default Login;
