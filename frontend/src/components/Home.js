import React from "react";

import Res from "../Asset/res.webp";
import AboutBackgroundImage from "../Asset/AboutBackgroundImage.svg";
import { FiArrowRight } from "react-icons/fi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { productData, responsive } from "../Data/data.js";
import Navbar from "./Navbar";

import Work from "../pages/Work";
import Products from "../pages/Products/Menu/Products";
import Feature from "../pages/Feature";
import Product from "../pages/Products/Menu/Product";



import Testimonial from "../pages/Testimonial";

import { Link } from "react-router-dom";
import Footer from "../pages/Footer";


const Home = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
    />
  ));


  return (
    <div className="home-container">
     <Navbar />
    
      <div className="home-banner-container">
     
        <div className="home-text-section">
          <h1 className="primary-heading">Food</h1>
          <p className="primary-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
            autem nulla illo repellendus ipsam eligendi, sapiente eaque enim
            aut, velit iste aliquam. Architecto nobis voluptates fugiat fuga
            commodi inventore! Facere!
          </p>
          <Link to ="/menu" className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </Link>
        </div>
        <div className="home-image-section">
          <img src={Res} alt="" />
        </div>
      </div>

     
      
      
      <Feature />
      
      <Products />

    
     
      <div className="all-products"> 

      <p className="primary-heading1">Appetizers</p>
      </div>

  
    
      <Carousel  responsive={responsive}>
        {product}
      </Carousel>


      
      <div className="home-products">
      <p className="primary-heading1">Beverage</p>
      </div>
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
       
      <div className="home-products">
      <p className="primary-heading1">Breakfast</p>
      </div>
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
      
      <div className="about-container">
      <div className="about-section-container">
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading">Online Food Delivery</h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <p className="primary-text">
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
          <div className="about-buttons-container">
            <Link to ="/about" className="secondary-button">Learn More</Link>
          </div>
        </div>
      </div>
      </div>

      <Work />

      <Testimonial />
      <Footer />

      
    </div>
  );
};

export default Home;
