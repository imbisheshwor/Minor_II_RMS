import './Chart.scss'
import {AreaChart,Area,XAxis,YAxis,CartesianGrid, Tooltip,Legend,ResponsiveContainer} from "recharts";
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  {name:"january",Total:1200},
  {name:"February",Total:2400},
  {name:"March",Total:700},
  {name:"April",Total:200},
  {name:"May",Total:300},
  {name:"June",Total:1700},
  {name:"July",Total:1300},
  {name:"August",Total:5000},
  {name:"September",Total:1200},
  {name:"october",Total:200},
  {name:"November",Total:100},
  {name:"December",Total:200},

];
const Chart = ({title, aspect}) => {
  return (
  
    <div className="chart">
    <div className="title">{title}</div>
    <ResponsiveContainer width="90%" aspect={aspect}>
    <AreaChart width={900} height={400} data={data} margin={{top:5, right:0, left:100, bottom:50}}
    >
      <defs> 
        <linearGradient id=" total" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={1}>
          </stop>
          <stop offset="95%" stopColor=" #8884d8" stopOpacity={0}></stop> 
        </linearGradient>
      </defs>
      <XAxis dataKey="name" stroke="gray"></XAxis>
      <CartesianGrid strokeDasharray="1 1" className="chartGrid"></CartesianGrid>
      <Tooltip/>
      {/* <Legend/> */}
      <Area
      type="monotone"
      dataKey="Total"
      stroke="#325764"
      fillOpacity={0.1}
      fill="url(#total)"></Area>
    </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Chart
