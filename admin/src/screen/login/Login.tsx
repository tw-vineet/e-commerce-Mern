import { Box, Checkbox, Divider, Typography } from "@mui/material";
import {
  InputStyle,
  LoginBox,
  LoginBoxArea,
  FormBox,
  CreateButton,
  DirctLoginBox,
  GoogleFbBox,
  LabelText,
} from "./style";
import Facebook from "../../asset/images/login/Facebook.png";
import Google from "../../asset/images/login/Google.png";
import React from "react";
export const Login = () => {

  const checkEmailValidation : React.HTML  = (input : string) =>{
    const emailRegex = /^[a-z]+[a-z0-9._-]{0,20}@[a-z]{4,12}\.[a-z]{2,4}$/;
    if(emailRegex.test(input)){

    }
  }

  const checkPasswordValidation=(input : string) =>{
    const passwordRegex =
    /^(?=[a-zA-Z0-9#@$?]{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*/;;
    if(passwordRegex.test(input)){

    }
  }

  return (
    <LoginBoxArea>
      <LoginBox>
        <Box>
          <Typography fontWeight="700" fontSize="32px" textAlign="center">
           Sign In
          </Typography>
          <Box justifyContent="center" display="flex" gap="2px">
            <Typography fontWeight="400" fontSize="16px" color="#5A607F">
            New to Our Product?
            </Typography>
            <Typography fontWeight="400" fontSize="16px" color="#1E5EFF">
            Create an Account
            </Typography>
          </Box>
        </Box>

        <FormBox>
          
          <Box>
            <LabelText>
              Email
            </LabelText>
            <InputStyle placeholder="Enter Email Address" onChange={checkEmailValidation}/>
          </Box>

          <Box>
            <LabelText>
              Password
            </LabelText>
            <InputStyle placeholder="Create Password"  />
          </Box>
        
          <Box display="flex"  alignItems="center" width="430px">
          <Checkbox    />
          <Typography fontWeight="400" fontSize="14px" color="#5A607F">Keep me signed in</Typography>
          </Box>
          <CreateButton variant="contained">Login Account</CreateButton>
        </FormBox>
        <Box textAlign="center">
          <Typography fontSize="14px" fontStyle="400" color="#1E5EFF">
          Forgot your password?
          </Typography>
        </Box>
        <Divider />
        <Typography
          fontWeight="400"
          fontSize="14px"
          color="#5A607F"
          marginBottom="3px"
          textAlign="center"
        >
          Or sign in using:
        </Typography>
        <GoogleFbBox>
          <DirctLoginBox>
            <Box component="img" src={Google} height="24px" />
            <Typography fontWeight="400" fontSize="16px" color="#1E5EFF">
              Continue with Google
            </Typography>
          </DirctLoginBox>
          <DirctLoginBox>
            <Box component="img" src={Facebook} height="24px" />
            <Typography fontWeight="400" fontSize="16px" color="#1E5EFF">
              Continue with Facebook
            </Typography>
          </DirctLoginBox>
        </GoogleFbBox>
      </LoginBox>
    </LoginBoxArea>
  );
};
