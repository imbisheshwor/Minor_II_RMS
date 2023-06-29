import React  from "react";

import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";



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
          <img src=""  alt=""/>

          <div class="product-info">
            <Link to="/productdetails" className="product-title">
              Food
            </Link>
            <p class="product-price">129</p>
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
        <img src=""  alt=""/>

          <div class="product-info">
            <Link to="/productdetails" className="product-title">
              Food
            </Link>
            <p class="product-price">129</p>
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
        <img src=""  alt=""/>

          <div class="product-info">
            <Link to="/productdetails" className="product-title">
              Food
            </Link>
            <p class="product-price">129</p>
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
        <img src=""  alt=""/>

          <div class="product-info">
            <Link to="/productdetails" className="product-title">
              Food
            </Link>
            <p class="product-price">129</p>
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
