import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

import "../Components/Otpverification.css";

// function verify() {
const Otpverification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  // HANDLE OTP INPUT CHANGE

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 4) {
      setOtp(value);
      setError();
    } else {
      setError("Enter a valid 4 digit OTP :)");
    }
  };

  // HANDLE FORM SUBMISSION

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 4) {
      console.log("submitting otp", otp);
    } else {
      setError("Please enter a 4 digit otp sent to your email:)");
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <img
            src="mail.png"
            alt=""
            style={{ width: "10rem", height: "180px" }}
          />
        </div>

        <h2>OTP Verification</h2>
        <div>Enter the otp sent to your email: </div>
        <form action="" onSubmit={handleSubmit}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />

          <button type="submit" className="btn">
            Verify & Proceed
          </button>
        </form>
      </div>
    </>
  );
};

export default Otpverification;

// import React, { useState } from 'react';

// export default function App() {
//   const [otp, setOtp] = useState('');

//   return (
//     <OtpInput
//       value={otp}
//       onChange={setOtp}
//       numInputs={4}
//       renderSeparator={<span>-</span>}
//       renderInput={(props) => <input {...props} />}
//     />
//   );
// }
