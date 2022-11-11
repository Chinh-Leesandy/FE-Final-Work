import { createSlice } from "@reduxjs/toolkit";
// import React from "react";
const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    listItems: [],
    count: 0,
    totalPrice: 0,
  },
  reducers: {
    callApi(state, data) {
      state.product = data.payload;
    },
    sort(state, data) {
      if (data.payload === "0") {
        state.product = state.product
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
    addProduct(state, data) {
      state.listItems.push(data.payload);
    }
  },
});
export const { callApi, sort, addProduct, removeItem, increaseItem, decreaseItem } = productSlice.actions;
export default productSlice.reducer;
