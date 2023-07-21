import "./Sidebar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faUser,faStore,faCreditCard,faTruck,faChartSimple,faBell,faRightToBracket,faGear,faIdCardClip,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import AuthUser from "../../AuthUser";

const Sidebar = () => {
  const {token,logout} = AuthUser();

  const logOutUser = () =>{
    if(token != undefined){
      logout();
    }
  }

  return (
    <div className="asidebar">
      
      <div className="top">

        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">RMS</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul >
          <p className="title">MAIN</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            <span>Dashboard</span>
          </li>

          </Link>
          <p className="title">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faUser}className="icon" />
              <span>Users</span>
           </li>
         </Link>
        
          <Link to="/product" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faStore} className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/admin/order" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faCreditCard}className="icon" />
            <span>Orders</span>
          </li>
          </Link>
          
          <Link to="/admin/delivery" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faTruck} className="icon" />
            <span>Delivery</span>
          </li>
          </Link>
          <p className="title">QR-Menu</p>
          <Link to="orders">
          <li>
            <FontAwesomeIcon icon={faCreditCard}className="icon" />
            <span>Orders</span>
          </li>
          </Link>
          
          <li>
            <FontAwesomeIcon icon={faChartSimple} className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <FontAwesomeIcon icon={faRightToBracket} className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faGear} className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <FontAwesomeIcon icon={faIdCardClip} className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faRightFromBracket}  className="icon" />
            <span role="button" onClick={logOutUser}>Logout</span>
          </li>
        </ul>
        </div>
      </div>
  );
};

export default Sidebar;