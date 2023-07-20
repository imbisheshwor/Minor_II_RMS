import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./ProductAdd.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import http from "../../http";

const csrfToken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");

const ProductAdd = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = async () => {
    // http.post('/product',inputs).then((res) =>{
    //   console.log(res);
    // })
    // try {
    //   const res = await http.post('/product', inputs)
    //   // console.log(res.data)
    // } catch (e) {
    //   alert(e)
    // }
    // console.log(inputs);

    // Now, you can make your API requests using Axios

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken,
      },
<<<<<<< HEAD
      body: JSON.stringify({ data: "your_data_here" }),
    };

    fetch("http://127.0.0.1:8000/api/product", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        alert("done");
=======
      body: JSON.stringify(  inputs ),
  };
  
  fetch('http://127.0.0.1:8000/api/product', requestOptions)
      .then(response => response.json())
      .then(data => {
         alert('done');
>>>>>>> 669a82dd8d7e8fc5835445b04d00d68991585a82
      })
      .catch((error) => {
        alert("error");
      });
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="users">
          <div className="container">
            <div name="myform" class="form-group">
              <FontAwesomeIcon icon={faUser} class="icon"></FontAwesomeIcon>
              {/* <div className="title">
                  <p>User</p>
                  </div> */}

              <div className="row">
                <div className="col-sm-4">
                  <label for="name">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Product Name "
                    value={inputs.name || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-4">
                  <label for="price">Price</label>
                  <input
                    type="text"
                    name="sale_price"
                    className="form-control"
                    placeholder="Price"
                    value={inputs.sale_price || ""}
                    onChange={handleChange}
                  />
                </div>
{/* 
                <div className="col-sm-4">
                  <label for="cate">Category</label>
                  <input
                    type="text"
                    name="catogory_id"
                    className="form-control"
                    placeholder="category"
                    value={inputs.catogory_id || ""}
                    onChange={handleChange}
                  />
                </div> */}

                <div className="col-sm-4">
                  <div className="form-outline mb-4">
                  <label for="price">Category</label>

                    <select className="select">
                      <option
                        value={inputs.catogory_id || ""}
                        onChange={handleChange}
                      >
                        1
                      </option>
                      <option
                        value={inputs.catogory_id || ""}
                        onChange={handleChange}
                      >
                        2
                      </option>
                      <option
                        value={inputs.catogory_id || ""}
                        onChange={handleChange}
                      >
                        3
                      </option>
                      <option
                        value={inputs.catogory_id || ""}
                        onChange={handleChange}
                      >
                        4
                      </option>
                    </select>
                  </div>
                </div>
                <span>
                  <div className="col-sm-6">
                    <label for="img">Product Image</label>
                    <input
                      type="file"
                      name="photo"
                      className="form-control"
                      value={inputs.photo || ""}
                      onChange={handleChange}
                    />
                  </div>
                </span>
                <div class="col-sm-12">
                  <button
                    type="submit"
                    onClick={submitForm}
                    class="btn btn-primary"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
// <label>
// enter name:
// <input type="text" name="username"  value={inputs.username || ""}
// onChange={handleChange} />
// </label>
