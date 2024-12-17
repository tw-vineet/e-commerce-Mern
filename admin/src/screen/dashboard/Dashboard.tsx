import { Box, Button, Grid2, Typography } from "@mui/material";
import {
  CardBox,
  IconBox,
  ChartBox,
  BaarChartBox,
  ManageBox,
  IconStyle,
  LineChartBox,
  BaarChartHeader,
  BarChartSection,
  TableBox,
} from "./style";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import existingUserImage from "../../asset/images/dashboard/existingUser.png";
import newUserImage from "../../asset/images/dashboard/newUser.png";
import uniqueVisitsImage from "../../asset/images/dashboard/uniqueVisits.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  BarController,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type cardProp = {
  number: string;
  title: string;
  percentage: string;
  icon: React.ReactNode;
  image: {
    isImage: boolean;
    source: string | React.ReactNode;
  };
};

export const Dashboard = () => {
  const card = [
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: <IconStyle />,
      image: {
        isImage: false,
        source: <AttachMoneyIcon />,
      },
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: <IconStyle />,
      image: {
        isImage: false,
        source: <ShoppingCartOutlinedIcon />,
      },
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: <IconStyle />,
      image: {
        isImage: true,
        source: "../../asset/images/dashboard/uniqueVisits.png",
      },
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: <IconStyle />,
      image: {
        isImage: true,
        source: "newUserImage",
      },
    },
    {
      number: "3456",
      title: "hello",
      percentage: "20%",
      icon: <IconStyle />,
      image: {
        isImage: true,
        source: "existingUserImage",
      },
    },
  ];

  return (
    <Box
      padding="20px"
      gap={2}
      display="flex"
      flexDirection="column"
      width="95%"
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
          console.log(item.image);
          return (
            <Card
              number={item.number}
              title={item.title}
              percentage={item.percentage}
              icon={item.icon}
              image={item.image}
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
  );
};

const Card: React.FC<cardProp> = ({
  number,
  title,
  percentage,
  icon,
  image,
}) => {
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
        {image.isImage === true ? (
          <img src={newUserImage} />
        ) : (
          <IconBox>{image.source}</IconBox>
        )}
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
    Legend,
    LinearScale,
    BarElement,
    BarController
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
  const barChartLabels = ["12", "13", "14", "15", "16", "17", "18"];
  const barChartData = {
    labels: barChartLabels,
    datasets: [
      {
        label: "My First Dataset",
        data: [20, 30, 45, 32, 56, 51, 25, 20, 59, 69],
        backgroundColor: "#1FD286",
        borderRadius: 50,
        borderSkipped: false,
      },
    ],
  };
  const baarChatOptions = {
    barThickness: 10,

    scales: {
      x: {
        display: true,
      },
      y: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <Grid2 container display="flex" spacing={1}>
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
            <LineChartBox>
              <Line data={data} />
            </LineChartBox>
          </ChartBox>
        </Grid2>

        <Grid2 size={{ lg: 3 }}>
          <BaarChartBox>
            <BaarChartHeader>
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
            </BaarChartHeader>
            <BarChartSection>
              <Bar data={barChartData} options={baarChatOptions} />
            </BarChartSection>
          </BaarChartBox>
        </Grid2>
      </Grid2>
    </>
  );
};

const TableSection = () => {
  const column: GridColDef[] = [
    { field: "name", headerName: "Name", width: 130 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "amount", headerName: "Amount", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (param) => <Button>{param.value}</Button>,
    },
  ];
  const row = [
    {
      id: 1,
      name: "sakshi",
      date: "23/4/23",
      amount: 56,
      status: "pending",
    },
    {
      id: 2,
      name: "sakshi",
      date: "23/4/23",
      amount: 56,
      status: "paid",
    },
  ];

  const column1: GridColDef[] = [
    {
      field: "image",
      headerName: "Name",
      width: 70,
      renderCell: (params) => (
        <img src={params.value} style={{ height: "36px", width: "36px" }} />
      ),
    },
    { field: "name", headerName: "", width: 200 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "unitsold", headerName: "Unit Sold", width: 100 },
  ];
  const row1 = [
    {
      id: 1,
      name: "sakshi",
      price: 45,
      unitsold: 200,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      name: "sakshi",
      price: 45,
      unitsold: 200,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ];

  return (
    <>
      <Grid2 container display="flex" spacing={4}>
        <Grid2 size={{ lg: 6 }} width="540px">
          <TableBox>
            <Typography fontWeight="700" fontSize="16px">
              Recent Transaction
            </Typography>
            <DataGrid
              rows={row}
              columns={column}
              pageSizeOptions={[5, 10]}
              sx={{ border: 0 }}
            />
          </TableBox>
        </Grid2>

        <Grid2 size={{ lg: 6 }} width="540px">
          <TableBox>
            <Typography fontWeight="700" fontSize="16px">
              Top Products by Units Sold
            </Typography>
            <DataGrid
              rows={row1}
              columns={column1}
              pageSizeOptions={[5, 10]}
              sx={{ border: 0 }}
            />
          </TableBox>
        </Grid2>
      </Grid2>
    </>
  );
};
