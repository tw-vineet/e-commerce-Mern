import { Box, Divider, Typography } from "@mui/material";
import {
  InputStyle,
  RegisterBox,
  RegisterBoxArea,
  FormBox,
  CreateButton,
  DirctRegisterBox,
  GoogleFbBox,
} from "./style";
import Facebook from "../../asset/images/login/Facebook.png";
import Google from "../../asset/images/login/Google.png";
export const Register = () => {
  return (
    <RegisterBoxArea>
      <RegisterBox>
        <Box>
          <Typography fontWeight="700" fontSize="32px" textAlign="center">
            Create an Account
          </Typography>
          <Box justifyContent="center" display="flex">
            <Typography fontWeight="400" fontSize="16px" color="#5A607F">
              Have an Account?
            </Typography>
            <Typography fontWeight="400" fontSize="16px" color="#1E5EFF">
              SignIn
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

          <CreateButton variant="contained">Create Account</CreateButton>
        </FormBox>
        <Box textAlign="center">
          <Typography fontSize="14px" fontStyle="400" color="#5A607F">
            By creating account, you agree to our
          </Typography>
          <Typography fontSize="14px" fontStyle="400" color="#1E5EFF">
            Terms of Service
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
          Or create an account using:
        </Typography>
        <GoogleFbBox>
          <DirctRegisterBox>
            <Box component="img" src={Google} height="24px" />
            <Typography fontWeight="400" fontSize="16px" color="#1E5EFF">
              Continue with Google
            </Typography>
          </DirctRegisterBox>
          <DirctRegisterBox>
            <Box component="img" src={Facebook} height="24px" />
            <Typography fontWeight="400" fontSize="16px" color="#1E5EFF">
              Continue with Facebook
            </Typography>
          </DirctRegisterBox>
        </GoogleFbBox>
      </RegisterBox>
    </RegisterBoxArea>
  );
};
