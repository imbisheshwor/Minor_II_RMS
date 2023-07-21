import React from "react";
import Navbar from "../components/Navbar";

import Img1 from "../Asset/Img1.jpg";
import Img2 from "../Asset/Img2.jpg";
import Img3 from "../Asset/Img3.jpg";
import Img4 from "../Asset/Img4.jpg";
import Footer from "./Footer";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },

    {
      id: 3,
      imgSrc: Img1,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img4,
    },
    {
      id: 6,
      imgSrc: Img4,
    },
    {
      id: 7,
      imgSrc: Img2,
    },
  ];

  return (
    <div className="home-container">
      <Navbar />
      <div className="about-section-container">
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div className="pics" key={index} >
                <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
