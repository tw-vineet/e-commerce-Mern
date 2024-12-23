import React from "react";
import Navbar from "../Layout/Navbar";
import styled from "styled-components";
import { Button, Container, Divider, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import prodImg from "../image/71ghAT0kkNL._AC_UY327_FMwebp_QL65_.jpg";
import Buttons from "../component/button";
import Input from "../component/Input";
import { Padding } from "@mui/icons-material";
import Footer from "../Layout/Footer";

const IncIconProduct = styled(ExpandLessIcon)({
  fontSize: "15px !important",
});

const DecIconProduct = styled(ExpandMoreIcon)({
  fontSize: "15px !important",
});

const Productimg = styled("img")({
  width: "30px",
  height: "30px",
  marginRight: 2,
});

const StyledDivider = styled(Divider)({
  position: "relative",
  top: "20px",
  borderColor: "#8080806b !important",
});

const Incrementbtn = styled(Button)({
  padding: "0 !important",
  minWidth: "0px !important",
});



// button css

const buttonStyle = {
  background: "white", color: "black",
  borderRadius: 0,
  Padding: 4
}
const buttonStyleCoupan = {
  background: "#DB4444",
  borderRadius: 0,
  Padding: 4,
  marginLeft: 2
}


export default function Cart() {





  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "productName",
      headerName: "Product",
      width: 300,
      renderCell: (param) => {
        return (
          <>
            <Box display={"flex"}>
              <Productimg src={prodImg} />
              <Typography marginLeft={2}>{param.value} </Typography>
            </Box>
          </>
        );
      },
    },
    {
      field: "productPrice",
      headerName: "Price",
      width: 300,
    },
    {
      field: "productQuantity",
      headerName: "Quantity",
      width: 300,
      renderCell: (param) => {
        return (
          <>
            <Box
              display="flex"
              alignItems={"center"}
              border={1}
              width={55}
              marginTop={1}
              paddingLeft={1}
            >
              <Typography>{param.value}</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                marginLeft={2}
              >
                <Incrementbtn onClick={(e) => fun(e, param)} name="btn1">
                  <IncIconProduct name="iconIncrement" />
                </Incrementbtn>
                <Incrementbtn onClick={(e) => fun(e, param)} name="btn2">
                  <DecIconProduct />
                </Incrementbtn>
              </Box>
            </Box>
          </>
        );
      },
    },
    {
      field: "productSubtotal",
      headerName: "Subtotal",
      width: 250,
    },
  ];

  const rows = [
    {
      id: 1,
      productName: "T.V",
      productPrice: 222,
      productQuantity: 1,
      productSubtotal: 222,
    },
    {
      id: 2,
      productName: "Washing Powder",
      productPrice: 50,
      productQuantity: 1,
      productSubtotal: 50,
    },
    {
      id: 3,
      productName: "Car Cover",
      productPrice: 322,
      productQuantity: 1,
      productSubtotal: 322,
    },
    {
      id: 4,
      productName: "Tide 60gm",
      productPrice: 90,
      productQuantity: 1,
      productSubtotal: 90,
    },
  ];

  function fun(
    e: React.MouseEvent<HTMLButtonElement>,
    param: GridRenderCellParams
  ) {
    console.log(param);

    if (e.currentTarget.name === "btn1") {
      param.row.productQuantity += 1;
      param.row.productSubtotal =
        param.row.productPrice * param.row.productQuantity;
    } else {
      if (param.row.productQuantity > 1) {
        param.row.productQuantity -= 1;
        param.row.productSubtotal -= param.row.productPrice;
      }
    }
  }

  return (
    <>
      <Navbar />
      <StyledDivider />
      <Container>
        <Box marginTop={12}>
          <DataGrid
            sx={{
              "&.css-5i0t7h-MuiDataGrid-root": {
                "&.MuiDataGrid-cell:focus": {
                  outline: "solid green 0px !important",
                },
              },
            }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {},
              },
            }}
          />
        </Box>

        <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>


          <Buttons text="Return To Shop " variant1="contained" styleProps={{ ...buttonStyle }} />
          <Buttons text="Update  Cart " variant1="contained" styleProps={{ ...buttonStyle }} />
        </Box>



        <Box marginTop={2} display={"flex"} justifyContent={"space-between"} marginBottom={25}>
          <Box>
            <Input label="Coupon Code " variant="outlined" name="couponCode" type="button" styleProps={{ width: 300, borderRadius: 0 }} />
            <Buttons text="Apply Coupan" variant1="contained" styleProps={{ ...buttonStyleCoupan }} />
          </Box>
          <Box border={1} width={400} padding={3}>
            <Typography variant="h6">Card Total</Typography>
            <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>
              <Typography variant="subtitle1">Subtotal :</Typography>
              <Typography variant="subtitle1">34444</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>
              <Typography variant="subtitle1">Shipping :</Typography>
              <Typography variant="subtitle1">Free</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>
              <Typography variant="subtitle1">Total :</Typography>
              <Typography variant="subtitle1">34444</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} marginTop={2}>
              <Buttons text="Procees to Checkout" variant1="contained" styleProps={{ ...buttonStyleCoupan }} />
            </Box >

          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
