import { Box, Grid2, Typography } from "@mui/material";
import { CardBox, IconBox, ChartBox, BaarChartBox, ManageBox } from "./style";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import existingUserImage from "../../asset/images/dashboard/existingUser.png"
import newUserImage from "../../asset/images/dashboard/newUser.png"
import uniqueVisitsImage from "../../asset/images/dashboard/uniqueVisits.png"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

import React from "react";
import TableComponent from "../../components/table/TableComponent";
import styled from "styled-components";

const IconStyle = styled(KeyboardArrowDownIcon)({
  "&.css-1umw9bq-MuiSvgIcon-root": {
    fontSize: 15,
  },
});

type cardProp = {
  number: string;
  title: string;
  percentage: string;
  icon: React.ReactNode;
  image : {
    isImage : boolean,
    source :  string | React.ReactNode 
  }
};

type tableProp = {
  name: string;
  price: number;
  unitsold: number;
};

export const Dashboard = () => {
  const card = [
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: <IconStyle />,
      image:{
        isImage : false,
        source : <ShoppingCartOutlinedIcon/>
      }
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: <IconStyle />,
      image:{
        isImage : false,
        source : <ShoppingCartOutlinedIcon/>
      }
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: <IconStyle />,
      image:{
        isImage : true,
        source : "uniqueVisitsImage"
      }
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: <IconStyle />,
      image:{
        isImage : true,
        source : "newUserImage"
      }
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: <IconStyle />,
      image:{
        isImage : true,
        source : "existingUserImage"
      }
    },
  ];

  return (
    <>
      <Box
        padding="20px"
        gap={2}
        display="flex"
        flexDirection="column"
        width="80%"
      >
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="700" fontSize="24px">
            Dashboard
          </Typography>
          <ManageBox>
            <SettingsOutlinedIcon />
            <Typography>Manage</Typography>
          </ManageBox>
        </Box>
        <Box display="flex" gap={4}>
          {card.map((item) => {
            console.log(item.image)
            return (
              <Card
                number={item.number}
                title={item.title}
                percentage={item.percentage}
                icon={item.icon}
                image = {item.image}
              />
            );
          })}
        </Box>
        <Box>
          <ChartSection />
        </Box>
        <Box>
          <TableSection />
        </Box>
      </Box>
    </>
  );
};

const Card: React.FC<cardProp> = ({ number, title, percentage, icon , image }) => {
  console.log("Card 5",image)
  return (
    
      <CardBox>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography fontSize="16px" fontWeight="700">
            ${number}
          </Typography>
          <Typography fontSize="14px" fontWeight="400" color="#5A607F">
            {title}
          </Typography>
          <Box display="flex" color="#06A561" alignItems="center">
            <Typography fontSize="10px" fontWeight="400">
              {percentage}
            </Typography>
            <Box display="flex" alignItems="center">
              {icon}
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
       
          {image.isImage === true ? <img/> : <IconBox>{image.source}</IconBox>}
          {/* <IconBox>
            <ShoppingCartOutlinedIcon
              sx={{
                height: "12px",
                width: "12px",
              }}
            />
          </IconBox> */}
        </Box>
      </CardBox>
   
  );
};

const ChartSection = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = [
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12am",
    "1pm",
    "2pm",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "May",
        data: [10, 30, 50, 40, 56, 33, 67, 20, 54, 42],
        fill: false,
        borderColor: "#D9E1EC",
        tension: 0.1,
      },
      {
        label: "June",
        data: [20, 30, 45, 32, 56, 51, 25, 20, 59, 69],
        fill: false,
        borderColor: "#1E5EFF",
        tension: 0.1,
      },
    ],
  };
  const barChartLabels = ["Jan", "Feb", "March", "April", "May", "June"];
  const barChartData = {
    barChartLabels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  return (
    <>
      <Grid2 container display="flex" spacing={2}>
        <Grid2 size={{ lg: 9 }}>
          <ChartBox>
            <Box display="flex" justifyContent="space-between">
              <Typography fontSize="16px" fontWeight="700">
                Orders Over Time
              </Typography>
              <Box color="#5A607F" display="flex">
                <Typography fontSize="14px" fontWeight="400">
                  Last 12 Hours
                </Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Box display="flex" gap={2}>
              <Box>
                <Typography fontSize="20px" fontWeight="700">
                  678
                </Typography>
                <Typography fontSize="14px" fontWeight="400" color="#5A607F">
                  Orders on May 22
                </Typography>
              </Box>
              <Box>
                <Typography fontSize="20px" fontWeight="700">
                  650
                </Typography>
                <Typography fontSize="14px" fontWeight="400" color="#5A607F">
                  Orders on June 22
                </Typography>
              </Box>
            </Box>
            <Box
              height="297px"
              width="800px"
              display="flex"
              justifyContent="center"
            >
              <Line data={data} />
            </Box>
          </ChartBox>
        </Grid2>

        <Grid2 size={{ lg: 3 }}>
          {" "}
          <BaarChartBox>
            <Box
              sx={{
                borderBottom: "2px solid #E6E9F4",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: "230px",
              }}
            >
              <Typography fontSize="16px" fontWeight="700">
                Last 7 Days Sales
              </Typography>
              <Box>
                <Typography fontSize="20px" fontWeight="700">
                  5,894
                </Typography>
                <Typography fontSize="14px" fontWeight="400" color="#5A607F">
                  Items Sold
                </Typography>
              </Box>
              <Box>
                <Typography fontSize="20px" fontWeight="700">
                  $12,546
                </Typography>
                <Typography fontSize="14px" fontWeight="400" color="#5A607F">
                  Revenue
                </Typography>
              </Box>
            </Box>
            <Box>{/* <Bar data={barChartData}/> */}</Box>
          </BaarChartBox>
        </Grid2>
      </Grid2>
    </>
  );
};

const TableSection = () => {
  const row = ["Name", "Date", "Amount", "Status"];
  const column = [
    {
      name: "sakshi",
      date: "23/4/23",
      amount: 56,
      status: "pending",
    },
    {
      name: "sakshi",
      date: "23/4/23",
      amount: 56,
      status: "paid",
    },
  ];

  const row1 = ["Name", "Price", "Units Sold"];
  const column1 = [
    {
      name: "sakshi",
      price: 45,
      unitsold: 200,
    },
    {
      name: "sakshi",
      price: 45,
      unitsold: 200,
    },
  ];

  return (
    <>
      <Grid2 container display="flex" spacing={4}>
        <Grid2 size={{ lg: 6 }} width="540px">
          <TableComponent
            row={row}
            column={column}
            header={"Recent Transaction"}
          />
        </Grid2>

        <Grid2 size={{ lg: 6 }} width="540px">
          <TableComponent
            row={row}
            column={column}
            header={"Top Products by Units Sold"}
          />
        </Grid2>
      </Grid2>
    </>
  );
};
