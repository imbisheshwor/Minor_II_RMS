import React from 'react'
import Login from "./Login/Login";
import { Navigate, Outlet } from 'react-router-dom';
import AuthUser from './AuthUser';



const useAuth = () =>{
    const {getToken} = AuthUser();
     if(!getToken()){
         const user = {loggedIn : false}
         return user && user.loggedIn;
       
     } else {
        const user = {loggedIn : true}
        return user && user.loggedIn;
     }
 }

    

 

const RouteGuard = () => {
    const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default RouteGuard