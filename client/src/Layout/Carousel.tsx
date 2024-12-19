import React from "react";
import { Box, Button, Grid2, Typography, colors } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import AppleIcon from '@mui/icons-material/Apple';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from "styled-components";
import { carouselData } from "../utils/carousel"



function Item({ item }: { item: { description: string } }) {
    return (
        <div style={{ width: "100%", height: "100%" }}>{item.description}</div>
    );
}

const BtnCarousel = styled(Box)({
    width: "20px",
    margin: "4px !important",
    borderRadius: "31px !important",
    height: "20px",
    border: "1px solid white !important"


})
const TextCarousel = styled(Typography)({
    color: "white",
    textDecoration: "underline"

})

const ArrowIconCarousel = styled(ArrowForwardIcon)({
    color: "white",
    marginLeft: 2
})


export default function Carouselbar() {




    const [index, setIndex] = React.useState(0);

    const handleChange = (cur: number, prev: number) => {
        setIndex(cur);
        console.log(cur, prev);
    };

    return (
        <div>
            <Carousel
                key={index}
                interval={3000}
                animation="slide"
                indicators={false}
                stopAutoPlayOnHover
                swipe
                className="my-carousel"
                sx={{ height: "100%" }}
            >
                {carouselData.map((item, i) => {
                    return <>
                        <Grid2 container >
                            <Grid2 size={6} height={"400px"} >
                                <Box bgcolor={"black"} height={"400px"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                                    <Box display={"flex"} paddingLeft={10} marginBottom={4} alignItems={"center"}> <AppleIcon style={{ color: "white", fontSize: "35px" }} />
                                        <Typography fontSize={22} color="white">Iphone 15 Series</Typography></Box>
                                    <Box> <Typography variant="h3" paddingLeft={10} color="white">{item.description}</Typography></Box>
                                    <Box display={"flex"} alignItems={"center"} paddingLeft={10} marginTop={2} marginRight={2}>
                                        <TextCarousel color="white"  >Shop Now</TextCarousel> <ArrowIconCarousel /></Box>

                                </Box>

                            </Grid2>
                            <Grid2 size={6} height={"400px"}>

                                <img src={item.src} width={"475px"} height={"400px"}></img>
                            </Grid2>


                        </Grid2 >


                    </>
                })}

            </Carousel>
            <Box display={"flex"} justifyContent={"center"} position={"relative"} bottom={"27px"} zIndex={1}>
                {
                    carouselData.map((item, i) => (

                        <BtnCarousel

                            onClick={() => setIndex(i)}
                            style={{ background: i === index ? "red" : "black" }}
                        >

                        </BtnCarousel>
                    ))

                }
            </Box>
        </div >
    );
}
