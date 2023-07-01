import React from "react";
import Otpp from "../Asset/Otp.svg";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import { FiArrowLeft } from "react-icons/fi";

const Otp = () => {

    const { useState } = React;

    const [inputs, setinputs] = useState({
      number: "",
      
    });
  
    const [warnumber, setwarnumber] = useState(false);
   
    const [danger, setdanger] = useState(true);
  
   
    
   
  
    const inputEvent = (event) => {
      const number = event.target.number;
      const value = event.target.value;
      if (number === "number") {
        if (value.length > 0) {
          setdanger(true);
        }
      }
      setinputs((lastValue) => {
        return {
          ...lastValue,
          [number]: value,
        };
      });
    };
  
    const submitForm = (e) => {
      e.preventDefault();
      
      setwarnumber(false);
      if (inputs.number.length < 1) {
        setdanger(false);
      }
      if (inputs.number === "") {
        setwarnumber(true);
      } else {
        alert("OTp ");
      }
    };
  
  return (
  
    //  <div class="container">
    //      <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 text-center">
    //     <form class="rounded bg-white shadow p-5">
    //     <h3 class="text-dark fw-bolder fs-4 mb-2">Two Step Verification</h3>

    //     <form class="rounded bg-white shadow p-5">
    // 				<h3 class="text-dark fw-bolder fs-4 mb-2">Two Step Verification</h3>

    // 				<div class="fw-normal text-muted mb-4">
    // 					Enter the verification code we sent to
    // 				</div>

    //      </form>

    //      </div>

    //  </div>

    <div className="lcontainer my-5">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="rounded mx-auto d-block">
          <img src={Otpp} className="center-block d-block mx-auto" alt="" />
        </div>
        <div className="hello">
          <h3 class="text-dark fw-bolder fs-4 mb-2">Two Step Verification</h3>
          <p className="fw-normal text-muted mb-4">
            Enter the verification code we sent to
          </p>
        </div>

        {/* <form onSubmit={submitForm}> */}
        <form onSubmit={submitForm}>
          {/* <div class="otp_input text-start mb-2">
            <div class="d-flex align-items-center justify-content-between mt-2">
              <input type="text" className="form-control" placeholder="" />
              <input type="text" className="form-control" placeholder="" />
              <input type="text" className="form-control" placeholder="" />
              <input type="text" className="form-control" placeholder="" />
              <input type="text" className="form-control" placeholder="" />
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div> */}

<div className="input_text">
                <input
                  className={` ${warnumber ? "warning" : ""}`}
                  type="number"
                  placeholder="Enter OTP Code"
                  name="number"
                  value={inputs.number}
                  onChange={inputEvent}
                />
                <p className={` ${danger ? "danger" : ""}`}>
                  <i className="fa fa-warning"></i>Please enter a OTP Code.
                </p>
              </div>
          <div className="fw-normal text-muted text-end mb-2">
            Didn't the code ?{" "}
            <Link to="" className="text-primary fw-bold text-decoration-none">
              Resend
            </Link>
          </div>

          <div className="btn">
            <div className="login-button">
              <Link to="/otp">Submit</Link>
            </div>
          </div>
          <Link
            to="/login"
            className="register text-dark font-weight-normal mx-3 my-3"
          >
            {" "}
            <FiArrowLeft /> <u> Back to login</u>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Otp;
