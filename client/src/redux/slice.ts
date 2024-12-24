import { createSlice } from "@reduxjs/toolkit"

import { fetchProducts } from "../services/api"
type productStateType = {
  data: []
  loading: boolean
  error: null | string | unknown
}

const initialState: productStateType = { data: [], loading: false, error: null }

const Slice = createSlice({
  name: "productData",
  initialState,
  reducers: {},

  extraReducers: (bulider) => {
    bulider.addCase(fetchProducts.pending, (state, actions) => {
      state.loading = true
    })
    bulider.addCase(fetchProducts.fulfilled, (state, actions) => {
      state.loading = false
      state.data = actions.payload
    })
    bulider.addCase(fetchProducts.rejected, (state, actions) => {
      console.log("Error", actions.payload)
      state.loading = true
    })
  },
})

export const {} = Slice.actions
export default Slice.reducer
