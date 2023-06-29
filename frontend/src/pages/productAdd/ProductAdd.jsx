
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faUser} from '@fortawesome/free-solid-svg-icons';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./ProductAdd.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const ProductAdd = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <div className="home">
            <Sidebar />   
        <div className="homeContainer">
            <Navbar />  
            <div className="users">
              <div className="container">
                
                 <form name="myform" class="form-group" onsubmit={handleSubmit}>

                  <FontAwesomeIcon icon={faUser} class="icon"></FontAwesomeIcon>
                  {/* <div className="title">
                  <p>User</p>
                  </div> */}
                  
                  <div className="row">
                    <div className="col-sm-4">
                      <label for="name">Product Name</label> 
                      <input type="text" name="name"className="form-control" placeholder="Product Name " ></input>
                    </div>

                    <div className="col-sm-4">
                      <label for="price">Price</label> 
                      <input type="text" name="price"className="form-control" placeholder="Price" ></input>
                    </div>

                    <div className="col-sm-4">
                      <label for="cate">Category</label> 
                      <input type="text" name="cate" className="form-control" placeholder="category" ></input>
                    </div>
                    <span>
                    <div className="col-sm-6">
                      <label for="img">Product Image</label> 
                      <input type="file" name="img" className="form-control" ></input>
                    </div>
                    </span>
                    <div class="col-sm-12">
                      <button type="submit" class="btn btn-primary">ADD</button>
                    </div>
                  </div>
                 </form>
              </div>
             </div>
       </div>
   </div>
  )
}

export default ProductAdd
// <label> 
// enter name:
// <input type="text" name="username"  value={inputs.username || ""} 
// onChange={handleChange} />
// </label>