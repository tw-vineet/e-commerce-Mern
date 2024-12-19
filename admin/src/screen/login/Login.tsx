import { Box, Divider, Typography } from "@mui/material";
import {
  InputStyle,
  LoginBox,
  LoginBoxArea,
  FormBox,
  CreateButton,
  DirctLoginBox,
  GoogleFbBox,
} from "./style";
import Facebook from "../../asset/images/login/Facebook.png";
import Google from "../../asset/images/login/Google.png";
export const Login = () => {
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
            <Typography
              fontWeight="400"
              fontSize="14px"
              color="#5A607F"
              marginBottom="3px"
            >
              Email
            </Typography>
            <InputStyle placeholder="Enter Email Address" />
          </Box>

          <Box>
            <Typography
              fontWeight="400"
              fontSize="14px"
              color="#5A607F"
              marginBottom="3px"
            >
              Password
            </Typography>
            <InputStyle placeholder="Create Password" />
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
