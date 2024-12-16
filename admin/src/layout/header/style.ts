import { Box } from "@mui/material";
import styled from "styled-components";

export const MuiBox = styled(Box)({
  backgroundColor: "#070B1D",
  padding: "0px 1rem 0px 1rem",
  height: "68px",
  display: "flex",
  justifyContent: "space-between",
  // position:"fixed",
  // zIndex:1,

});

export const ProfileBox = styled(Box)({
  height: "36px",
  width: "36px",
  borderRadius: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  backgroundColor: "#1FD286"
});
