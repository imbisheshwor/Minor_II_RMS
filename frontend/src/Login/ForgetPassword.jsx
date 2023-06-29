import React from 'react';
import Password from '../Asset/password.svg'
import { Link } from 'react-router-dom';
import "../Login/Login.css";
import { FiArrowLeft} from "react-icons/fi";


const  ForgetPassword =()=> {
    const { useState } = React;

  const [inputs, setinputs] = useState({
    email: "",
  
  });

  const [warnemail, setwarnemail] = useState(false);
 
  const [danger, setdanger] = useState(true);

 
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
    
    if (inputs.email.length < 1) {
      setdanger(false);
    }
    else {
      alert("Successfully");
    }
  };
 
  return (
    <><div className="nav-logo-container">
      <Link to="/home" className="heading">RMS</Link>
    </div><div className="container my-5">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="rounded mx-auto d-block">
            <img src={Password} className="center-block d-block mx-auto" alt="" />
          </div>
          <div className="hello">
            <h2>Forget Password</h2>
            <p className='text-muted'>Enter your email and we'll send you a link to reset your  password</p>
          </div>

          <form onSubmit={submitForm}>
            <div className="input_text">
              <input
                className={` ${warnemail ? "warning" : ""}`}
                type="text"
                placeholder="Enter Email"
                name="email"
                value={inputs.email}
                onChange={inputEvent} />
              <p className={` ${danger ? "danger" : ""}`}>
                <i className="fa fa-warning"></i>Please enter a email address.
              </p>
            </div>
            <div className="btn">
              <div className='login-button'>
                <Link to="/otp">Forget Password</Link>
              </div>

            </div>
            <Link to="/login" className="register text-dark font-weight-normal mx-3 my-3">
              {" "}<FiArrowLeft />  <u> Back to login</u>
            </Link>


          </form>
        </div>
      </div></>
        
  );
};

export default ForgetPassword;
