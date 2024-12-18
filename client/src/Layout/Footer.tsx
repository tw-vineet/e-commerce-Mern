import React from "react"
import { Box, Container, Grid2, Typography, Divider } from "@mui/material"
import { styled } from "@mui/system"
import SendIcon from "@mui/icons-material/Send"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import Input from "../component/Input"
import { footerData } from "../utils/Footertextdata"
// @ts-ignore
import Qrimagefooter from "../image/Frame 719.png"


const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: "black",
  padding: "30px 0px 30px 0px",
}))

const FooterInput = styled(Box)(({ theme }) => ({
  border: "1px solid white",
  width: "210px",
  height: " 46px",
  marginTop: "16px",
}))

const ConatinerFooter = styled(Container)(({ theme }) => ({
  marginTop: "40px",
  marginBottom: "30px",
}))

const StyledDivider = styled(Divider)(({ theme }) => ({
  border: `1px solid #262525`,
}))
const Footimg = styled("img")(() => ({
  width: " 204px",
  height: "85px",
  margin: "20px 0px 20px 0px",
}))

const Footertext = styled(Typography)(({ theme }) => ({
  marginTop: "25px",
  color: "white",
}))

const FooterSrchIcon = styled(SendIcon)(({ theme }) => ({
  color: "white",
  marginRight: "12px",
}))


export default function Footer() {


  return (
    <>
      <FooterBox>
        <ConatinerFooter>
          <Grid2 container columnSpacing={4}>
            <Grid2 size={3}>
              <Box>
                <Footertext variant="h4">Exclisive</Footertext>
                <Footertext variant="h6">Subscribe</Footertext>
                <Footertext variant="subtitle2">
                  Get 10% off your first order
                </Footertext>
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
                  />
                  <FooterSrchIcon />
                </FooterInput>
              </Box>
            </Grid2>


            {Object.entries(footerData).map((value: [string, []], index: number) => {

              return (
                <>
                  < Grid2 size={2} >
                    <Box>
                      <Footertext key={index} variant="h6">{value[0]}</Footertext>
                      <Box>
                        {value[1].map((value: string) => {

                          return (
                            <>
                              <Footertext key={index} variant="subtitle2">
                                {value}
                              </Footertext>
                            </>
                          )
                        })}
                      </Box>
                    </Box>
                  </Grid2 >
                </>
              )
            })}

            <Grid2 size={3}>
              <Box>
                <Footertext variant="h5">Download App</Footertext>
                <Footertext variant="subtitle2">
                  save $3 with App New User Only
                </Footertext>

                <Footimg src={Qrimagefooter} />

                <Box display={"flex"} gap={3} color={"white"}>
                  <FacebookIcon />
                  <LinkedInIcon />
                  <InstagramIcon />
                  <TwitterIcon />
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </ConatinerFooter >
        <StyledDivider />
        <Box textAlign={"center"}>
          <Typography variant="subtitle2" color={"gray"} marginTop={2}>
            &copy; Copyright Rimel 2025.All Right Reserved
          </Typography>
        </Box>
      </FooterBox >
    </>
  )
}
