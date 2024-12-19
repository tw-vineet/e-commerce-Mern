import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  TableBox,
  OrderBox,
  PaidButton,
  ReadyButton,
  ShippedButton,
} from "./style";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const Orders = () => {
  return (
    <>
      <OrderBox>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="700" fontSize="24px">
            Orders
          </Typography>
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              style={{
                border: "1px solid #D7DBEC",
                backgroundColor: "#FFFFFF",
              }}
            >
              Export
            </Button>
            <Button variant="contained">+ Add Order</Button>
          </Box>
        </Box>
        <TableSection />
      </OrderBox>
    </>
  );
};

const TableSection = () => {
  const column: GridColDef[] = [
    { field: "order", headerName: "Order", width: 200 },
    { field: "date", headerName: "Date", width: 180 },
    { field: "customer", headerName: "Customer", width: 180 },
    {
      field: "paymentstatus",
      headerName: "Payment Status",
      width: 180,
      renderCell: (param) =>
        param.value === "paid" ? (
          <PaidButton>{param.value}</PaidButton>
        ) : (
          <Button></Button>
        ),
    },
    {
      field: "orderstatus",
      headerName: "Order Status",
      width: 180,
      renderCell: (param) =>
        param.value === "Ready" ? (
          <ReadyButton>{param.value}</ReadyButton>
        ) : (
          <ShippedButton>{param.value}</ShippedButton>
        ),
    },
    { field: "total", headerName: "Total", width: 180 },
  ];
  const row = [
    {
      id: 1,
      order: "#45221",
      date: "May 5, 4:20 PM",
      customer: "Sakshi Prajapat",
      paymentstatus: "paid",
      orderstatus: "Ready",
      total: "$56",
    },
    {
      id: 2,
      order: "#45221",
      date: "May 5, 4:20 PM",
      customer: "Sakshi Prajapat",
      paymentstatus: "paid",
      orderstatus: "Shipped",
      total: "$56",
    },
  ];

  return (
    <>
      <TableBox>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <TextField
              select
              defaultValue="EUR"
              size="small"
              slotProps={{}}
            ></TextField>
          </Box>
          <Box display="flex" gap={2}>
            <Box
              height="40px"
              width="40px"
              border="1px solid #D7DBEC"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#1E5EFF"
              bgcolor="white"
              borderRadius="4px"
            >
              <BorderColorIcon />
            </Box>
            <Box
              height="40px"
              width="40px"
              border="1px solid #D7DBEC"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#1E5EFF"
              bgcolor="white"
              borderRadius="4px"
            >
              <DeleteIcon />
            </Box>
          </Box>
        </Box>
        <DataGrid
          rows={row}
          columns={column}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
          checkboxSelection
        />
      </TableBox>
    </>
  );
};
