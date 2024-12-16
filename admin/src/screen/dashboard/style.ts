import { Box, Grid2 } from "@mui/material";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const CardBox = styled(Box)(({ theme }) => ({
  height: "70px",
  width: "208px",
  backgroundColor: "white",
  borderRadius: "6px",
  display: "flex",
  justifyContent: "space-around",
  boxShadow: "rgba(21, 34, 50, 0.08) 0px 1px 4px 0px",
  padding: "10px",
}));

export const IconBox = styled(Box)({
  height: "28px",
  width: "28px",
  borderRadius: "50%",
  backgroundColor: "#ECF2FF",
  color: "blue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ChartBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "469px",
  width: "825px",
  borderRadius: "6px",
  boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
  padding: "15px 20px 15px 20px",
  justifyContent: "space-around",
});

export const BaarChartBox = styled(Box)({
  width: "255px",
  height: "469px",
  borderRadius: "6px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
  // padding: "28px",
  padding: "15px 28px 15px 28px",
});

export const ManageBox = styled(Box)({
  width: "129px",
  height: "40px",
  color: "#1E5EFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "white",
  border: "1px solid #D7DBEC",
});

export const IconStyle = styled(KeyboardArrowDownIcon)({
  "&.css-1umw9bq-MuiSvgIcon-root": {
    fontSize: 15,
  },
});

export const LineChartBox = styled(Box)({
  height: "297px",
  width: "800px",
  display: "flex",
  justifyContent: "center",
});

export const BaarChartHeader = styled(Box)({
  borderBottom: "2px solid #E6E9F4",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: "230px",
});
 
export const BarChartSection = styled(Box)({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  height:"200px"
})