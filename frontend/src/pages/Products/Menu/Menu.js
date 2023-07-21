import React, { useState, useEffect } from "react";
// import http from '../../../http';
import { Link } from "react-router-dom";
import Categories from "../Categories";
import { menuData } from "../../../Data/data";
import AuthUser from "../../../AuthUser";

const Menu = () => {
  const { user, http } = AuthUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = () => {
    http.get("/product").then(({ data }) => setData(data?.products));
  };

  const [sortOrder, setSortOrder] = useState("a-z");

  const handleSort = (event) => {
    const selectedOption = event.target.value;
    setSortOrder(selectedOption);

    let sortedItems = data;

    if (selectedOption === "lowest") {
      sortedItems.sort((a, b) => a.sale_price - b.sale_price);
    } else if (selectedOption === "highest") {
      sortedItems.sort((a, b) => b.sale_price - a.sale_price);
    } else if (selectedOption === "a-z") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedOption === "z-a") {
      sortedItems.sort((a, b) => b.name.localeCompare(a.name));
    }

    setData(sortedItems);
  };

  return (
    <>
      <Categories />

      <div className="row m-0 p-4">
        <div class="all-products">
          <p className="primary-heading1">All Menu </p>
        </div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selections"
            onChange={handleSort}
            value={sortOrder}
          >
            <option value="lowest">Price (lowest)</option>
            <option disabled></option>
            <option value="highest">Price (highest)</option>
            <option disabled></option>
            <option value="a-z">Name (a-z)</option>
            <option disabled></option>
            <option value="z-a">Name (z-a)</option>
          </select>
        </form>

        <div className="all-products">
          {data.map((props) => (
            <div className="product" key={props.id}>
              <img src={props.photo} alt="" />
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
