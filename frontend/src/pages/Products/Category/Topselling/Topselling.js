import React from "react";

import { Link } from "react-router-dom";
import Categories from "../../Categories";

const Topselling = ({ topsellingDataItem }) => {
  return (
    <>
      <Categories />

      <div className="row m-0 p-4">
        <div class="all-products">
          <p className="primary-heading1">Top selling </p>
        </div>

        <div className="all-products">
          {topsellingDataItem.map((props) => (
            <div className="product" key={props.id}>
              <img src={props.tsimageurl} alt="" />
              <div className="product-info">
                <Link
                  to={`/topsellingdetails/${props.id}`}
                  className="product-title"
                >
                  {props.tsname}
                </Link>

                <p className="product-price">{props.tsprice}</p>
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

export default Topselling;
