import { Box, Typography } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { SidebarBox, PageBox } from "./style";
import {NavLink } from "react-router-dom";
import React, { useState } from "react";

type pagesTypes = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

export const SideBar = () => {
  const [isScreen, setIsScreen] = useState(0);
  const pages: pagesTypes[] = [
    {
      name: "Dashboard",
      icon: <HomeOutlinedIcon />,
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
        {pages.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              style={({ isActive }: { isActive: boolean }) => {
                return isActive
                  ? {
                      height: "44px",
                      width: "223px",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      padding: "0px 10px 0px 10px",
                      gap: 20,
                      borderRadius: "4px",
                      textDecoration: "none",
                    }
                  : { textDecoration: "none" };
              }}
              onClick={() => {
                setIsScreen(index);
              }}
            >
              <PageBox>
                <Box
                  key={index}
                  height="24px"
                  color={isScreen == index ? "#5A607F" : "white"}
                >
                  {" "}
                  {item.icon}
                </Box>
                <Typography
                  key={index}
                  fontWeight="400"
                  fontSize="14px"
                  color={isScreen == index ? "#5A607F" : "white"}
                >
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
