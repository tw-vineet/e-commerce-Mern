import { Box, Typography } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { SidebarBox, DashboardBox, PageBox } from "./style";

export const SideBar = () => {
  const pages = [
    {
      name: "Order",
      icon: <FormatListBulletedIcon />,
    },
    {
      name: "Product",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      name: "Category",
      icon: <FolderOutlinedIcon />,
    },
    {
      name: "Customers",
      icon: <PeopleAltOutlinedIcon />,
    },
    {
      name: "Reports",
      icon: <BarChartOutlinedIcon />,
    },
    {
      name: "Inbox",
      icon: <MessageOutlinedIcon />,
    },
  ];

  return (
    <>
    
      <SidebarBox>
        <DashboardBox>
          <HomeOutlinedIcon sx={{ color: "#5A607F" }} />
          <Typography color="#5A607F">Dashboard</Typography>
        </DashboardBox>
        {pages.map((item) => {
          return (
            <PageBox>
              <Box height="24px"> {item.icon}</Box>
              <Typography fontWeight={400} fontSize="14px" >
                {item.name}
              </Typography>
            </PageBox>
          );
        })}
      </SidebarBox>
      
      
    </>
  );
};
