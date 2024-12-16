import * as React from "react"
import { Box, Container, Grid2, Link } from "@mui/material"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import styled from "styled-components"
import { useEffect } from "react"
import AOS from "aos"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import SearchIcon from "@mui/icons-material/Search"
import Input from "../component/Input"

// Styling the Navbar text
const NavbarText = styled(Typography)(({ theme }) => ({
  color: " white",
  fontFamily: "poppins",
}))

const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: "black",

  display: "flex",

  justifyContent: "center",

  height: "44px",
}))

const Navbartext = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
}))

const Bartext = styled(Grid2)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}))

const Searchbar = styled(Grid2)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}))

const NavbarMain = styled(Box)(({ theme }) => ({
  display: " flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "30px",
}))

const Searchicon = styled(SearchIcon)(({ theme }) => ({
  position: "relative",
  right: "27px",
}))

const InputBox = styled(Box)(({ theme }) => ({
  opacity: "50%",
  w: 4,
}))

export default function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <>
      <TopBar>
        <Toolbar>
          <NavbarText>
            Summer Sale: All Swim Suits And Free Express Delivery - OFF 50%!
            Shop Now
          </NavbarText>
        </Toolbar>
      </TopBar>

      <NavbarMain>
        <Container>
          <Grid2
            container
            alignItems={"center"}
            justifyContent={"center"}
            spacing={4}
          >
            <Grid2 size={2}>
              <Typography variant="h4"> Exclisive </Typography>
            </Grid2>

            <Bartext size={6}>
              <Box>
                <Navbartext></Navbartext>
                <Link color={"black"} href="#" underline="hover">
                  Home
                </Link>
              </Box>
              <Box>
                <Link color={"black"} href="#" underline="hover">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link color={"black"} href="#" underline="hover">
                  About
                </Link>
              </Box>
              <Box>
                <Link
                  color={"black"}
                  href="../../Screen/Signup.tsx"
                  underline="hover"
                >
                  Sign Up
                </Link>
              </Box>
            </Bartext>

            <Searchbar size={4}>
              <InputBox>
                <Input
                  type="text"
                  label="what are you looking for ?"
                  name="usearch"
                  variant="outlined"
                  styleProps={{ w: 4 }}
                />
              </InputBox>
              <Searchicon />
              <Box display={"flex"}>
                <FavoriteIcon />
                <ShoppingCartIcon />
              </Box>
            </Searchbar>
          </Grid2>
        </Container>
      </NavbarMain>
    </>
  )
}
