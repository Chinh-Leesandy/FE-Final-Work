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
