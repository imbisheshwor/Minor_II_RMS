import './Table.scss';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const List = () => {

    const rows = [
        {
            id:1,
            product:"momo",
            img:"/assets/momo.jpeg",
            customer:"Bina",
            date:"June 1",
            amount:120,
            method:"esewa",
            status: "Approved",
        },
        {

           id:2,
           product:"Burger", 
           img:" /assets/momo.jpeg",
           customer:" Bisheshwor", 
           date:"June 2",
           amount:230,
           method: " cash on delivery", 
           status: " Pending",
        },
        {

            id:3,
            product:"Burger", 
            img:"/assets/momo.jpeg",
            customer:"Rohan", 
            date:"June 2",
            amount:230,
            method: " cash on delivery", 
            status: " Pending",
         },
         {

            id:4,
            product:"Burger", 
            img:"/assets/momo.jpeg",
            customer:" Krishna", 
            date:"June 2",
            amount:230,
            method: " cash on delivery", 
            status: " Pending",
         },
    ];

    return (
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

export default List