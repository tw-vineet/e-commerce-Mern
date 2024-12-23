import { Box, Grid2 , Button, StyledEngineProvider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
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
    border : "1px solid #D7DBEC !important",
    backgroundColor : "white !important",
    color:"#1E5EFF !important",
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

  export const EditDeleteBox = styled(Box)({
    height:"40px",
    width:"40px",
    border:"1px solid #D7DBEC",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#1E5EFF",
    bgcolor:"white",
    borderRadius:"4px"
  })

export const ProductTable = styled(DataGrid)({
  border:"0 !important"
})
