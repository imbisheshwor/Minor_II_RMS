import "./Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faBell,faMessage}  from '@fortawesome/free-solid-svg-icons';
 import {DarkModeContext} from '../../context/darkModeContext';
 import {useContext} from 'react';
//  import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {
   const {dispatch} = useContext(DarkModeContext);

  return (
   
    <div className="navbar">
        <div className="wrapper">
            <div className ="search">
                <input type=" text" placeholder=" search"/>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>
       
        
            <div className="items">
                <div className="item">
                     <FontAwesomeIcon icon={faBell} className="icon" />
                     <div className="counter">1</div>
                </div>

                <div className="item">
                    <FontAwesomeIcon icon={faMessage} className="icon"/>
                    <div className="counter">2</div>
                </div>

                <div className="item">
                <img className="avatar" src="/assets/Govinda.jpg "alt="profile" />
                </div>
                </div>
            </div>
            </div>

  )
}

export default Navbar;
