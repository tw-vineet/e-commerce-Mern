import React from "react"
import { Box, Grid2, Typography } from "@mui/material"
import styled from "styled-components"
import Navbar from "../Layout/Navbar"
import Input from "../component/Input"
import Buttons from "../component/button"
import Footer from "../Layout/Footer"
import { IButtonStyle } from "../Dto/dataType"
// @ts-ignore
import loginImage from "../image/login.png"

const ImgLogin = styled("img")(() => ({
  width: "622px",
  height: "475px",
}))

const Boxloginput = styled(Box)(() => ({
  marginTop: "30px",
}))
const Boxinputfield = styled(Box)(() => ({
  margin: "45px 0px 22px 0px;",
}))

const buttonCss: IButtonStyle = {
  width: "100px",
  background: "#DB4444",

  borderRadius: "2px",
}

export default function Login() {
  return (
    <>
      <Navbar />
      <Box paddingTop={5} marginTop={2} marginBottom={10}>
        <Grid2 container marginBottom={10}>
          <Grid2 size={6}>
            <ImgLogin src={loginImage} />
          </Grid2>
          <Grid2
            size={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Box>
                <Typography variant="h4">Log in to Exclusive</Typography>
                <Typography marginTop={2} variant="subtitle1">
                  Enter your details below
                </Typography>
              </Box>
              <Box component="form">
                <Boxloginput>
                  <Boxinputfield>
                    <Input
                      variant="filled"
                      type="email"
                      label="Enter your email"
                      name="lgoinEmail"
                    />
                  </Boxinputfield>
                  <Boxinputfield>
                    <Input
                      variant="filled"
                      type="Password"
                      label="Enter your password"
                      name="lgoinPassword"
                    />
                  </Boxinputfield>
                </Boxloginput>

                <Box display={"flex"} justifyContent={"space-between"}>
                  <Buttons
                    text="Log In"
                    variant1="contained"
                    styleProps={buttonCss}
                  ></Buttons>
                  <Typography variant="subtitle1" color="#DB4444">
                    Forgot Passsword ?
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      <Footer />
    </>
  )
}
