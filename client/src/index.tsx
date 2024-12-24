import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"


import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material"
import { Provider } from "react-redux"
import { store } from "../src/redux/store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)


const theme = createTheme({
  palette:
  {
    primary:
      { main: "#3F51B5" }
    , secondary:
      { main: "#F50057" }
  },
  typography:
    { fontFamily: "Poppins", },
  shape: { borderRadius: 10 },
  spacing: 8,
})

root.render(
  <BrowserRouter>
    <Provider store={store}>

      <ThemeProvider theme={theme}>

        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)


