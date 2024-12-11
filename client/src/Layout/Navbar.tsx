import * as React from "react"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import styled from "styled-components"
import AOS from "aos"
import { useEffect } from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { Box, Container, Grid2, Link } from "@mui/material"
import Input from "../component/Input"
import SearchIcon from "@mui/icons-material/Search"

// Styling the Navbar text
const NavbarText = styled(Typography)`
  color: white;
  font-family: "poppins";
`
const TopBar = styled(Box)`
  background-color: black;
  display: flex;
  justify-content: center;
  height: 44px;
  
`


const Navbartext = styled(Typography)`
  font-family: "Poppins";
`

const Bartext = styled(Grid2)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Searchbar = styled(Grid2)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 5px; */
`
const NavbarMain = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

const Searchicon = styled(SearchIcon)`
  position: relative;
  right: 27px;
`

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
                <Link color={"black"} href="../../Screen/Signup.tsx" underline="hover">
                  Sign Up
                </Link>
              </Box>
            </Bartext>

            <Searchbar size={4}>
              <Box sx={{ opacity: "50%", w: 4 }}>
                <Input
                  type="text"
                  label="what are you looking for ?"
                  name="usearch"
                  variant="outlined"
                  styleProps={{ w: 4 }}
                />
              </Box>
              <Searchicon />
              <Box sx={{ display: "flex" }}>
                <FavoriteIcon sx={{ mr: 2 }} />
                <ShoppingCartIcon />
              </Box>
            </Searchbar>
          </Grid2>
        </Container>
      </NavbarMain>
    </>
  )
}
