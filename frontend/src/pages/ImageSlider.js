import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import First from "../Asset/Restaurant.jpg";
import './Slider.css'

class ImageSlider extends React.Component {
  render() {
    const settings = {
   
      infinite: true, // Loop slide
      speed: 500, // Transition speed
      slidesToShow: 1, // Number of slides to show
      slidesToScroll: 1, // Number of slides to scroll
      autoplay: true, // Autoplay enabled
      autoplaySpeed: 5000, // Autoplay interval in milliseconds
      responsive: [
        {
          breakpoint: 768, // Change settings for mobile devices
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           
          }
        }
      ]
    };

    return (
      <Slider {...settings}>
        <div className='slider'>
          <img src={First} alt="" />
        </div>
        <div className='slider'>
          <img src={First} alt="" />
        </div>
        <div className='slider'>
          <img src={First}  alt="" />
        </div>
      </Slider>
    );
  }
}

export default ImageSlider;
