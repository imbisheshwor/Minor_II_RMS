import React  from "react";

import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import panner from "../../../Asset/panner.jpg";
import noodles from "../../../Asset/noodles.jpg";
import food from "../../../Asset/food.jpeg";
import pizza from "../../../Asset/pizza.jpg";

const Products = () => {
  // const [showNotification, setShowNotification] = useState(false);

  // const handleAddToCart = () => {
  //   setShowNotification(true);
  //   setTimeout(() => {
  //     setShowNotification(false);
  //   }, 20000); // Hide the notification after 2 seconds
  // };
  return (
    <div className="product-page-wrapper">
      <p className="primary-heading1">Most Selling</p>

      <div class="home-products">
        <div class="product">
          <img src={panner}  alt=""/>

          <div class="product-info">
            <Link to="/productdetails" className="product-title">
             Shrimp Fried Rice
            </Link>
            <p class="product-price">160</p>
            <Link
              to="/cart"
              className="primary-button"
              // onClick={handleAddToCart}
            >
              Add to Cart
            </Link>
            {/* {showNotification && (
              <div className="notification">Item added to cart!</div>
            )} */}
          </div>
        </div>

        <div class="product">
        <img src={food}  alt=""/>

          <div class="product-info">
            <Link to="/productdetails" className="product-title">
              Spring Roll
            </Link>
            <p class="product-price">150</p>
            <Link
              to="/cart"
              className="primary-button"
              // onClick={handleAddToCart}
            >
              Add to Cart
            </Link>
            {/* {showNotification && (
              <div className="notification">Item added to cart!</div>
            )} */}
          </div>
        </div>

        <div class="product">
        <img src={noodles}  alt=""/>

          <div class="product-info">
            <Link to="/productdetails" className="product-title">
              Oster
            </Link>
            <p class="product-price">120</p>
            <Link
              to="/cart"
              className="primary-button"
              // onClick={handleAddToCart}
            >
              Add to Cart
            </Link>
            {/* {showNotification && (
              <div className="notification">Item added to cart!</div>
            )} */}
          </div>
        </div>

        <div class="product">
        <img src={pizza}  alt=""/>

          <div class="product-info">
            <Link to="/productdetails" className="product-title">
              Pizza
            </Link>
            <p class="product-price">220</p>
            <Link
              to="/cart"
              className="primary-button"
              // onClick={handleAddToCart}
            >
              Add to Cart
            </Link>
            {/* {showNotification && (
              <div className="notification">Item added to cart!</div>
            )} */}
          </div>
        </div>

        </div>
        
       
         <Link to ="/menu" className="secondary-button">
           See More <FiArrowRight />{" "}
         </Link>
    </div>
  );
};

export default Products;
