
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faUser} from '@fortawesome/free-solid-svg-icons';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./UserAdd.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const UserAdd = () => {
  const [inputs, setInputs] = useState({});

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs(values => ({...values, [name]: value}))
  // }

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
                      <label for="fname">First Name</label> 
                      <input type="text" name="fname"className="form-control" placeholder="First Name" ></input>
                    </div>

                    <div className="col-sm-4">
                      <label for="lname">Last Name</label> 
                      <input type="text" name="lname"className="form-control" placeholder="Last Name" ></input>
                    </div>

                    <div className="col-sm-4">
                      <label for="address">Address</label> 
                      <input type="text" name="address" className="form-control" placeholder="Address" ></input>
                    </div>

                    <div className="col-sm-6">
                      <label for="email">Email</label> 
                      <input type="email" name="email" className="form-control" placeholder="email" ></input>
                    </div>

                   

                    
                    <div className="col-sm-6">
                      <label for="ph">Phone Number</label> 
                      <input type="number" name="ph" className="form-control" placeholder="Phone" ></input>
                    </div>

                    <div className="col-sm-6">
                      <label for="passs">Password</label> 
                      <input type="password" name="pass" className="form-control" placeholder="Password" ></input>
                    </div>

                    <div className="col-md-6">
                      <label for="img">Image</label> 
                      <input type="file" name="img" className="form-control"  ></input>
                    </div>

                    <div class="col-md-12">
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

export default UserAdd
// <label> 
// enter name:
// <input type="text" name="username"  value={inputs.username || ""} 
// onChange={handleChange} />
// </label>