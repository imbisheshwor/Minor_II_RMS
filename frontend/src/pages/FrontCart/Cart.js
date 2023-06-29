import React from "react";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import Food from "../../Asset/food.jpeg";
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
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
    <div classNameNameName="home-container">
      <Navbar />

      <section className="h-100">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Cart</h3>
                {/* <button
                  type="button"
                  className="btn btn-warning btn-block btn-lg"
                ></button> */}
              </div>

              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img src={Food} className="img-fluid rounded-3" alt="" />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">Momo</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <div className="input-group w-100">
                        <button
                          type="button"
                          onClick={handleDecrement}
                          className="input-group-text"
                        >
                          -
                        </button>
                        <div className="form-control text-center">
                          {quantity}
                        </div>
                        <button
                          type="button"
                          onClick={handleIncrement}
                          className="input-group-text"
                        >
                          +
                        </button>
                      </div>

                     
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">170</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1">
                      <a href="#!" className="text-danger">
                        <DeleteIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img src={Food} className="img-fluid rounded-3" alt="" />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">Momo</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <div className="input-group w-100">
                        <button
                          type="button"
                          onClick={handleDecrement}
                          className="input-group-text"
                        >
                          -
                        </button>
                        <div className="form-control text-center">
                          {quantity}
                        </div>
                        <button
                          type="button"
                          onClick={handleIncrement}
                          className="input-group-text"
                        >
                          +
                        </button>
                      </div>

                     
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">170</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1">
                      <a href="#!" className="text-danger">
                        <DeleteIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 
        <div className="d-flex justify-content-between p-2 mb-2" style={{backgroundColor: '#e1f5fe' }}>
                  <h5 className="fw-bold mb-0">Total:</h5>
                  <h5 className="fw-bold mb-0">2261$</h5>
                </div> */}
              <hr />
              <div className="card mb-5">
                <div className="card-body p-5">
                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <div className="col-lg-4 col-xl-3">
                        <div
                          className="d-flex justify-content-between"
                          style={{ fontWeight: "500" }}
                        >
                          <p className="mb-3 px-5">Subtotal:</p>
                          <p className="mb-3 ">235</p>
                        </div>

                        <div
                          className="d-flex justify-content-between"
                          style={{ fontWeight: "500" }}
                        >
                          <p className="mb-3 px-5">Shipping:</p>
                          <p className="mb-0">299</p>
                        </div>

                        <hr className="my-3" />

                        <div
                          className="d-flex justify-content-between mb-5"
                          style={{ fontWeight: "500" }}
                        >
                          <p className="mb-0 px-5">Total</p>
                          <p className="mb-0">26.48</p>
                        </div>

                        <button
                          type="button"
                          className="btn btn-primary btn-block btn-lg"
                        >
                          <div className="d-flex justify-content-between">
                            <span>Checkout</span>
                            <span>226.48</span>
                          </div>
                        </button>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
