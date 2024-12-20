import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../services/productServices/productServices";

type productStateType = {
    data : [],
    loading : boolean,
    error : null | string | unknown
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
            console.log("action",action.payload)
        })
        .addCase(productData.rejected,(state,action)=>{
            state.loading=false
            state.error = action.error.message
        })
  }
});

export default productSlice.reducer;

