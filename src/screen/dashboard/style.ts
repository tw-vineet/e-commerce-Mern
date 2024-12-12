import { Box } from "@mui/material";
import styled from "styled-components";

export const CardBox = styled(Box)(( {theme})=>({   
    height:"70px",
    width:"208px",
    backgroundColor:"white",
    borderRadius:"6px",
    display:'flex',
    justifyContent:'space-around',
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    padding:"10px"
}))

export const IconBox = styled(Box)({
    height:"28px",
    width:"28px",
    borderRadius:"50%",
    backgroundColor:"#ECF2FF",
    color:"blue",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
})

export const ChartBox = styled(Box)({
      display:"flex",
      flexDirection:'column',
      height:"469px",
      width:'825px',
      borderRadius:'6px',
      boxShadow:"rgba(21, 34, 50, 0.08) 0px 8px 24px",
    //   border:"1px solid red",
      padding:"15px 20px 15px 20px",
      justifyContent:"space-around"
})