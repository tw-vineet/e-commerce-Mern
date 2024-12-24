import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/store"
import {
  Box,
  Container,
  Divider,
  Grid2,
  Typography,
} from "@mui/material"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import { Carouselbar, Footer, Navbar, Sidebar } from "../layout";
import { Buttons, Cards, Category, Title } from "../component"
import { categoryIConText } from "../utils/category"
import styled from "styled-components"

import { fetchProducts } from "../services/api"

// Image
import imgarrivalfirst from "../image/ps5-slim-goedkope-playstation_large 1.png"
import imgarrivalsecond from "../image/attractive-woman-wearing-hat-posing-black-background 1.png"
import imgarrivalthird from "../image/Frame 707.png"
import imgarrivalfourth from "../image/Frame 706.png"
import clipboardImage from "../image/Frame 694.png"






const StyledDivider = styled(Divider)({
  position: "relative",
  top: "15px",
  borderColor: "gray !important",
})

const Arrivalimg = styled("img")({
  width: "100%",
  height: "514px",
})
const Arrivalimgsec = styled("img")({
  width: "100%",
  height: "288px",
})
const Arrivalimgthird = styled("img")({
  width: "65%",
  height: "187px",
  margin: "17px 49px",
})

const TextCarousel = styled(Typography)({
  color: "white",
  textDecoration: "underline",
})

const NewArrival = styled(Box)({
  width: "76px",
  border: "1p solid black",
  display: "flex",
  borderRadius: "44px",
  alignItems: "center",
  justifyContent: "center",
  height: "71px",
  background: "black",
})

const LocalShippinicon = styled(LocalShippingIcon)({
  color: "white",
  fontSize: "50px",
})

const HeadShippinicon = styled(HeadsetMicIcon)({
  color: "white",
  fontSize: "50px",
})

const VerfiedShippinicon = styled(VerifiedUserIcon)({
  color: "white",
  fontSize: "50px",
})



const ArrowIconCarousel = styled(ArrowForwardIcon)({
  color: "white",
  marginLeft: 2
})


export function Home() {
  let product = useAppSelector((state) => state.product.data)

  let categoryShow = categoryIConText.slice(0, 6)
  let productShow = product.slice(4, 8)
  let ourproductShow = product.slice(0, 8)

  let dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <>
      <Navbar />

      <StyledDivider />
      <Container>
        <Grid2 container marginTop={7}>
          <Grid2 size={2}>
            <Sidebar />
          </Grid2>

          <Grid2 size={10}>
            <Carouselbar />
          </Grid2>
        </Grid2>
      </Container>

      <Box paddingLeft={15} marginTop={10} marginBottom={10}>
        <Title text="Flaesh Sales" headText="Today's" />
        <Box>
          <Box display={"flex"} gap={4}>
            {productShow.map((value, index) => {
              console.log()
              return (
                <>
                  <Cards key={index} productDeatils={value} />
                </>
              )
            })}
          </Box>
        </Box>
      </Box>
      <Container>
        <StyledDivider />
      </Container>

      <Container>
        <Box marginTop={10} marginBottom={4}>
          <Title text="Browse By Category" headText="Categories" />

          <Box display={"flex"} gap={7} flexWrap={"wrap"}>
            {categoryShow.map((value) => {
              return (
                <>
                  <Category categoryData={value} />
                </>
              )
            })}
          </Box>
        </Box>
        <StyledDivider />

        <Box marginTop={10} marginBottom={10}>
          <Title text="Best Selling Products" headText="This Month" />
          <Box>
            <Title text="" headText="" />
            <Box display={"flex"} gap={4} flexWrap={"wrap"}>
              {productShow.map((value) => {
                return (
                  <>
                    <Cards productDeatils={value} />
                  </>
                )
              })}
            </Box>
          </Box>
        </Box>

        <Box>
          <Clipboard />
        </Box>
        <Box marginTop={10} marginBottom={10}>
          <Title text="Explore Our Products" headText="Our Product" />
          <Box>
            <Title text="" headText="" />
            <Box display={"flex"} gap={4} flexWrap={"wrap"}>
              {ourproductShow.map((value) => {
                return (
                  <>
                    <Cards productDeatils={value} />
                  </>
                )
              })}
            </Box>
          </Box>
        </Box>

        <Box marginTop={12}>
          <Title text="New Arrival" headText="Featured" />
          <Newarrivel />
        </Box>
      </Container>

      <Footer />
    </>
  )
}

