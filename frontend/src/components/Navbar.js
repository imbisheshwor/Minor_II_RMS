/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import PhotoLibrary from "@mui/icons-material/PhotoLibrary";

const Navbar = () => {
  
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/home",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/profile",
    },
    {
      text: "Menu",
      icon: <RestaurantMenuIcon />,
      path: "/menu",
    },
    {
      text: "Gallery",
      icon: <PhotoLibrary/>,
      path: "/gallery",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact",
    },
   
    
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <Link to ="/home" className="heading">RMS</Link>
      </div>
      

      <div className="navbar-links-container flex">
        <Link to="/home">Home</Link>
        <Link to="/profile">About</Link>
        <Link to="/gallery">Gallery</Link>


        <Link to="/menu">Menu</Link>
       
       
        <Link to="/cart">
          <BsCart2 className="navbar-cart-icon" />
        </Link>
        <Link to="/login" className="primary-button -mt-5">Login</Link>
      </div>

      <div className="navbar-menu-container">
      <Link to="/cart">
          <BsCart2 className="navbar-icon" />
        </Link>
        <Link to="/login">
          <BsFillPersonFill className="navbar-icon" />
        </Link>

        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
         
          <List>
             
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          
          </List>

          
          <Divider />
        </Box>
      </Drawer>
      <Outlet />
    </nav>
  );
};

export default Navbar;
