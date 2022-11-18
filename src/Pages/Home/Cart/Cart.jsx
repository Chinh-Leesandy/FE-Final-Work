import React, { useState, useEffect, useRef } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import "./Cart.css"
import { useDispatch, useSelector } from "react-redux";
import { increaseItem, decreaseItem, removeItem } from "../../../Stores/productSlice";
// import { set } from 'immer/dist/internal';
function getItem(target) {
    let item = target
    while (!item.classList.contains("cart-item")) {
        item = item.parentElement
    }
    return item
}
export default function Cart() {
    const listItems = useSelector(state => state.product.listItems);
    const dispatch = useDispatch();
    function RemoveItem(e) {
        let item = getItem(e.target)
        dispatch(removeItem(item.getAttribute("id")));
        console.log(item.getAttribute("id"))
    }
    function IncreaseItem(e) {
        let item = getItem(e.target)
        dispatch(increaseItem(item.getAttribute("id")));
        console.log(item.getAttribute("id"))
    };
    function DecreaseItem(e) {
        let item = getItem(e.target)
        dispatch(decreaseItem(item.getAttribute("id")));
        console.log(item.getAttribute("id"))
    };
    return (
        <React.Fragment>
            <Header></Header>
            <div className="cart__container">
                <div className="cart_main">
                    <div className="cart_main-items">
                        <div className="cart_main-items--header">Cart</div>
                        {
                            (
                                listItems.length != 0 &&
                                listItems.map((items) => {
                                    return (
                                        <div className="cart-item" key={items.value.id} id={items.value.id}>
                                            <div className="cart-quantity">
                                                <button className="quantity-btn quantity-btn--active" onClick={IncreaseItem} >
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                                <span>{items.count}</span>
                                                {
                                                    (
                                                        items.count === 1 &&
                                                        <button className="quantity-btn">
                                                            <i className="fa-solid fa-minus"></i>
                                                        </button>
                                                    )
                                                    ||
                                                    (
                                                        <button className="quantity-btn quantity-btn--active" onClick={DecreaseItem}>
                                                            <i className="fa-solid fa-minus"></i>
                                                        </button>
                                                    )
                                                }
                                            </div>
                                            <div className="cart-info">
                                                <div className="cart-img" style={{ backgroundImage: `url(https://petsla-api.herokuapp.com${items.value.images})` }}></div>
                                                <div className="cart-description">
                                                    <div className="cart-name"> {items.value.product_name}</div>
                                                    <div className="cart-price"> {items.value.price.toLocaleString('vi')}đ x {items.count}</div>
                                                    <div className="cart-total-price">{(items.count * items.value.price).toLocaleString('vi')}đ</div>
                                                </div>
                                            </div>
                                            <div className="cart-button-close" onClick={RemoveItem} >
                                                <i className="fa-solid fa-xmark btnclose"></i>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            )
                            ||
                            (
                                <div className="no-products">
                                    <img className="no-products-img" src="https://www.leoasher.dev/static/media/sadCat.2335333f.png" />
                                    <h3 className="no-products-title"> There's no item in cart! </h3>
                                </div>
                            )
                        }
                    </div>
                    <div className="cart_main-checkout"></div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}