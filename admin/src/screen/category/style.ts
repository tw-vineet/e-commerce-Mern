import { Box, Grid2, Button, Card } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

export const CategoryBox = styled(Box)({
  backgroundColor: "#F5F6FA",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const CardBox = styled(Card)({
  width: "350px",
  height: "324px",
});

export const DashboardTable = styled(DataGrid)({
  border:"0 !important"
})

export const DashboarBox = styled(Box)({
  padding:"20px",
  gap:"{2}",
  display:"flex",
  flexDirection:"column",
  width:"95%"
})