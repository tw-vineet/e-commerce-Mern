import { Box, Button, Input } from "@mui/material";
import styled from "styled-components";

export const LoginBoxArea = styled(Box)({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5F6FA",
});

export const LoginBox = styled(Box)({
  height: "600px",
  width: "540px",
  borderRadius: "6px",
  boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
  backgroundColor: "#FFFFFF",
  padding: "30px",
  display:"flex",
  flexDirection:"column",
  gap:"20px"
});

export const InputStyle = styled(Input)({
  height: "48px",
  width: "420px",
  borderRadius: "4px",
  border: "1px solid #D9E1EC",
  backgroundColor: "#FFFFFF",
  padding: "10px",
});

export const FormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems:"center",
  gap: "20px",
});

export const CreateButton = styled(Button)({
  width: "420px",
  height: "48px",
  backgroundColor: "#1E2753 !important",
  borderRadius: "4px !imporatnt",
  fontSize: "16px",
  fontWeight: "400",
  color: "#FFFFFF",
});

export const DirctLoginBox = styled(Box)({
  border: "1px solid #D7DBEC",
  borderRadius: "4px",
  width: "420px",
  height: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
});

export const GoogleFbBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap:10
})