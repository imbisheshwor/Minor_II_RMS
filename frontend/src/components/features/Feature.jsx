import './Feature.scss';
import {CircularProgressbar} from 'react-circular-progressbar'; 
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


const Feature = () => {
  return (
    
    <div className="feature">
      <div className="row">
        <div className="col-md-12">
        <div className="top">
            <h1 className="title" >Total Revenue</h1>
            <FontAwesomeIcon icon={faEllipsisVertical} fontSize="small"/>
        </div>
         <div className="bottom">
            <div className="featurechart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={4}></CircularProgressbar>
            </div>
            <div className="bottomtext">
                <p className="title" >Total Sales Made Today</p>
                <p className="amount">Rs.30k</p>
            </div>
         </div>
    </div>
    </div>
    </div>
  )
}

export default Feature
