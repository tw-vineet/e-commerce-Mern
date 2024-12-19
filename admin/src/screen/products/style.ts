import { Box, Grid2 , Button } from "@mui/material";
import styled from "styled-components";

export const ProductBox = styled(Box)({
  backgroundColor:"#F5F6FA",
  padding:"30px",
  height:"100vh",
  display:"flex",
  flexDirection:"column",
  gap:16
})

export const ExportButton = styled(Button)(({ theme }) => ({
    border : "1px solid #D7DBEC",
    backgroundColor : "pink",
    color:"#1E5EFF",
    fontSize:"14px",
    fontWeight:400,
    
  }));

  export const ProductTableBox = styled(Box)({
    height:"1110px",
    border : "1px solid #D7DBEC",
    backgroundColor:"#FFFFFF",
    padding:"24px",
    display:"flex",
    flexDirection:"column",
    gap:10
  })