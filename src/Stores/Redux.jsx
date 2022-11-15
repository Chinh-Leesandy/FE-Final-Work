import {configureStore} from '@reduxjs/toolkit'
import productSlice from './productSlice'
import FilterSlice from './FilterSlice';
const store = configureStore ({
    reducer : {
        product : productSlice,
        filter : FilterSlice,
    }

});
export default store