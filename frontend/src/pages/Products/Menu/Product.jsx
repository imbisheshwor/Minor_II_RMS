import React from "react";

export default function Product(props) {
  return (
    <div className="products-page-wrapper">
      <div class="home-products">
        <div class="product">
          {/* <img src="" alt="" /> */}
          <img src={props.url} alt="product image" />
          <div className="product-info">
            <h4 className="product-title">{props.name}</h4>
            <p className="product-price">{props.price}</p>
            <button className="primary-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
