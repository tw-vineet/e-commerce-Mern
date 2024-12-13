import { Box } from "@mui/material";
import styled from "styled-components";

export const TableBox = styled(Box)(( {theme})=>({   
          height: "396px",
          width: "540px",
          border: "1px solid #E6E9F4",
          borderRadius: "6px",
          padding:"30px",
          display:"flex",
          flexDirection:"column",
          gap:10
}))