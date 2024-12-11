import { Box, Container, Grid2, Typography ,Divider} from "@mui/material"
import React from "react"
import Input from "../component/Input"
import SendIcon from "@mui/icons-material/Send"
import Qrimagefooter from "../image/Frame 719.png"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { styled } from '@mui/system'

const FooterBox = styled(Box)`
  background-color: black;
  padding: 30px 0px 30px 0px;

`
const FooterInput = styled(Box)`
  border: 1px solid white;
  width: 210px;
  height: 46px;
  margin-top: 16px;
`

const ConatinerFooter = styled(Container)(({ theme }) => ({
  marginTop: "40px",
  marginBottom: "30px"
}))

const StyledDivider = styled(Divider)(({ theme }) => ({
  border: `1px solid #262525`
}))
const Footimg = styled("img")(() => ({

  width: " 204px",
  height: "85px"
}))

export default function Footer() {
  return (
    <>
      <FooterBox>
        <ConatinerFooter>
          <Grid2 container columnSpacing={5}>
            <Grid2 size={3}>
              <Box>
                <Typography variant="h4" sx={{ color: "white", mb: 2 }}>
                  Exclisive
                </Typography>
                <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
                  Subscribe
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  Get 10% off your first order
                </Typography>
                <FooterInput
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Input
                    type="email"
                    label="Enter your email"
                    name="emailfooter"
                    variant="filled"
                    styleProps={{
                      "& .MuiInputLabel-filled": {
                        color: "white",
                      },
                      "& .MuiFilledInput-underline:after": {
                        border: 0,
                      },
                    }}
                  ></Input>

                  <SendIcon sx={{ color: "white", mr: 2 }} />
                </FooterInput>
              </Box>
            </Grid2>

            <Grid2 size={2}>
              <Box>
                <Typography variant="h5" sx={{ color: "white", mb: 2 }}>
                  Support
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh
                </Typography>

                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  exclusive@gmail.com
                </Typography>

                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  +88015-88888-9999
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={2}>
              <Box>
                <Typography variant="h5" sx={{ color: "white", mb: 2 }}>
                  Account
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  My Account
                </Typography>

                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  Login / Register
                </Typography>

                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  Cart
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  Wishlist
                </Typography>

                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  Shop
                </Typography>
              </Box>
            </Grid2>

            <Grid2 size={2}>
              <Box>
                <Typography variant="h5" sx={{ color: "white", mb: 2 }}>
                  Quik Links
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  Privacy Policy
                </Typography>

                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  Terms of Use
                </Typography>

                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  FAQ
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  Contact
                </Typography>
              </Box>
            </Grid2>

            <Grid2 size={3}>
              <Box>
                <Typography variant="h5" sx={{ color: "white", mb: 2 }}>
                  Download App
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                  save $3 with App New User Only
                </Typography>

                <Footimg src={Qrimagefooter} />

                <Box display={"flex"}>
                  <FacebookIcon sx={{ color: "white", mr: 2 }} />
                  <LinkedInIcon sx={{ color: "white", mr: 2 }} />
                  <InstagramIcon sx={{ color: "white", mr: 2 }} />
                  <TwitterIcon sx={{ color: "white", mr: 2 }}/>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </ConatinerFooter>
        <StyledDivider />
        <Box textAlign={"center"}>
          <Typography variant="subtitle2" sx={{ color: "gray", mt: 2 }}>
            &copy;  CopyWrite Rimel 2025.All
            Right Reserved
          </Typography>
        </Box>
      </FooterBox>

    </>
  )
}
