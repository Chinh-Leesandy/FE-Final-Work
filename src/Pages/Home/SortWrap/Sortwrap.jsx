import React from 'react'
import {useDispatch} from 'react-redux'
import { sort } from '../../../Stores/productSlice';
export default function Sortwrap (){
    const dispatch = useDispatch();
    const handleSelect = (e) => {
        dispatch(sort(e.target.value))
    }
    return (
        <div className="header_sortWrap">
            <div className="header_wrap">
                <div className="sort_wrap">
                    <div className="sort_select">
                        <label className='form-label' htmlFor="sort-by">Sort by: </label>
                        <select className='form-select' onChange={handleSelect} id="sort-by">
                            <option value="0">Relevance</option>
                            <option value="1">Name: A-Z</option>
                            <option value="2">Name: Z-A</option>
                            <option value="3">Price: Low to High</option>
                            <option value="4">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}