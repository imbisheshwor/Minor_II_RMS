
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faEye,faPenToSquare,faTrash} from '@fortawesome/free-solid-svg-icons';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Delivery.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';  
import Stack from '@mui/material/Stack';  
import { Link } from "react-router-dom";


const User = () => {
    const rows = [
        {
            id:1,
            img:"/assets/Govinda.jpg",
            name:"Bina",
            address:"damak",
            email:"bina@gmail.com",
            salary: 20000,

        },
        {

            id:2,
            img:"/assets/Govinda.jpg",
            name:"Bina",
            address:"damak",
            email:"bina@gmail.com",
            salary: 20000,
       
        },
        {

            id:3,
            img:"/assets/Govinda.jpg",
            name:"Bina",
            address:"damak",
            email:"bina@gmail.com",
            salary: 20000,
         },
         {

            id:4,
            img:"/assets/Govinda.jpg",
            name:"Bina",
            address:"damak",
            email:"bina@gmail.com",
            salary: 20000,
         },
    ];


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
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Address</TableCell>
              <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">Salary</TableCell>
              <TableCell className="tableCell">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.name}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.address}</TableCell>
                <TableCell className="tableCell">{row.email}</TableCell>
                <TableCell className="tableCell">{row.salary}</TableCell>
                <TableCell className="tableCell">
                   <Link to="/" style={{ textDecoration: "none" }}>
                    <FontAwesomeIcon icon={faEye} style={{ color:"green",padding:"12"}}></FontAwesomeIcon>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                   <FontAwesomeIcon icon={faPenToSquare} style={{ color:"blue",padding:"12"}}></FontAwesomeIcon>
                   </Link>
                   <Link to="/" style={{ textDecoration: "none" }}>
                    <FontAwesomeIcon icon={faTrash}style={{ color:"red",padding:"12"}}></FontAwesomeIcon >
                    </Link>
                    </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
          <Stack direction="row" spacing={2}>
          <Link to="/admin/deliveryAdd" style={{ textDecoration: "none" }}>
          <Button className="btn" style={{color:"white"}}>ADD DELIVERY</Button> 
          </Link> 
    </Stack>  
      </div>    
    </div>
     </div>
       </div>
  )
}

export default User
