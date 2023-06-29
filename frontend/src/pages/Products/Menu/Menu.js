import React from "react";

import { Link } from "react-router-dom";
import Categories from "../Categories";
import { useState } from "react";
import { menuData } from "../../../Data/data";

const Menu = () => {
  const [menuDataItem] = useState(menuData)
  return (
    <>
      <Categories />
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
      <div className="row m-0 p-4">

      <div class="all-products">
          <p className="primary-heading1">All Menu </p>
        </div>
      <div className="all-products">
        {menuDataItem.map((props) => (
          
          <div className="product" key={props.id}>
            <img src={props.menuimageurl} alt="" />
            <div className="product-info">
              <Link
                to={`/productdetails/${props.id}`}
                className="product-title"
              >
                {props.menuname}
              </Link>

              <p className="product-price">{props.menuprice}</p>
              <Link to="/cart" className="primary-button">
                Add to Cart
              </Link>
            </div>
          </div>
          
        ))}
      </div>
      </div>
    </>
  );
};

export default Menu;
