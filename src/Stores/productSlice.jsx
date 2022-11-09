import { createSlice } from "@reduxjs/toolkit";
// import React from "react";
const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    listItems : [],
  },
  reducers: {
    callApi(state, data) {
      state.product = data.payload;
    },
    sort(state, data) {
      if (data.payload === "0") {
        state.product = state.product.
        console.log(state.productRelevance)
      } else if (data.payload === "1") {
        state.product = state.product.sort((a, b) =>
          a.product_name.localeCompare(b.product_name)
        );
      } else if (data.payload === "2") {
        state.product = state.product.sort((a, b) =>
          b.product_name.localeCompare(a.product_name)
        );
      } else if (data.payload === "3") {
        state.product = state.product.sort((a, b) => a.price - b.price);
      } else if (data.payload === "4") {
        state.product = state.product.sort((a, b) => b.price - a.price);
      }
    },
    addProduct(state,data){
      state.listItems.push(data.payload);
    }
  },
});
export const { callApi, sort, addProduct } = productSlice.actions;
export default productSlice.reducer;
