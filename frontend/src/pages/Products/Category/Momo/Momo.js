import React from "react";

import { Link } from "react-router-dom";
import Categories from "../../Categories";
import { useState } from "react";
import { momoData, vmomoData ,bmomoData } from "../../../../Data/categorydata";

const Momo = () => {
  const [momoDataItem] = useState(momoData)

  const [vmomoDataItem] = useState(vmomoData)

  const [bmomoDataItem] = useState(bmomoData)

  

  

  return (
    <>
      <Categories />

      <div className="row m-0 p-4">
        <div class="all-products">
          <p className="primary-heading1">Chicken Momo</p>
        </div>

        <div className="all-products">
          {momoDataItem.map((props) => (
            <div className="product" key={props.id}>
              <img src={props.momoimageurl} alt="" />
              <div className="product-info">
                <Link to={`/momodetails/${props.id}`} className="product-title">
                  {props.momoname}
                </Link>

                <p className="product-price">{props.momoprice}</p>
                <Link to="/cart" className="primary-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="row m-0 p-4">
        <div class="all-products">
          <p className="primary-heading1">Veg. Momo</p>
        </div>

        <div className="all-products">
          {vmomoDataItem.map((props) => (
            <div className="product" key={props.id}>
              <img src={props.vmomoimageurl} alt="" />
              <div className="product-info">
                <Link to={`/momodetails/${props.id}`} className="product-title">
                  {props.vmomoname}
                </Link>

                <p className="product-price">{props.vmomoprice}</p>
                <Link to="/cart" className="primary-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row m-0 p-4">
        <div class="all-products">
          <p className="primary-heading1">Buff. Momo</p>
        </div>

        <div className="all-products">
          {bmomoDataItem.map((props) => (
            <div className="product" key={props.id}>
              <img src={props.bmomoimageurl} alt="" />
              <div className="product-info">
                <Link to={`/momodetails/${props.id}`} className="product-title">
                  {props.bmomoname}
                </Link>

                <p className="product-price">{props.pmomoprice}</p>
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

export default Momo;
