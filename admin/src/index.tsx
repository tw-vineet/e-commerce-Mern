import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF6F4",
    },
    secondary: {
      main: "#1E2753",
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
