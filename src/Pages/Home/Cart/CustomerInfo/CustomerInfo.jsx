import React, { useState, useEffect, useRef } from 'react';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import "./CustomerInfo.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
export default function CustomerInfo() {
    const totalPrice = useSelector(state => state.product.totalPrice);
    const listItems = useSelector(state => state.product.listItems);
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
                        <div className="col-lg-8 col-md-7 col-12">

                            <div class="card" >
                                <div class="card-header">Thông tin giao hàng</div>
                                <div class="card-body">
                                    <div class="my-3">
                                        <label class="form-label"> Full name </label>
                                        <input disabled="" placeholder="Full name" name="name" type="text" class="form-control" />
                                        <small class="text-danger form-text"></small>
                                    </div>
                                    <div class="my-3">
                                        <label class="form-label"> Phone number </label>
                                        <input placeholder="Phone number" name="phoneNumber" type="text" class="form-control" />
                                        <small class="text-danger form-text"></small>
                                    </div>
                                    <div class="my-3">
                                        <label class="form-label"> Address </label>
                                        <input placeholder="Address" name="address" type="text" class="form-control" />
                                        <small class="text-danger form-text"></small>
                                    </div>
                                    <label class="form-label"> Note </label>
                                    <div class="form-floating">
                                        <textarea name="note" placeholder="Brief Note" type="text" class="cart-page-note form-control"></textarea>
                                        <label>Note</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5 col-12">
                            <div class="cart-page-content ">
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
                                <div class="shop-note-wrap">
                                    <span class="note-title">Chú ý: </span>
                                    <span class="note-content">Hiện tại chúng tôi chỉ hỗ trợ thanh toán trực tiếp khi nhận hàng.</span>
                                </div>
                                <div class="cart-page-btn-wrap">
                                    <div class="row">
                                        <div class="col">
                                            <Link to="/Cart">
                                            <button type="button" class=" btn-cus ">Back</button>
                                            </Link>
                                        </div>
                                        <div class="col">
                                            <button style={{ backgroundColor: "#e69646", color: "#fff" }} type="submit" class=" btn-cus ">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </React.Fragment >
    );
}