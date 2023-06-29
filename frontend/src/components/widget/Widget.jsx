// import './Widget.scss';
import './Widget.scss';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{ faUser,faCartShopping,faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Widget = ({type}) => {
    let data; 

    var amount=100;

 switch(type){ 
          case "user": 
          data ={ 
           title: "USERS",
           isMoney:false,
           link:
           ( <a href="/">View all</a>),
           icon:
           (<FontAwesomeIcon icon={faUser} 
           className="icon"
           style={{ color:" crimson" ,
           backgroundColor:" rgba(255,0,0,0.2)",
        }} />),
          } ;
          break;


          case "order":
            data ={
                title:"ORDERS",
                isMoney:false,
                link:
                ( <a href="/">View all </a>),
                icon: (
                    <FontAwesomeIcon icon={faCartShopping} className=" icon"
                    style={{
                        color:"goldenrod",
                        backgroundColor:"rgba(218,165,32,0.2)",
                    }}/>
                ),
            };
 break; 

            case "earning":
                data ={ 
                  title:"EARNINGS" ,
                  isMoney:true, 
                  link:( <a href="/">View all</a>),
                  icon:(
                    <FontAwesomeIcon icon={faMoneyCheckDollar}
                    className="icon"
                    style={{
                        color:"green",
                        backgroundColor:"rgba(0,128,0,0.2)",
                    }}
                     />
                  ),
                };
                break;

                default:
                    break;
        }

        
  return (
    <div className="widget">
        <div className="up">
            <span className="title">
                {data.title}
            </span>
            <span className="counter">
                {data.isMoney && "$"} {amount}
            </span>
        </div>

      <div className="down">
        {data.icon}
        <span className="link">
                {data.link}
            </span>
      </div>
    </div>
  );
};

export default Widget
