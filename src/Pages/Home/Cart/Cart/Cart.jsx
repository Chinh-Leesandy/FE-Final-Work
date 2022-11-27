import React, { useState, useEffect, useRef } from 'react';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import "./Cart.css"
import { useDispatch, useSelector } from "react-redux";
import { increaseItem, decreaseItem, removeItem } from "../../../../Stores/productSlice";
import { Link } from 'react-router-dom';
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
    const totalPrice = useSelector(state => state.product.totalPrice);
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
                <div className="container">
                    <div class="row">
                        <nav aria-label="breadcrumb" class="checkout-steps">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item checkout-step">
                                    <Link to="/Cart">Cart</Link>
                                </li>
                                <li class="breadcrumb-item checkout-step active" aria-current="page">
                                <Link to="/CustomerInfo">Customer Info</Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div class="col-lg-8 col-md-7 col-12">
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
                        </div>
                        <div class="col-lg-4 col-md-5 col-12">
                            <div class="cart-page-content " >
                                <div class="cart-page-content--header">
                                    <div class="header-wrap">
                                        <span class="total-title">Quantity:</span>
                                        <span class="total-value cart-total-price">{listItems.length} Items</span>
                                    </div>
                                    <div class="header-wrap">
                                        <span class="total-title">Total price:</span>
                                        <span class="total-value cart-total-price">{totalPrice.toLocaleString('vi')}đ</span>
                                    </div>
                                </div>
                                <div class="body">
                                    <div class="voucher-wrap">
                                        <form class="">
                                            <div>
                                                <input placeholder="Voucher" type="text" id="cart-page-voucher" class="form-control" />
                                            </div>
                                            <button type="button" class="cart-page-btn voucher-btn">Apply voucher</button>
                                        </form>
                                    </div>
                                </div>
                                <button type="button" class="cart-page-btn checkout-btn">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}