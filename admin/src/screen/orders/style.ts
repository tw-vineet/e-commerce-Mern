import { Box, Grid2 , Button } from "@mui/material";
import styled from "styled-components";

export const ExportButton = styled(Button)(({ theme }) => ({
    border : "1px solid #D7DBEC",
    backgroundColor : "pink",
    color:"#1E5EFF",
    fontSize:"14px",
    fontWeight:400,
    
  }));

  export const OrderBox = styled(Box)({
    backgroundColor:"#F5F6FA",
    padding:"30px",
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    gap:16
  })

  export const TableBox = styled(Box)({
    height:"1110px",
    border : "1px solid #D7DBEC",
    backgroundColor:"#FFFFFF",
    padding:"24px",
    display:"flex",
    flexDirection:"column",
    gap:10
  })

  export const PaidButton = styled(Button)({
    backgroundColor:"#C4F8E2 !important " ,
    color:"#06A561 !important ",
    height:"24px",
    width:"45px"
  })

  export const ReadyButton = styled(Button)({
    backgroundColor:"#F99600 !important " ,
    color:"#FFFFFF !important ",
    height:"20px",
    width:"42px",
    borderRadius:"4px"
  })

  export const ShippedButton = styled(Button)({
    backgroundColor:"#5A607F !important " ,
    color:"#FFFFFF !important ",
    height:"24px",
    width:"71px",
    borderRadius:"4px"
  })

  