import React from "react";
import {
  EditDeleteBox,
  ExportButton,
  ProductBox,
  ProductTable,
  ProductTableBox,
} from "./style";
import { Box, Button, TextField, Typography } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridColDef } from "@mui/x-data-grid";
export const Products = () => {
  return (
    <>
      <ProductBox>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="700" fontSize="24px">
            Products
          </Typography>
          <Box display="flex" gap={2}>
            <ExportButton>Export</ExportButton>
            <Button variant="contained">+ Add Order</Button>
          </Box>
        </Box>
        <ProductTableSection />
      </ProductBox>
    </>
  );
};

const ProductTableSection = () => {
  const column: GridColDef[] = [
    {
      field: "image",
      headerName: "",
      width: 50,
      renderCell: (param) => (
        <img src={param.value} style={{ height: "36px", width: "36px" }} />
      ),
    },
    { field: "product", headerName: "Product", width: 300 },
    { field: "inventory", headerName: "Inventory", width: 180 },
    { field: "color", headerName: "Color", width: 180 },
    {
      field: "price",
      headerName: "Price",
      width: 180,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 180,
    },
  ];
  const row = [
    {
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      product: "Men Grey Hoodie",
      inventory: "56 in stock",
      color: "Black",
      price: "$67",
      rating: "5.0(45 votes)",
    },
    {
      id: 2,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      product: "Women Hoodie",
      inventory: "57 in stock",
      color: "Black",
      price: "$67",
      rating: "5.0(45 votes)",
    },
  ];
  return (
    <>
      <ProductTableBox>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <TextField select defaultValue="EUR" size="small"></TextField>
          </Box>
          <Box display="flex" gap={2}>
            <EditDeleteBox>
              <BorderColorIcon />
            </EditDeleteBox>
            <EditDeleteBox>
              <DeleteIcon />
            </EditDeleteBox>
          </Box>
        </Box>
        <ProductTable
          rows={row}
          columns={column}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </ProductTableBox>
    </>
  );
};
