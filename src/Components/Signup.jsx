import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components/Signup.css";

function Signup() {
  // const [signupData, setSignupdata] = useState({});
  // const [error, setError] = useState({});
  // const navigate = useNavigate();

  return (
    <>
      <div>
        <h2>Library Registration</h2>
        <p>Fill out the form carefully for registration</p>
        <form action="">
          <br />
          <input type="text" name="" id="" placeholder="First Name" required />
          {/* <input type="text" name="" id="" placeholder="Middle Name"/> */}
          <input type="text" name="" id="" placeholder="Last Name" />
          <br />
          <input type="number" name="" id="" placeholder="Mobile Number" />
          <input type="email" name="" id="" placeholder="Email Address" />
          <br />
          <input type="password" name="" id="" placeholder="Passward" />
          <br />
          <input type="radio" name="gender" id="" />
          Male
          <br />
          <input type="radio" name="gender" id="" />
          Female
          <br />
          <button>Sign Up</button>
        </form>
        <input type="checkbox" name="" id="" />
        <span>Accept Terms And Condition</span>
        <div>
            <Link>
            Already Have An Account?
            </Link>
        </div>
      </div>
    </>
  );
}
export default Signup;
