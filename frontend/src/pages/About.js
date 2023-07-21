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
          <h1 className="primary-heading"style={{color:"orange"}}>Online Food Delivery</h1>
          <p className="primary-text d-flex justify-content-start">
          Juggling a busy work schedule, household chores, or other commitments? Online food delivery is the ultimate time-saving solution. Skip the grocery store, meal prep, and cooking; let the professionals take care of it. Your delicious meal will be prepared and delivered promptly, allowing you to reclaim precious time to focus on what matters most to you.
          </p>
        </div>
      </div>

      <Team />
    </div>
  );
};

export default About;
