import Sidebar from '../../components/sidebar/Sidebar';
import "./Home.scss";
import Navbar from '../../components/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {DarkModeContextProvider} from '../../context/darkModeContext';
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Feature from "../../components/features/Feature";
import Table from "../../components/table/Table";
import AuthUser from '../../AuthUser';
import { useNavigate } from 'react-router-dom';

const Home =() =>{
   
        return(
            <div className="home">
                    <DarkModeContextProvider>
                    <Sidebar />
                    </DarkModeContextProvider>
                  
                <div className="homeContainer">
                    <Navbar />  
                    <div className="charts">
                       <Chart title=" last 12 months (Revenue)" aspect={3 / 1} /> 
                       {/* aspect ={2 area height / 1 height} */}
                     </div>
              
              
                       <div className="widgets"> 
                        <Widget type="user"></Widget>
                        <Widget type ="order"></Widget>
                        <Widget type="earning"></Widget>
                        <Feature />
                        </div>
                      
                            <div className="listTitle">Latest Transactions</div> 
                            <Table />
        
                 </div>
        
                </div>
            );
    
    
};
export default Home;
