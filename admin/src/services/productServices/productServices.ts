import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productData = createAsyncThunk("productData", async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  console.log("Response",response.data)
  return response.data;
});
