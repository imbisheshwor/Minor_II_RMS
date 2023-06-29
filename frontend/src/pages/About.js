import React from "react";

import AboutBackgroundImage from "../Asset/AboutBackgroundImage.svg";

import Team from "./Team";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section-container">
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading">Online Food Delivery</h1>
          <p className="primary-text d-flex justify-content-start">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="primary-text">
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.Non tincidunt magna non et elit. Dolor
            turpis molestie dui magnis facilisis at.
          </p>
        </div>
      </div>

   
        
          
      

      <Team />
    </div>
  );
};

export default About;
