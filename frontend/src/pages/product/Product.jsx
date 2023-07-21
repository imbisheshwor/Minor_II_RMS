import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Product.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import AuthUser from "../../AuthUser";

const User = () => {
const {user,http} = AuthUser();
const [data, setData] = useState([])

 
  useEffect(()=>{
    fetchProductDetail();
  },[]);

  const fetchProductDetail = () =>{
    http.get('/product').then(({data})=>
      setData(data?.products));
  }
 



  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="users">
          <div className="ucontainer">
            <TableContainer component={Paper} className="table">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableCell">ID</TableCell>
                    <TableCell className="tableCell">Product</TableCell>
                    <TableCell className="tableCell">Name </TableCell>
                    <TableCell className="tableCell">Price</TableCell>
                    <TableCell className="tableCell">Category</TableCell>
                    <TableCell className="tableCell">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="tableCell">{row.id}</TableCell>
                      <TableCell className="tableCell">
                        <div className="cellWrapper">
                          <img src={row.photo} alt="" className="image" />
                          {row.product}
                        </div>
                      </TableCell>
                      <TableCell className="tableCell">{row.name}</TableCell>
                      <TableCell className="tableCell">{row.sale_price}</TableCell>
                      <TableCell className="tableCell">
                        {row.category_name}
                      </TableCell>
                      <TableCell className="tableCell d-flex gap-x-3" >
                        <div className="edit">
                          <Link to="/" style={{ textDecoration: "none" }}>
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              style={{ color: "blue", padding: "12" }}
                            ></FontAwesomeIcon>
                          </Link>
                        </div>

                        <div className="delete border-dotted border-2 p-2 border-gray-200"> 
                          <Link to="/" style={{ textDecoration: "none" }}>
                            {/* <FontAwesomeIcon
                              icon={faTrash}
                              style={{ color: "red", padding: "12" }}
                            ></FontAwesomeIcon> */}
                            {row.is_active == true ? <div className="text-red-600">Deactivate</div>: <div className="text-green-300">Activate</div> }
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack direction="row" spacing={2}>
              <Link to="/admin/productAdd" style={{ textDecoration: "none" }}>
                <Button className="btn" style={{ color: "white" }}>
                  ADD PRODUCT
                </Button>
              </Link>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
