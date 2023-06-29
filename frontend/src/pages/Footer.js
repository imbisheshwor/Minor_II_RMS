import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
        <Link to ="/home" className="heading">RMS</Link>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <Link to="/profile">About us</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/bookatable">Book Table</Link>

        
        </div>

        <div className="footer-section-columns">
        

        <Link to="/Login">Login</Link>
        <Link to="/register">SignUp</Link>
        </div>

        

        <div className="footer-section-columns">
          <span>123-456-7890</span>
          <span>rms@gmail.com</span>
          <span>contact@gmail.com</span>
          <span>contact@gmail.com</span>
        </div>
        <div className="footer-section-columns">
        <Link to="/terms">Terms &amp; Conditions</Link>
      <Link to="/privacy">Privacy Policy</Link>
    </div>
        </div>
      </div>
  
  );
};

export default Footer;
