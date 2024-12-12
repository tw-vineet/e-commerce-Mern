import { Box, Grid2, Typography } from "@mui/material";
import logo from "../../asset/images/logo.png";
import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MuiBox ,ProfileBox} from "./style";

export const Header = () => {
  return (
    <>
      <MuiBox>
        <Box>
          <img src={logo} />
        </Box>
        <Box display="flex" >
          <Grid2 container display="flex" alignItems="center"  spacing={2}>
            <Grid2  color="white">
              <MessageIcon />
            </Grid2>
            <Grid2 color="white">
              <NotificationsNoneIcon />
            </Grid2>
            <Grid2  color="white">
              <ProfileBox>
                R
              </ProfileBox>
            </Grid2>
            <Grid2  color="white">
              <Box display={"flex"} gap={1}>
                <Typography>Sakshi Prajapat</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </MuiBox>
    </>
  );
};
