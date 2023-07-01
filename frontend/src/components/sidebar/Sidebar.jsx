import "./Sidebar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import {faHouse,faUser,faStore,faCreditCard,faTruck,faChartSimple,faBell,faRightToBracket,faGear,faIdCardClip,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';




const Sidebar = () => {

  //     const styles={
  //        backgroundColor:"black",
  //        fontSize:" 14px"
  //  };
  return (
    <Container className="asidebar">
      
      <Row className="top">
        <Col>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">RMS</span>
        </Link>
        </Col>
      </Row>
      <hr/>
      <Row className="center">
     {/* style={styles} */} 
     <Col xs={12} sm={10}>
        <ul >
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          
          <p className="title">LISTS</p>
          <Link to="/user" style={{ textDecoration: "none" }}>
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
          <Link to="/order" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faCreditCard}className="icon" />
            <span>Orders</span>
          </li>
          </Link>
          
          <Link to="/delivery" style={{ textDecoration: "none" }}>
          <li>
            <FontAwesomeIcon icon={faTruck} className="icon" />
            <span>Delivery</span>
          </li>
          </Link>
          <p className="title">INFO</p>
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
            <span>Logout</span>
          </li>
        </ul>
        </Col>
      </Row>
      </Container>
  );
};

export default Sidebar;