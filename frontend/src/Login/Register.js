import React from "react";

import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AuthUser from "../AuthUser";


const Login = () => {
  const navigate = useNavigate();
  const { useState } = React;
  const {http} = AuthUser();

  const [inputs, setinputs] = useState({
    email: "",
    password: "",
    repassword:"",
  });

  const [warnemail, setwarnemail] = useState(false);
  const [warnpass, setwarnpass] = useState(false);
  const [warnrpass, setwarnrpass] = useState(false);
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
    setwarnrpass(false);
    if (inputs.email.length < 1) {
      setdanger(false);
    }
    if (inputs.email === "") {
      setwarnemail(true);
    } else if (inputs.password === "") {
      setwarnpass(true);
    } else {
      
      http.post('/auth/register',{email:inputs.email,password:inputs.password,c_password:inputs.password,name:inputs.name,phone:inputs.number}).then((res)=>{
       navigate('/login');
      });
    }
  };
  const Eye = () => {
    if (pass === "password") {
      setpass("text");
      seteye(false);
    } else {
      setpass("password");
      seteye(true);
    }
  };


  return (
    <><div className="nav-logo-lcontainer">
      <Link to="/home" className="heading">RMS</Link>
    </div>
    <div className="lcontainer">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">

          <div className="side">
            <div className="already">
              Already have an account?
            </div>

            <Link to="/login" className="register">
              Login
            </Link>

            <div className="hello">
              <h2>Create Account</h2>
            </div>

            <form onSubmit={submitForm}>
              <div className="input_text">
                <input
                  className={` ${warnemail ? "warning" : ""}`}
                  type="text"
                  placeholder="Full  your full name"
                  name="name"
                  value={inputs.name}
                  onChange={inputEvent} />
                <p className={` ${danger ? "danger" : ""}`}>
                  <i className="fa fa-warning"></i>Please enter  your full name.

                </p>
              </div>
              <div className="input_text">
                <input
                  className={` ${warnemail ? "warning" : ""}`}
                  type="text"
                  placeholder="Enter your valid Email"
                  name="email"
                  value={inputs.email}
                  onChange={inputEvent} />
                <p className={` ${danger ? "danger" : ""}`}>
                  <i className="fa fa-warning"></i>Please enter a valid email
                  address.
                </p>
              </div>
              <div className="input_text">
                <input
                  className={` ${warnemail ? "warning" : ""}`}
                  type="number"
                  placeholder="Enter your phone number"
                  name="number"
                  value={inputs.number || ""}
                  onChange={inputEvent} />
                <p className={` ${danger ? "danger" : ""}`}>
                  <i className="fa fa-warning"></i>Enter Your Phone Number

                </p>
              </div>


              <div className="input_text">
                <input
                  className={` ${warnpass ? "warning" : ""}`}
                  type={pass}
                  placeholder="Enter Password"
                  name="password"
                  value={inputs.password}
                  onChange={inputEvent} />
                <i
                  onClick={Eye}
                  className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                >
                  {eye ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}

                </i>
              </div>
              <div className="input_text">
                <input
                  className={` ${warnrpass ? "warning" : ""}`}
                  type={pass}
                  placeholder="Enter Re-Password"
                  name="password"
                  value={inputs.password}
                  onChange={inputEvent} />
                <i
                  onClick={Eye}
                  className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                >
                  {eye ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}

                </i>
              </div>

              <div className="btn">
                <button type="submit">Register</button>
              </div>
            </form>




          </div>
        </div>
      </div></>
      
   
  );
};

export default Login;
