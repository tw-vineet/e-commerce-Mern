// productSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk("product", async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  return response.json()
})
