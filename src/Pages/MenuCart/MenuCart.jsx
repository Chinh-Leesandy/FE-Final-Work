
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MenuCart.css"
import { increaseItem, decreaseItem, removeItem } from "../../Stores/productSlice";
function getItem(target) {
    let item = target
    while (!item.classList.contains("menu-cart-item")) {
        item = item.parentElement
    }
    return item
}
export default function MenuCart({ styleMenuCart, setStyleMenuCart }) {
    const listItems = useSelector(state => state.product.listItems);
    const count = useSelector(state => state.product.count);
    const totalPrice = useSelector(state => state.product.totalPrice);
    const dispatch = useDispatch();
    function CloseMenuCart() {
        setStyleMenuCart(preStyleMenuCart => {
            const styleMenuCart = { ...preStyleMenuCart, right: "-400px" }
            return styleMenuCart
        })
    }
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
    console.log(listItems)
    return (
        <React.Fragment>
            <div className="background-wrap-menu-cart" style={{
                width: window.innerWidth, height: window.innerWidth,
                display: `${(styleMenuCart.right == "-400px") ? ("none") : ("block")}`
            }} onClick={CloseMenuCart}>
            </div>
            <div className="menu-cart-wrap" style={{ right: styleMenuCart.right, height: "100%" }}>
                <div className="menu-cart">
                    <div className="menu-cart__header">
                        <div className="menu-cart__header-title">
                            Cart: {count} Items
                        </div>
                        <div className="menu-cart__header-close" onClick={CloseMenuCart}>
                            <i className="fa-solid fa-xmark btnclose"></i>
                        </div>
                    </div>
                    <div className="menu-cart__body">
                        {
                            (
                                listItems.length > 0 &&
                                listItems.map((items) => {
                                    return (
                                        <div className="menu-cart-item" key={items.value.id} id={items.value.id}>
                                            <div className="product-quantity">
                                                <button className="quantity-btn quantity-btn--active" onClick={IncreaseItem} >
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                                <span>{items.count}</span>
                                                {
                                                    (
                                                        items.count == 1 &&
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
                                            <div className="product-info">
                                                <div className="product-img" style={{ backgroundImage: `url(https://petsla-api.herokuapp.com${items.value.images})` }}></div>
                                                <div className="product-description">
                                                    <div className="product-name"> {items.value.product_name}</div>
                                                    <div className="product-price"> {items.value.price.toLocaleString('vi')}đ x {items.count}</div>
                                                    <div className="product-total-price">{(items.count * items.value.price).toLocaleString('vi')}đ</div>
                                                </div>
                                            </div>
                                            <div className="product-button-close" onClick={RemoveItem} >
                                                <i className="fa-solid fa-xmark btnclose"></i>
                                            </div>
                                        </div>
                                    )
                                })
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
                    <div className="menu-cart__footer">
                        <button type="button" className="menu-cart-btn btn-primary">Checkout ({totalPrice.toLocaleString('vi')})đ</button>
                        <button type="button" className="menu-cart-btn btn-view-cart">View Cart</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
