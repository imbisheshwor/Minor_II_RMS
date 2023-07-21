
import './App.css';
import './components/sidebar/Sidebar.scss'
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import User from './pages/user/User';
import UserAdd from './pages/userAdd/UserAdd';
import DeliveryProduct from './pages/product/Product';
import ProductAdd from './pages/productAdd/ProductAdd';
import Delivery from './pages/delivery/Delivery';
import DeliveryAdd from './pages/deliveryAdd/DeliveryAdd';
import UserView from './pages/userView/UserView';

import QrMenu from './pages/QR-Menu/QrMenu';
import QrNavbar from './components/QrNavbar';
import Cart from './pages/Cart/Cart';
import Bills from "./pages/bills/Bills";
import Chat from "./pages/Chat/Chat";
import { cart, product, message } from "./data";












// import Login from "./Login/Login";
// import Carts from "./pages/FrontCart/Cart";
// import IndexHome from "./components/Home";

// import Menu from "./pages/Products/Menu/Menu";
// import Products from "./pages/Products/Menu/Products";
// import Profile from "./pages/Profile";
// import Gallery from "./pages/Gallery";
// import Productdetails from "./pages/Products/Menu/Productdetails";

// import Error from "./pages/Error";
// import Team from "./pages/Team";
// import Feature from "./pages/Feature";

// import Testimonial from "./pages/Testimonial";

// import About from "./pages/About";
// import Product from "./pages/Products/Menu/Product";
// import Register from "./Login/Register";
// import ForgetPassword from "./Login/ForgetPassword";
// import Otp from "./Login/Otp";
// import Categories from "./pages/Products/Categories";
// import Bookatable from "./pages/Bookatable";
// import { menuData } from "./Data/data";
// import { momoData, topsellingData } from "./Data/categorydata";



// import Momo from "./pages/Products/Category/Momo/Momo";
// import Momodetails from "./pages/Products/Category/Momo/Momodetails"
// import Topselling from "./pages/Products/Category/Topselling/Topselling";
// import Topsellingdetails from "./pages/Products/Category/Topselling/Topsellingdetails";



// import IndexHome from "./components/Home";
// import About from "./pages/About";
// // import About from './pages/About';
// import Feature from './pages/Feature';
// import Profile from './pages/Profile'

import Login from "./Login/Login";
import ProductCart from "./pages/FrontCart/Cart";
import FrontHome from "./components/Home";

import Menu from "./pages/Products/Menu/Menu";
import Products from "./pages/Products/Menu/Products";
import Profile from "./pages/Profile";
import Gallery from "./pages/Gallery";
import Productdetails from "./pages/Products/Menu/Productdetails";

import Error from "./pages/Error";
import Team from "./pages/Team";
import Feature from "./pages/Feature";

import Testimonial from "./pages/Testimonial";

import About from "./pages/About";
import Product from "./pages/Products/Menu/Product";
import Register from "./Login/Register";
import ForgetPassword from "./Login/ForgetPassword";
import Otp from "./Login/Otp";
import Categories from "./pages/Products/Categories";
import Bookatable from "./pages/Bookatable";
import { menuData } from "./Data/data";
import { momoData, topsellingData } from "./Data/categorydata";



import Momo from "./pages/Products/Category/Momo/Momo";
import Momodetails from "./pages/Products/Category/Momo/Momodetails"
import Topselling from "./pages/Products/Category/Topselling/Topselling";
import Topsellingdetails from "./pages/Products/Category/Topselling/Topsellingdetails";
import AuthUser from './AuthUser';

import { useNavigate } from 'react-router-dom';
import { alertTitleClasses } from '@mui/material';
import RouteGuard from './RouteGuard';
import List from './components/table/Table';
import Orders from './components/Orders/Order';





function App() {
  // const { getToken } = new AuthUser();
  // if(!getToken()){
    
  // }


  return (

    <div className="App">
      <BrowserRouter>
        <Routes >
           <Route index element={<Navigate to="/home" />} />

          <Route path="home" element={<FrontHome />} />
          <Route path="about" element={<About />} />
          <Route path="feature" element={<Feature />} />
          <Route path="profile" element={<Profile />} />
          <Route path="gallery" element={<Gallery />} />

          <Route path="products" element={<Products />} />
          <Route path="product" element={<DeliveryProduct />} />


          <Route path="cart" element={<ProductCart />} />

          <Route path="productdetails/:id" element={<Productdetails menuDataItem={menuData} />} />
          <Route path="momodetails/:id" element={<Momodetails momoDataItem={momoData} />} />


          <Route path="menu" element={<Menu menuDataItem={menuData} />} />

          <Route path="momo" element={<Momo />} />

          <Route path="topselling" element={<Topselling topsellingDataItem={topsellingData} />} />
          <Route path="topsellingdetails/:id" element={<Topsellingdetails topsellingDataItem={topsellingData} />} />



          <Route path="Team" element={<Team />} />
          <Route path="testimonial" element={<Testimonial />} />

          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="otp" element={<Otp />} />

          <Route path="*" element={<Error />} />

          <Route path="categories" element={<Categories />} />
          <Route path="bookatable" element={<Bookatable />} /> 


          <Route path="admin" element={<RouteGuard />}>
            <Route index element={<Home />} />
            <Route path="/admin/users" element={<User />} />
            <Route path=":userId" element={<UserView />} />
            <Route path="/admin/userAdd" element={<UserAdd />} />
            <Route path="product" element={<Product />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/productAdd" element={<ProductAdd />} />
            <Route path="/admin/delivery" element={<Delivery />} />
            <Route path="/admin/deliveryAdd" element={<DeliveryAdd />} />
          </Route>
          <Route path="qrmenu">
              <Route index element={<QrMenu product={product} />} />
              <Route path='cart' element={<Cart carts={cart}/>}
              />
              <Route path='bill' element={<Bills />} />
              <Route path='qr-message' element={<Chat message={message} />} />
            </Route>

        </Routes>







      </BrowserRouter>
    </div>

  );
}

export default App;