function Newarrivel() {
  return (
    <>
      <Grid2 container marginBottom={15} spacing={1}>
        <Grid2 size={6}>
          <Box bgcolor={"black"} position={"relative"}>
            <Arrivalimg src={imgarrivalfirst} />
            <Box
              position={"absolute"}
              zIndex={11}
              bottom={"23px"}
              left={"23px"}
              width={"48%"}
            >
              <Typography color="white" variant="h5" marginBottom={2}>
                Play Station 5
              </Typography>
              <Typography color="white" marginBottom={2}>
                Black and White version of the PS5 coming out on sale.
              </Typography>
              <TextCarousel color="white">Shop Now</TextCarousel>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={6}>
          <Box position={"relative"}>
            <Arrivalimgsec src={imgarrivalsecond} />
            <Box
              position="absolute"
              zIndex={11}
              bottom={"23px"}
              left={"23px"}
              width={"48%"}
            >
              <Typography color="white" variant="h6" marginBottom={2}>
                Women’s Collections
              </Typography>
              <Typography color="white" variant="subtitle2" marginBottom={2}>
                BFeatured woman collections that give you another vibe.
              </Typography>
              <TextCarousel color="white">Shop Now</TextCarousel>
            </Box>
          </Box>
          <Grid2 container spacing={1}>
            <Grid2 size={6}>
              <Box bgcolor={"black"} position={"relative"}>
                <Arrivalimgthird src={imgarrivalthird} />
                <Box
                  position={"absolute"}
                  zIndex={11}
                  bottom={"20px"}
                  left={"23px"}
                  width={"80%"}
                >
                  <Typography color="white" variant="h6">
                    Speakers
                  </Typography>
                  <Typography
                    color="white"
                    variant="subtitle1"
                    marginBottom={1}
                  >
                    Amazon wireless speakers.
                  </Typography>
                  <TextCarousel color="white">Shop Now</TextCarousel>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={6}>
              <Box bgcolor={"black"} position={"relative"}>
                <Arrivalimgthird src={imgarrivalfourth} />
                <Box
                  position={"absolute"}
                  zIndex={11}
                  bottom={"20px"}
                  left={"23px"}
                  width={"80%"}
                >
                  <Typography color="white" variant="h6">
                    Perfume
                  </Typography>
                  <Typography
                    color="white"
                    variant="subtitle1"
                    marginBottom={1}
                  >
                    Gucci Intense OUD EDP.
                  </Typography>
                  <TextCarousel color="white">Shop Now</TextCarousel>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 container marginBottom={25}>
        <Grid2 size={4}>
          <Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <NewArrival>
                <LocalShippinicon />
              </NewArrival>
              <Box marginTop={3}>
                <Typography textAlign={"center"} variant="h6">
                  Free And Fast Delivery
                </Typography>
                <Typography
                  marginTop={1}
                  textAlign={"center"}
                  variant="subtitle2"
                  color="gray"
                >
                  {" "}
                  Free delivery for all order $140
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={4}>
          <Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <NewArrival>
                <HeadShippinicon />
              </NewArrival>
              <Box marginTop={3}>
                <Typography textAlign={"center"} variant="h6">
                  24 /7 COUSTOMER SERVICE
                </Typography>
                <Typography
                  marginTop={1}
                  textAlign={"center"}
                  variant="subtitle2"
                  color="gray"
                >
                  {" "}
                  Friendly 24/7 customer support
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={4}>
          <Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <NewArrival>
                <VerfiedShippinicon />
              </NewArrival>
              <Box marginTop={3}>
                <Typography textAlign={"center"} variant="h6">
                  MONEY BACK GUARATEE
                </Typography>
                <Typography
                  marginTop={1}
                  variant="subtitle2"
                  textAlign={"center"}
                  color="gray"
                >
                  We return money in 30 days
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </>
  )
}



const BackgroundClipBoardBox = styled(Grid2)({
  background: "radial-gradient(#121212b3, #000000ed)",

})
const clipboardbutton = {
  background: "#00FF66",
  color: "white",
  width: 150,
  borderRadius: 0.5,
  marginTop: 1

}
function Clipboard() {

  return (
    <>

      <Box>
        <Grid2 container >
          <Grid2 size={6} height={"400px"} >
            <Box bgcolor={"black"} height={"400px"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
              <Box display={"flex"} paddingLeft={10} marginBottom={4} alignItems={"center"}>
                <Typography fontSize={22} color="#00FF66">Categories</Typography></Box>
              <Box> <Typography variant="h3" paddingLeft={10} color="white">Enhance Your Music Experience</Typography></Box>
              <Box display={"flex"} alignItems={"center"} paddingLeft={10} marginTop={2} marginRight={2}>
                <Buttons variant1="contained" text="Buy Now" styleProps={{ ...clipboardbutton }}></Buttons></Box>

            </Box>

          </Grid2>
          <BackgroundClipBoardBox size={6} height={"400px"} >

            <img src={clipboardImage} width={"widthContent"} height={"400px"}></img>
          </BackgroundClipBoardBox >


        </Grid2 >
      </Box>
    </>
  )
}
