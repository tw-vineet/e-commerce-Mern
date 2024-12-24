import { Box, Grid2, Typography } from "@mui/material";
import logo from "../../asset/images/logo.png";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AvatarBox, MuiBox } from "./style";

export const Header = () => {
  return (
    <>
      <MuiBox>
        <Box>
          <img src={logo} />
        </Box>
        <Box display="flex">
          <Grid2 container display="flex" alignItems="center" spacing={2}>
            <Grid2 color="white">
              <MessageIcon />
            </Grid2>
            <Grid2 color="white">
              <NotificationsNoneIcon />
            </Grid2>
            <Grid2 color="white">
              <AvatarBox>R</AvatarBox>
            </Grid2>
            <Grid2 color="white">
              <Box display="flex" gap={1}>
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
