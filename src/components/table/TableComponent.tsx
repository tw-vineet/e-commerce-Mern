import { Box, Button, Typography } from "@mui/material";
import { TableBox } from "./style";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from "react";

type tableProps = {
  row: string[];
  column: {
    name: string;
    date: string;
    amount: number;
    status: string;
  }[];
};

const TableComponent: React.FC<tableProps> = ({ row, column }) => {
  return (
    <>
      <TableBox>
        <Typography fontWeight="700" fontSize="16px">
          Header
        </Typography>
        <TableContainer >
      <Table  size="small">
        <TableHead sx={{borderBottom:"1px solid #5A607F"}}>
          <TableRow>
            {
              row.map((item)=>{
                return(
                  <TableCell>{item}</TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody sx={{borderBottom:"1px solid #5A607F"}}>
          {column.map((item) => (
            <TableRow
              key={item.name}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell >{item.date}</TableCell>
              <TableCell >{item.amount}</TableCell>
              <TableCell >
                <Button>{item.status}</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TableBox>
    </>
  );
};

export default TableComponent;
