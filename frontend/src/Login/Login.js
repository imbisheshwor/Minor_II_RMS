import React from "react";

import "../Login/Login.css";
import { Link } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState,useEffect } from "react";


const Login = () => {
  const { useState } = React;
  const [email, setEfmail] = useState();

  const [inputs, setinputs] = useState({
    email: "",
    password: "",
  });

  const [warnemail, setwarnemail] = useState(false);
  const [warnpass, setwarnpass] = useState(false);
  const [danger, setdanger] = useState(true);

  const [eye, seteye] = useState(true);
  const [pass, setpass] = useState("password");

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "email") {
      if (value.length > 0) {
        setdanger(true);
      }
    }
    setinputs((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setwarnemail(false);
    setwarnpass(false);
    if (inputs.email.length < 1) {
      setdanger(false);
    }
    if (inputs.email === "") {
      setwarnemail(true);
    } else if (inputs.password === "") {
      setwarnpass(true);
    } else {
      alert("Logged in Successfully");
    }
  };
  const Eye = () => {
    if (pass === "password") {
      setpass("text");
      seteye(false);
      setwarnemail(true);
    } else {
      setpass("password");
      seteye(true);
      setwarnpass(true);
    }
  };
  return (
    <>
      <div className="nav-logo-lcontainer">
        <Link to ="/home" className="heading">RMS</Link>
      </div>
      <div className="lcontainer">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="side">
            <Link to="/register" className="register">
              Register
            </Link>

            <div className="hello">
              <h2>Welcome!</h2>
            </div>

            <form onSubmit={submitForm}>
              <div className="input_text">
                <input
                  className={` ${warnemail ? "warning" : ""}`}
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={inputs.email}
                  onChange={inputEvent}
                />
                <p className={` ${danger ? "danger" : ""}`}>
                  <i className="fa fa-warning"></i>Please enter a email address.
                </p>
              </div>
              <div className="input_text">
                <input
                  className={` ${warnpass ? "warning" : ""}`}
                  type={pass}
                  placeholder="Enter Password"
                  name="password"
                  value={inputs.password}
                  onChange={inputEvent}
                />

                <p className={` ${danger ? "danger" : ""}`}>
                  <i className="fa fa-warning"></i>Please enter a password
                </p>
                <i
                  onClick={Eye}
                  className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                >
                  {eye ? (
                    <VisibilityOffIcon fontSize="small" />
                  ) : (
                    <VisibilityIcon fontSize="small" />
                  )}
                </i>
              </div>
              <div className="recovery">
                <Link to="/forgetpassword">Forget Password?</Link>
              </div>
              <div className="btn">
                <button type="submit">Sign in</button>
              </div>
            </form>

            <hr />
            <div className="or">
              <h5>Or<br /></h5></div>
            <div className="signw">
           <h5>SignIn With</h5>
           </div>
            
            <div className="boxes">
              <span>
                <img src="https://imgur.com/XnY9cKl.png" />
              </span>
              <span>
                <img src="https://imgur.com/ODlSChL.png" />
              </span>
              <span>
                <img src="https://imgur.com/mPBRdQt.png" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
