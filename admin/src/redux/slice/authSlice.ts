import { createSlice } from "@reduxjs/toolkit";

type authType = {
    login :{
        email : string,
        password : string
    }
}

const initialState = {
    login :{
        email : "",
        password : ""
    }
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

    }
})