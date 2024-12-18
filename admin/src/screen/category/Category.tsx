import React from "react";
import { CategoryBox } from "./style";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

export const Category = () => {
  const category = [
    {
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      title: "Men Clothes",
      items: "12 item",
    },
    {
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      title: "Women Clothes",
      items: "12 item",
    },
    {
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      title: "Accessories",
      items: "12 item",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQas-Oxi-GF8xWMQ7g8MGmNvCxFLevtKZAA&s",
      title: "Cotton Clothes",
      items: "12 item",
    },
    {
      image: "https://www.kidbea.com/cdn/shop/articles/portrait-happy-girl-outdoors-summer-day.jpg?v=1679038182",
      title: "Summer Clothes",
      items: "12 item",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtuEAePpAzLz-PEcGlhNBAdZBBq8VYPTzXg&s",
      title: "Wedding Clothes",
      items: "12 item",
    },
    {
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      title: "Spring Collection",
      items: "12 item",
    },
    {
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      title: "Casual Clothes",
      items: "12 item",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkac7SKpqdH-xN5upqw9yrJ32odxLCIhK8g&s",
      title: "Hats",
      items: "12 item",
    },
  ];
  return (
    <>
      <CategoryBox>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="700" fontSize="24px">
            Category
          </Typography>
          <Button variant="contained">+ Add Category</Button>
        </Box>
        <Grid2 container spacing={4} gap={2}>
          {category.map((item) => {
            return (
              <Grid2 size={{ lg: 4 }}>
                <Card sx={{ width: "350px", height: "324px" }}>
                  <CardActionArea>
                    <img
                      src={item.image}
                      style={{
                        height: "240px",
                        width: "350px",
                        objectFit: "contain",
                      }}
                    />
                    <CardContent>
                      <Typography
                        fontWeight={700}
                        fontSize="16px"
                        color="#131523"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        fontWeight={400}
                        fontSize="14px"
                        color="#5A607F"
                      >
                        {item.items}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid2>
            );
          })}
        </Grid2>
      </CategoryBox>
    </>
  );
};
