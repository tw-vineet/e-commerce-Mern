import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../services/productServices/productServices";

type productStateType = {
    data : [],
    loading : boolean,
    error :  string | undefined | null
}

const initialState : productStateType =  {data:[],loading:false,error:null} 

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
        builder.addCase(productData.pending, (state)=>{
            state.loading = true
        }).addCase(productData.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
        })
        .addCase(productData.rejected,(state,action)=>{
            state.loading=false
            state.error = action.error.message
        })
  }
});

export default productSlice.reducer;

