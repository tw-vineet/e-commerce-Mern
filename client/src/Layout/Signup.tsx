import React from "react";
import { Box, Grid2, Typography, Link } from "@mui/material"
import styled from "styled-components"
import Navbar from "../Layout/Navbar"
import Input from "../component/Input"
import Buttons from "../component/button"
import Footer from "../Layout/Footer"
import { IButtonStyle } from "../Dto/dataType";
// @ts-ignore
import LoginImage from "../image/login.png"



// styled Component

const ImgLogin = styled("img")(() => ({
  width: "622px",
  height: "475px",
}))

const Boxloginput = styled(Box)(() => ({
  marginTop: "30px",
  marginBottom: "31px"
}))
const Boxinputfield = styled(Box)(() => ({
  margin: "13px 0px 12px 0px;",

}))

//sx is not working that's why i am using this 
const Buttonstyle: IButtonStyle = {

  width: "100%",
  background: "#DB4444",
  borderRadius: "2px",

}

const GooglebuttonCss: IButtonStyle = {
  width: "100%",
  background: "white",
  borderRadius: "2px",
  marginTop: "12px",
  color: "black",
  border: "1px solid gray",
  marginBottom: "42px"
}



export default function Signup() {



  return <>
    <Navbar />




    <Box paddingTop={5} marginTop={2} marginBottom={10}>
      <Grid2 container marginBottom={10}>
        <Grid2 size={6}>
          <ImgLogin src={LoginImage} />
        </Grid2>
        <Grid2
          size={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <Box>
              <Typography variant="h4">Create an account</Typography>
              <Typography marginTop={2} variant="subtitle1">
                Enter your details below
              </Typography>
            </Box>
            <Box component="form">
              <Boxloginput>
                <Boxinputfield>
                  <Input
                    variant="filled"
                    type="text"
                    label="Full Name"
                    name="nameSignup"
                  />
                </Boxinputfield>
                <Boxinputfield>
                  <Input
                    variant="filled"
                    type="email"
                    label="Enter your email"
                    name="signupEmail"
                  />
                </Boxinputfield>
                <Boxinputfield>
                  <Input
                    variant="filled"
                    type="Password"
                    label="Enter your password"
                    name="signupPassword"
                  />
                </Boxinputfield>
              </Boxloginput>

              <Box >
                <Buttons
                  text="Log In"
                  variant1="contained"
                  styleProps={Buttonstyle}
                ></Buttons>
                <Buttons
                  type="button"
                  text="SignUp with Google"
                  variant1="contained"
                  styleProps={GooglebuttonCss}
                ></Buttons>

                <Box textAlign={"center"} >
                  <Typography component="span">
                    Already have account? <Link>Log In</Link>
                  </Typography>
                </Box>

              </Box>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
    <Footer />
  </>



}