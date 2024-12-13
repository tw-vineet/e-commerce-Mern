import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import reportWebVitals from "./reportWebVitals"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)


const theme = createTheme({
  palette:
   { primary:
     { main: "#3F51B5" }
     , secondary:
      { main: "#F50057" } },
  typography:
   { fontFamily: "Poppins", },
  shape: { borderRadius: 10 },
  spacing: 8,
})

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)

reportWebVitals()
