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
    Products : [], //luu tru du lieu product goc
    Sort : "0"
  },
  reducers: {
    callApi(state, actions) {
      state.product = actions.payload;
      state.Products = actions.payload;
    },
    setSort(state, actions) {
      state.Sort = actions.payload;
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
export const { callApi, setSort, addProduct, removeItem, increaseItem, decreaseItem, addIdProductItems } = productSlice.actions;
export default productSlice.reducer;
