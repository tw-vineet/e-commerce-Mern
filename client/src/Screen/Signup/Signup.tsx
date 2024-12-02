import React, { useState } from "react";
import { loginDetails, signUpDetails } from "../../Dto/dataType"
import CloseIcon from '@mui/icons-material/Close';
import Input from "../../component/Input"
import ButtonCompo from "../../component/button"
import "./Signup.css"
import { FormEvent, FormEventHandler} from "react"
import { Box, Checkbox, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom";



export default function Signup(){


    
  let [signupDetails, setSignupDetails] = useState<signUpDetails>({
    userName: "",
    userEmail: "",
    userPhone: "",
    userPassword: "",
  })

  // input value
  const inputLogin = (loginInput: string, LoginName: string) => {
      setSignupDetails((prev) => {
        return { ...prev, [loginInput]: LoginName }
      })
  }

  const loginCoustomer = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    
    console.log(signupDetails)
  }




    return<>
     <Box sx={{position:"",zIndex:"11000"}}>
        <Box component={"section"} sx={style.box}>
          <Box
            sx={{
              display: "flex",
              height: "64vh",
              position:"relative",
              
              width: "70%",
              boxShadow: "0px 0px 16px 4px",
            }}
          >
            <Box sx={{ width: 500, mr: 2 }}>
              <div className="firstbox-signup">
                <Typography
                  variant={"h4"}
                  style={{
                    margin: 4,
                    fontFamily: "Edu AU VIC WA NT Arrows ,cursive",
                    position: "relative",
                    top: "30px",
                    left: "75px",
                    fontSize: "55px",
                    width: "268px",
                  }}
                >
                  Tip /Mart
                </Typography>
              </div>
            </Box>
            <Box>

            

              {/* It can be used  */}
              <Typography
                sx={{
                  position: "absolute",
                  left: "84%",
                  mt: 2,
                  fontFamily: "Dancing Script, serif",
                  cursor: "pointer",
                  color:"blue",
                  padding: "3px",
                  top:" 334px",
                  width: "142px;",
                  textAlign: "center",
                  borderRadius: "5px",
                  fontSize: "19px",
                  zIndex:"1",
                  textDecoration:"underline",
                  fontStyle:"italic",


                }}
                fontFamily={"fantasy"}
                component={"h5"}
                
              >
                Here is  Login
              </Typography>
              
              <Link to="/">
              <CloseIcon  sx={{position:"absolute",zIndex:1,right:"0px",bottom:"91%",fontSize:"37px",color:"white",background:"red",borderRadius:"3px"}}></CloseIcon>
                </Link>
              <Box
                  component={"form"}
                  onSubmit={loginCoustomer}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "",
                    height: "100%",
                    flexDirection: "column",
                    width: "379px",
                    backdropFilter: "blur(16px)",
                    
                        maxWidth: "101%",
                      pr: "33px",
                      pl:"32px"
                  
                  }}
                >
                  <Input
                    type="text"
                    label="Full-Name"
                    style={{ mb: 1, width: 300 }}
                    name="userName"
                    variant="standard"
                    emailid={inputLogin} />
              
                  
                  <Input
                    type="email"
                    label="Email Id"
                    style={{ mb: 1, width: 300 }}
                    name="userEmail"
                    variant="standard"
                    emailid={inputLogin}
                  />
                  
                  <Input
                    type="Phone Number"
                    label="Phone no."
                    style={{ mb: 1, width: 300 }}
                    name="userPhone"
                    variant="standard"
                    emailid={inputLogin}
                  />
                  
                  <Input
                    type="password"
                    label="Password"
                    style={{ mb: 1, width: 300 }}
                    variant="standard"
                    name="userPassword"
                    emailid={inputLogin}
                  />
                  <Input
                    type="password"
                    label="Re-Password"
                    style={{ mb: 1, width: 300 }}
                    variant="standard"
                    name="usermatchPassword"
                    emailid={inputLogin}
                  />
                  
                  <ButtonCompo
                    text={"Sign-Up"}
                    variant1="contained"
                    style={{ mt: 0, width: 100 }}
                    type="submit"
                  ></ButtonCompo>
                </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>


}
const style = {
    box: {
      display: "flex",
      justifyContent: "center",
      height: "80vh",
      alignItems: "center",
      width:"100%",
          position:" absolute",
      bottom: "54px",
      zIndex: "-1",
      background: "#ffffffba"
    },
  }