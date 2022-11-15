import { createSlice } from "@reduxjs/toolkit";
// import React from "react";
const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    listItems: [],
    count: 0,
    totalPrice: 0,
    productItem : {},
  },
  reducers: {
    callApi(state, data) {
      state.product = data.payload;
    },
    setSort(state, actions) {
      state.Sort = actions.payload;
    },
    addProduct(state, data) {
      let dem = 0;
      state.listItems.forEach(element => {
        if (element.value.id === data.payload.id) {
          element.count += 1;
          state.count += 1;
          state.totalPrice += data.payload.price;
          dem = 1;
        }
      });
      if (dem === 0) {
        state.listItems.push(
          {
            value: data.payload,
            count: 1
          }
        );
        state.count += 1;
        state.totalPrice += data.payload.price;
      }
    },
    removeItem(state, id) {
      const idx = state.listItems.findIndex(element => {
        return element.value.id == id.payload

      })
      state.count -= state.listItems[idx].count;
      state.totalPrice = state.totalPrice - state.listItems[idx].count * state.listItems[idx].value.price;
      state.listItems.splice(idx, 1);
    },
    increaseItem(state, id) {
      state.listItems.forEach(element => {
        if (element.value.id == id.payload) {
          element.count += 1;
          state.count += 1;
          state.totalPrice += element.value.price;
        }
      })
      
    },
    decreaseItem(state, id) {
      state.listItems.forEach(element => {
        if (element.value.id == id.payload) {
          element.count -= 1;
          state.count -= 1;
          state.totalPrice += element.value.price;
        }

      })
    },
    productItems(state, data){
        state.productItem = data.payload;
    }
  },
});
export const { callApi, setSort, addProduct, removeItem, increaseItem, decreaseItem, productItems } = productSlice.actions;
export default productSlice.reducer;
