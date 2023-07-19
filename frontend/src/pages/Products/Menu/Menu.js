import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import Categories from "../Categories";
import { menuData } from "../../../Data/data";

import axios from 'axios';


const Menu = () => {
  const [data, setData] = useState([])
  const [menuDataItem] = useState(menuData)







  const fetchInfo = async () => {
    return await  axios.get('http://127.0.0.1:8000/api/product')
      .then(({data}) => setData(data?.products));
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  console.log(data);


  return (
    <>
      <Categories />
      <div class="dropdown">
        {/* <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button> */}
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
          {data.map((props) => (

            <div className="product" key={props.id}>
              <img src={props.menuimageurl} alt="" />
              <div className="product-info">
                <Link
                  to={`/productdetails/${props.id}`}
                  className="product-title"
                >
                  {props.name}
                </Link>

                <p className="product-price">{props.sale_price}</p>
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
