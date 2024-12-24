import React from "react";

import {
  Box,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid2,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddCardIcon from "@mui/icons-material/AddCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";



import { Buttons, Input } from "../component";
import { Footer, Navbar } from "../layout";
import { billingInputData } from "../utils/billinginput";
import productimg from "../image/Frame 706.png";









const StyledDivider = styled(Divider)({
  position: "relative",
  top: "15px",
  borderColor: "gray !important",
});
const StyledBillDivider = styled(Divider)({
  //   position: "relative",
  //   top: "15px",

  borderColor: "gray !important",
  margin: "auto",
});

const inputStyle = {
  width: 500,

  "& .css-1lk869w-MuiInputBase-root-MuiFilledInput-root ": {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
};
const inputPromoStyle = {
  width: 250,
  "& .css-gqcap3-MuiInputBase-root-MuiOutlinedInput-root": {
    borderRadius: 0
  },


}
const buttonBillingPromo = {
  borderRadius: 0,
  background: "#DB4444"
}

const BillingBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "auto",
  width: 400,
});

export function Billing() {
  return (
    <>
      <Navbar />
      <StyledDivider />
      <Box marginTop={10}>
        <Container>
          <Typography variant="h4">Billing Details</Typography>
          <Grid2 container >
            <Grid2 size={6}>
              <Box marginTop={4} marginBottom={7}>
                {billingInputData.map((value, index) => {
                  return (
                    <>
                      <Typography
                        variant="subtitle1"
                        color="gray"
                        marginTop={2}
                      >
                        {value.label}
                      </Typography>
                      <Input
                        variant="filled"
                        label=""
                        type={value.type}
                        name={value.label + "Billing"}
                        styleProps={{ ...inputStyle }}
                      />
                    </>
                  );
                })}
                <Box marginTop={2} marginBottom={2}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Save this information for faster check-out next time"
                  />
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={6}>
              <BillingBox>
                <Box display="flex" alignItems="center">
                  <img width={50} height={50} src={productimg}></img>
                  <Typography variant="subtitle1" marginLeft={5}>
                    LCD Moniter
                  </Typography>
                </Box>
                <Typography variant="subtitle1">$450</Typography>
              </BillingBox>
              <BillingBox>
                <Box display="flex" alignItems="center">
                  <img width={50} height={50} src={productimg}></img>
                  <Typography variant="subtitle1" marginLeft={5}>
                    LCD Moniter
                  </Typography>
                </Box>
                <Typography variant="subtitle1">$450</Typography>
              </BillingBox>
              <Box width={400} padding={3} margin={"auto"}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  marginTop={2}
                >
                  <Typography variant="subtitle1">Subtotal :</Typography>
                  <Typography variant="subtitle1">34444</Typography>
                </Box>
                <StyledBillDivider />
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  marginTop={2}
                >
                  <Typography variant="subtitle1">Shipping :</Typography>
                  <Typography variant="subtitle1">Free</Typography>
                </Box>
                <StyledBillDivider />
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  marginTop={2}
                >
                  <Typography variant="subtitle1">Total :</Typography>
                  <Typography variant="subtitle1">34444</Typography>
                </Box>

                <BillingBox>
                  <Box marginTop={2} marginBottom={2}>
                    <FormControlLabel control={<Checkbox />} label="Bank" name="uname" />
                  </Box>
                  <Box>
                    <AddCardIcon />
                    <AccountBalanceWalletIcon />
                    <AttachMoneyIcon />
                    <AccountBalanceIcon />
                  </Box>
                </BillingBox>
                <Box >
                  <FormControlLabel control={<Checkbox />} label="Cash on Delivery" name="unmae" />
                </Box>
                <BillingBox marginTop={5}>
                  <Input type="text" name="billingPrmoCode" label="Coupon Code" styleProps={{ ...inputPromoStyle }} />
                  <Buttons text="Apply Coupon" variant1="contained" styleProps={{ ...buttonBillingPromo }} type="button" />
                </BillingBox>
                <Box marginTop={4}>
                  <Buttons text="Place Order" variant1="contained" styleProps={{ ...buttonBillingPromo }}></Buttons>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
