import React from "react"
import { Box, Container, Divider, Grid2, Slider } from "@mui/material"
import { categoryIConText } from "../utils/category"
import Cards from "../component/card"
import Title from "../component/title"
import Category from "../component/category"
import { products } from "../utils/product"
import styled from "styled-components"
import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import Sidebar from "../Layout/Sidebar"
import Crousal from "../Layout/Carousel"
import Carouselbar from "../Layout/Carousel"

const StyledDivider = styled(Divider)({
  position: "relative",
  top: "49px",
  borderColor: "gray !important",
})

export default function Home() {
  let categoryShow = categoryIConText.slice(0, 6)
  let productShow = products.slice(0, 4)

  return (
    <>
      <Navbar />

      <Container>
        <Grid2 container marginTop={7}>
          <Grid2 size={2}>

            <Sidebar />




          </Grid2>
          <Divider orientation="vertical" variant="middle" sx={{ color: "red" }} />

          <Grid2 size={9}>
            <Carouselbar />
          </Grid2>
        </Grid2>
      </Container>

      <Box paddingLeft={15} marginTop={10} marginBottom={10}>
        <Title text="Flaesh Sales" headText="Today's" />
        <Box>

          <Box display={"flex"} gap={4}>
            {products.map((value: any, index: number) => {
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
            {categoryShow.map((value: any) => {
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
              {productShow.map((value: any) => {
                return (
                  <>
                    <Cards productDeatils={value} />
                  </>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
