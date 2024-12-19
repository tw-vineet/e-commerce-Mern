import { Box, Typography } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { SidebarBox, DashboardBox, PageBox } from "./style";
import { Link, NavLink } from "react-router-dom";
import React from "react";

type pagesTypes = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

export const SideBar = () => {
  const pages: pagesTypes[] = [
    {
      name: "Dashboard",
      icon: <FormatListBulletedIcon />,
      path: "/",
    },
    {
      name: "Order",
      icon: <FormatListBulletedIcon />,
      path: "/orders",
    },
    {
      name: "Product",
      icon: <LocalOfferOutlinedIcon />,
      path: "/products",
    },
    {
      name: "Category",
      icon: <FolderOutlinedIcon />,
      path: "/category",
    },
    {
      name: "Customers",
      icon: <PeopleAltOutlinedIcon />,
      path: "/customers",
    },
    {
      name: "Reports",
      icon: <BarChartOutlinedIcon />,
      path: "/reports",
    },
    {
      name: "Inbox",
      icon: <MessageOutlinedIcon />,
      path: "/inbox",
    },
  ];

  return (
    <>
      <SidebarBox>
        {/* <DashboardBox>
          <HomeOutlinedIcon sx={{ color: "#5A607F" }} />
          <Typography color="#5A607F">Dashboard</Typography>
        </DashboardBox> */}
        {pages.map((item) => {
          return (
            <NavLink
              to={item.path}
              style={({ isActive }) => {
                return isActive
                  ? {
                      height: "44px",
                      width: "223px",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      padding: "0px 10px 0px 10px",
                      color: "#5A607F",
                      gap: 20,
                      borderRadius: "4px",
                    }
                  : {};
              }}
            >
              <PageBox>
                <Box height="24px"> {item.icon}</Box>
                <Typography fontWeight={400} fontSize="14px">
                  {item.name}
                </Typography>
              </PageBox>
            </NavLink>
          );
        })}
      </SidebarBox>
    </>
  );
};
