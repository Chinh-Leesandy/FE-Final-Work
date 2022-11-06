import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
  },
  reducers: {
    callApi(state, data) {
      state.product = data.payload;
    },
    sortNameAZ(state, data) {
      state.product = state.product.sort((a, b) =>
        a.product_name.localeCompare(b.product_name)
      );
    },
    sortNameZA(state, data) {
        state.product = state.product.sort((a, b) =>
          b.product_name.localeCompare(a.product_name)
        );
      },
    sortLowHight(state, data){
        state.product = state.product.sort((a, b) =>
        a.price.localeCompare(b.price)
      ); 
    },
    sortHightLow(state, data){
        state.product = state.product.sort((a, b) =>
        b.price.localeCompare(a.price)
      ); 
    },
  },
});
export const { callApi, sortNameAZ } = productSlice.actions;
export default productSlice.reducer;
