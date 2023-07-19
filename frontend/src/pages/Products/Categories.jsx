
import Navbar from "../../components/Navbar";
import { Link, Outlet } from "react-router-dom";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import http from "../../http";
import { useState, useEffect } from "react";

// import HomeIcon from "@mui/icons-material/Home";

const Categories = () => {

  const [data, setData] = useState([])

  const fetchInfo = async () => {
    return await http.get('/catogory')
      .then(({ data }) => setData(data?.catogories));
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  console.log(data);


  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "All",

      path: "/menu",
    },

    {
      text: "Top Selling",

      path: "/topselling",
    },
    {
      text: "Momo",

      path: "/momo",
    },
    {
      text: "Burger",

      path: "/burger",
    },
    {
      text: "Spring Roll",

      path: "/springroll",
    },
    {
      text: "Appetizer",
      path: "/appetizer",
    },
    {
      text: "Beverage",

      path: "/beverage",
    },
  ];



  return (
    <div>
      <Navbar />
      <div className="sidebar border-top border-end bg-white .d-none .d-sm-block .d-md-none">
        <ul className="sidebar-nav">
          <div className="nav-link border-bottom border-dark">
            <span>Categories</span>
          </div>
          {data.map((props) => (
            <Link path='view-product:' className="nav-link border-bottom border-dark" to="/menu">
              <span>{props.name}</span>
            </Link>
          ))}




        </ul>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineSquaresPlus onClick={() => setOpenMenu(true)} />
        Categories
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="left">
        <Box
          sx={{ width: 200 }}
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
    </div>
  );
};

export default Categories;
