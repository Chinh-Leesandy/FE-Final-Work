import {createSlice} from '@reduxjs/toolkit'
const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        login:{
            currenUser:null,
            IsLogin:"false"
        }
    },
    reducers:{
        loginSuccess: (state, action) => {
            state.login.currenUser = action.payload
            localStorage.setItem('token', state.login.currenUser.token)
            state.login.IsLogin = true
            localStorage.setItem('islogin',"true")
        }
    }
})
export const {
    loginSuccess,
} = LoginSlice.actions
export default LoginSlice.reducer;