import React from "react";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Products from "./Products";
import Footer from "../../Footer";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { menuData } from "../../../Data/data";

const Productdetails = () => {
  const [value, setValue] = React.useState(2);

  const { id } = useParams();
  const menu = menuData.find((menu) => menu.id === id);
  const { menuname, menuprice, menudescription, menuimageurl } = menu;

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((preCount) => preCount - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 20) {
      setQuantity((preCount) => preCount + 1);
    }
  };

  return (
    <>
      <div className="home-container">
        <Navbar />

        <div className="productdetails-container">
          <div className="productdetails-section-container">
            <div className="productdetails-section-image-container">
              <img src={menuimageurl} alt="" />
            </div>
            <div className="productdetails-section-text-container">
              <h1 className="primary-heading">{menuname}</h1>
              <p className="primary-text">{menudescription}</p>
              <div className="stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>

              <h2 className="product-price1">{menuprice}</h2>

              <div className="quantity">
                <h1>Quantity</h1>
              </div>
              <div className="input-group">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="input-group-text"
                >
                  -
                </button>
                <div className="form-control text-center">{quantity}</div>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="input-group-text"
                >
                  +
                </button>
              </div>

              <Link to="/cart" className="pcart-button">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h1 className="description-heading ">Feedback</h1>
          <div className="review pt-4">
            <h5 className="user__name mb-1">Bina</h5>
            <div className="stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="feedback__text">
              Momo here is Fabulous..I would really recommend MOMO from
              here...Gonna order more from here
            </p>
          </div>
          <div className="review">
            <h5 className="user__name mb-1">Krishna</h5>
            <div className="stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>

            <p className="feedback__text">
              Momo here is Fabulous..I would really recommend MOMO from
              here...Gonna order more from here
            </p>
          </div>
          <div className="review">
            <h5 className="user__name mb-0">Bishweshwor</h5>
            <div className="stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="feedback__text">
              Momo here is Fabulous..I would really recommend MOMO from
              here...Gonna order more from here
            </p>
          </div>
        </div>

        <div>
          <h1 className="description-heading ">Give Review</h1>
          <div className="mb-4">
            <label className="formlabel">Name</label>
            <input
              type="name"
              className="formcontrol"
              id="FormControlInput1"
              placeholder="Enter you name"
            />
          </div>
          <div className="mb-4">
            <label className="formlabel">Email address </label>
            <input
              type="email"
              className="formcontrol"
              id="FormControlInput1"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Feedback </label>
            <textarea
              className="form-control"
              id="FormControlTextarea1"
              rows="10"
              placeholder="Message Here ....."
            ></textarea>
          </div>
          <h1>Rate Food</h1>

          <div className="stars-container">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            />

            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>

          <Link
            to="/"
            className="submit-button"
            // onClick={handleAddToCart}
          >
            Sumbit
          </Link>
        </div>
        <Products />

        <Footer />
      </div>
    </>
  );
};

export default Productdetails;
