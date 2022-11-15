import {createSlice} from '@reduxjs/toolkit'
const FilterSlice = createSlice({
	name: 'SearchName',
    initialState: {
        searchText:"",
    },
    reducers: {
        setSearchText(state, action) {
            state.searchText = action.payload;
        },
    },
})
export const {setSearchText} = FilterSlice.actions;
export default FilterSlice.reducer