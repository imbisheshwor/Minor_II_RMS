import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft} from "react-icons/fi";
import Errorp from "../Asset/1.svg"

const Error = () => {
  return (
    <div class="error">        
    <img src={Errorp} alt="" />
    <h1>404</h1>
    <p>Oops! Page not found</p>
    <Link to ="/home" className="secondary-button">
    {" "}<FiArrowLeft />    Back to home
          </Link>
  </div>
  );
};

export default Error;
