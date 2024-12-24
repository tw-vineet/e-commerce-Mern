import React from "react";
import { Box, Card, Rating, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import styled from "styled-components";
import gamesrc from "../image/71ghAT0kkNL._AC_UY327_FMwebp_QL65_.jpg";





const ProductCards = styled(Card)(() => ({
  width: "100%",
}));

const DiscountText = styled(Typography)((theme) => ({
  background: "#DB4444",
  padding: "0px 8px",
  borderRadius: "4px",
  position: "relative",
  zIndex: 111,
}));

const ProductImg = styled(Box)((theme) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "12px",
  background: "#F5F5F5",
  position: "relative",
  height: "237px",
}));

const ProductIcon = styled(Box)((theme) => ({
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "35px",
  width: "37px",
  borderRadius: "61%",
  marginTop: 8,
  position: "relative",
  zIndex: 11,
}));
const Productimgs = styled("img")(() => ({
  width: "139px",
  height: "123px",
  position: "absolute",
  left: "56px",
  top: "61px",
}));


interface IProductProps {
  productDeatils: any
}

export default function Cards({ productDeatils }: IProductProps) {

  return (
    <>
      <Box width={"22%"}>

        <ProductCards>
          <ProductImg>
            <Box>
              <DiscountText variant="subtitle2">-{productDeatils.discount}%</DiscountText>
            </Box>
            <Box>
              <ProductIcon>
                <FavoriteBorderIcon />
              </ProductIcon>

              <ProductIcon>
                <RemoveRedEyeIcon />
              </ProductIcon>
            </Box>
            <Productimgs src={gamesrc} />
          </ProductImg>

          <Box padding={2}>
            <Typography variant="subtitle1">{productDeatils.name}</Typography>
            <Typography variant="subtitle2">$
              {productDeatils.price}<Box component="span">{ }</Box>
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={1} marginTop={1}>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={productDeatils.rating}
                readOnly
              />
              <Box component="span">(88)</Box>
            </Box>
          </Box>
        </ProductCards>
      </Box>
    </>
  );
}
