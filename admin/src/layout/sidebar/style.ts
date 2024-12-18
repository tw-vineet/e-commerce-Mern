import { Box } from "@mui/material";
import styled from "styled-components";

export const SidebarBox = styled(Box)(( {theme})=>({   
  backgroundColor: `${theme.palette.primary.main}`,
  height: "100vh",
  width: "20%",
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  alignItems: "center",
}))

export const DashboardBox = styled(Box)({
  height: "44px",
  width: "223px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  padding: "0px 10px 0px 10px",
  gap: 20,
  borderRadius: "4px",
});

export const PageBox = styled(Box)({
  height: "44px",
  width: "223px",
  display: "flex",
  alignItems: "center",
  padding: "0px 10px 0px 10px",
  color: "white",
  gap: 20
});
