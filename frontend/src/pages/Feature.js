import React from "react";

import AboutBackgroundImage from "../Asset/about-background-image.png";


// import { BsFillPlayCircleFill } from "react-icons/bs";

const Feature = () => {
  return (
    
    <div className="feature-section-container">
          

      <div className="feature-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="feature-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="feature-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="feature-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
    </div>
  );
};

export default Feature;
