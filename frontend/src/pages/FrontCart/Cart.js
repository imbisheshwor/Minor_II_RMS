import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";
import Food from "../../Asset/food.jpeg";
import DeleteIcon from "@mui/icons-material/Delete";
import AuthUser from "../../AuthUser";

const Cart = () => {
  const [inputs, setInputs] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);

  const { http, user } = AuthUser();

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = () => {
    http
      .post("see-table-or-user-cart", { type: 1, id: user.id })
      .then(({ data }) => setData(data));
  };

  // console.log(data["product"]);

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
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const submitForm = async () => {
    
    var payment_type = '';
    // console.log(inputs);
    // console.log(data['product']);
    if(inputs.payment_type == undefined){
      payment_type = "cash_on_delivery";
    }else{
      payment_type = inputs.payment_type;
    }
    // console.log(payment_type);
    http.post('/order',{user_id:user.id,type:"delivered",payment_type:payment_type,delivery_address:inputs.delivery_address || "null",advance_amount:0,items:data['product']}).then((res)=>{
      alert('done');
    })
    
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
              </div>
              {data["product"]?.map((row) => (
                <div className="card rounded-3 mb-4">
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={row.photo}
                          className="img-fluid rounded-3"
                          alt=""
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{row.name}</p>
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
                            <input
                              type="number"
                              name="qty"
                              value={row.quantity || ""}
                            />
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
                        <h5 className="mb-0">Rs.{row.rate}</h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1">
                        <a href="#!" className="text-danger">
                          <DeleteIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <hr />
              <div className="card mb-5">
                <div className="card-body p-5">
                  <div className="flex gap-x-96">
                    <div className="mt-10">
                      <div className=" w-96">
                        <label htmlFor="sort">Payment Type: </label>
                        <select
                          name="payment_type"
                          id="sort"
                          className="sort-selection mt-2 ml-3"
                          onChange={handleChange}
                        >
                          <option value={"cash_on_delivery"||" "}>
                            Cash On delivery
                          </option>
                          <option disabled></option>
                          <option value={"esewa"||""}>Esewa</option>
                        </select>
                      </div>
                      <div className="card w-96 mt-10 ml-10">
                        <input
                          type="text"
                          name="delivery_address"
                          className=""
                          placeholder="Enter your delivery address"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="float-end">
                      <p className="mb-0 me-5 d-flex align-items-center">
                        <div className="col-lg-4 col-xl-3">
                          <div
                            className="d-flex justify-content-between"
                            style={{ fontWeight: "500" }}
                          >
                            <p className="mb-3 px-5">Subtotal:</p>
                            <p className="mb-3 ">Rs.{data.total_bill}</p>
                          </div>

                          <div
                            className="d-flex justify-content-between"
                            style={{ fontWeight: "500" }}
                          >
                            <p className="mb-3 px-5">VAT(13%):</p>
                            <p className="mb-0">
                              Rs.{Math.round(data.total_bill * 0.13)}
                            </p>
                          </div>

                          <hr className="my-3" />

                          <div
                            className="d-flex justify-content-between mb-5 "
                            style={{ fontWeight: "500" }}
                          >
                            <p className="mb-0 px-5">Total</p>
                            <p className="mb-0">
                              Rs.
                              {data.total_bill +
                                Math.round(data.total_bill * 0.13)}
                            </p>
                          </div>

                          <button
                            type="button"
                            className="btn btn-primary btn-block btn-lg"
                          >
                            <div className="d-flex justify-content-between">
                              <span>Checkout</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span role="button" onClick={submitForm}>
                                Rs.
                                {data.total_bill +
                                  Math.round(data.total_bill * 0.13)}
                              </span>
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
        </div>
      </section>
    </div>
  );
};

export default Cart;
