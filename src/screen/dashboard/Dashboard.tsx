import { Box, Typography } from "@mui/material";
import { CardBox, IconBox, ChartBox } from "./style";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import React from "react";
import Table from "../../components/table/Table";

type cardProp = {
  number: string;
  title: string;
  percentage: string;
  icon: React.ReactNode;
};

type tableProp = {
  name : string,
  price : number,
  unitsold : number
}

export const Dashboard = () => {
  const card = [
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: (
        <KeyboardArrowDownIcon
          sx={{
            height: "12px",
            width: "12px",
          }}
        />
      ),
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: (
        <KeyboardArrowDownIcon
          sx={{
            height: "12px",
            width: "12px",
          }}
        />
      ),
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: (
        <KeyboardArrowDownIcon
          sx={{
            height: "12px",
            width: "12px",
          }}
        />
      ),
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: (
        <KeyboardArrowDownIcon
          sx={{
            height: "12px",
            width: "12px",
          }}
        />
      ),
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: (
        <KeyboardArrowDownIcon
          sx={{
            height: "12px",
            width: "12px",
          }}
        />
      ),
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
          <Box
            width="129px"
            height="40px"
            color="#1E5EFF"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            sx={{ backgroundColor: "white", border: "1px solid #D7DBEC" }}
          >
            <SettingsOutlinedIcon />
            <Typography>Manage</Typography>
          </Box>
        </Box>
        <Box display="flex" gap={4}>
          {card.map((item) => {
            return (
              <Card
                number={item.number}
                title={item.title}
                percentage={item.percentage}
                icon={item.icon}
              />
            );
          })}
        </Box>
        <Box>
        <ChartSection />
        </Box>
        <Box>
        <TableSection/>
      </Box>
      </Box>
    </>
  );
};

const Card: React.FC<cardProp> = ({ number, title, percentage, icon }) => {
  return (
    <>
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
          <IconBox>
            <ShoppingCartOutlinedIcon
              sx={{
                height: "12px",
                width: "12px",
              }}
            />
          </IconBox>
        </Box>
      </CardBox>
    </>
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
  return (
    <>
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
      
    </>
  );
};

const TableSection = () =>{
 
  const row = ["Name" , "Date","Amount" , "Status"]
  const column = [{
    name :"sakshi",
    date : "23/4/23",
    amount : 56,
    status : "pending"
  },{
    name :"sakshi",
    date : "23/4/23",
    amount : 56,
    status : "paid"
  }]

  const row1 = ["Name" , "Price","Units Sold"]
  const column1 = [{
    name :"sakshi",
    price : 45,
    unitsold : 200
  },{
    name :"sakshi",
    price : 45,
    unitsold : 200
  }]
  

  return(
    <>
    <Box>
      <Table row={row} column={column}/>
   
    </Box>
    </>
  )
}