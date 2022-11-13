import { createSlice } from "@reduxjs/toolkit";
// import React from "react";
const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    listItems: [],
    count: 0,
    totalPrice: 0,
    idProductItem : {},
    Products : [],
  },
  reducers: {
    callApi(state, actions) {
      state.product = actions.payload;
      state.Products = actions.payload;
    },
    sort(state, actions) {
      if (actions.payload === "0") {
        state.product = state.Products
        console.log(state.productRelevance)
      } else if (actions.payload === "1") {
        state.product = state.product.sort((a, b) =>
          a.product_name.localeCompare(b.product_name)
        );
      } else if (actions.payload === "2") {
        state.product = state.product.sort((a, b) =>
          b.product_name.localeCompare(a.product_name)
        );
      } else if (actions.payload === "3") {
        state.product = state.product.sort((a, b) => a.price - b.price);
      } else if (actions.payload === "4") {
        state.product = state.product.sort((a, b) => b.price - a.price);
      }
    },

    addProduct(state, actions) {
      let dem = 0;
      state.listItems.forEach(element => {
        if (element.value.id === actions.payload.id) {
          element.count += 1;
          state.count += 1;
          state.totalPrice += actions.payload.price;
          dem = 1;
        }
      });
      if (dem === 0) {
        state.listItems.push(
          {
            value: actions.payload,
            count: 1
          }
        );
        state.count += 1;
        state.totalPrice += actions.payload.price;
      }
    },
    removeItem(state, actions) {
      const idx = state.listItems.findIndex(element => {
        return element.value.id == actions.payload

      })
      state.count -= state.listItems[idx].count;
      state.totalPrice = state.totalPrice - state.listItems[idx].count * state.listItems[idx].value.price;
      state.listItems.splice(idx, 1);
    },
    increaseItem(state, actions) {
      state.listItems.forEach(element => {
        if (element.value.id == actions.payload) {
          element.count += 1;
          state.count += 1;
          state.totalPrice += element.value.price;
        }
      })
      
    },
    decreaseItem(state, actions) {
      state.listItems.forEach(element => {
        if (element.value.id == actions.payload) {
          element.count -= 1;
          state.count -= 1;
          state.totalPrice += element.value.price;
        }

      })
    },
    addIdProductItems(state, actions){
        state.idProductItem = actions.payload;
        // localStorage.setItem('items',JSON.stringify( data.payload));

    }
  },
});
export const { callApi, sort, addProduct, removeItem, increaseItem, decreaseItem, addIdProductItems } = productSlice.actions;
export default productSlice.reducer;
