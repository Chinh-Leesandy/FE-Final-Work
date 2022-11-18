<<<<<<< HEAD
import {createSlice} from '@reduxjs/toolkit'
const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        login:{
            currenUser:null
        }
    },
    reducers:{
        loginSuccess: (state, action) => {
            state.login.currenUser = action.payload
        }
    }
})
export const {
    loginSuccess,
} = LoginSlice.actions
export default LoginSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";
const LoginSlice = createSlice({
  name: "login",
  initialState: {
    login: {
      currenUser: null,
    },
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.login.currenUser = action.payload;
      localStorage.setItem('token', state.login.currenUser.token)
    },
  },
});
export const { loginSuccess } = LoginSlice.actions;
export default LoginSlice.reducer;
>>>>>>> 774c3c8dfaca2ebb003ebff533072edff01b087e
