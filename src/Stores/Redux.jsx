import {configureStore} from '@reduxjs/toolkit'
import productSlice from './productSlice'
import FilterSlice from './FilterSlice';
import LoginSlice from './LoginSlice';
const store = configureStore ({
    reducer : {
        product : productSlice,
        filter : FilterSlice,
        login : LoginSlice,
    }

});
export default store