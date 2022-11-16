import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import "./Cart.css"
import { useDispatch, useSelector } from "react-redux";
// import { set } from 'immer/dist/internal';
export default function Cart() {
    const listItems = useSelector(state => state.product.listItems);
    const [counts, setCounts] = useState(0)
    const handleClickNext = () => {
        if (counts == listItems.length - 1) setCounts(0);
        else setCounts(counts => counts + 1)
    }
    const handleClickPrevious = () => {
        if (counts == 0) setCounts(counts => listItems.length-1);
        else setCounts(counts => counts - 1)
    }
    return (
        <React.Fragment>
            <Header></Header>
            <div className="cart_main">
                <div className="cart_items" >
                    {
                        (
                            listItems.length !== 0 &&
                            <div className="cart-item" >
                                    <a href="#" class="previous round" onClick={handleClickPrevious}>&#8249;</a>
                                    <a href="#" class="next round" onClick={handleClickNext}>&#8250;</a>
                                <div className="cart_img">
                                    <img
                                        className="d-block w-100"
                                        src={`https://petsla-api.herokuapp.com${listItems[counts].value.images}`}
                                        alt="Image One"
                                    />
                                    {/* <div className="cart-total-price">{(items.count * items.value.price).toLocaleString('vi')}đ</div> */}
                                </div>
                                <div className="cart_title">
                                    <h3>{listItems[counts].value.product_name}</h3>
                                    <p>{listItems[counts].value.description}</p>
                                    <div className="cart-price"> {listItems[counts].value.price.toLocaleString('vi')}đ x {listItems[counts].count}</div>
                                    <div className="cart-total-price">{(listItems[counts].count * listItems[counts].value.price).toLocaleString('vi')}đ</div>
                                    <div className="cart-quantity">
                                        <button className="quantity-btn quantity-btn--active"  >
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                        <span className="cart-quantity_cout"  >{listItems[counts].count}</span>
                                        {
                                            (
                                                listItems[counts].count === 1 &&
                                                <button className="quantity-btn">
                                                    <i className="fa-solid fa-minus"></i>
                                                </button>
                                            )
                                            ||
                                            (
                                                <button className="quantity-btn quantity-btn--active" >
                                                    <i className="fa-solid fa-minus"></i>
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="cart_close" >
                                    <i className="fa-solid fa-xmark btnclose"></i>
                                </div>
                            </div>
                        )
                        ||
                        (
                            <div className="no-cart">
                                <img className="no-cart-img" src="https://www.leoasher.dev/static/media/sadCat.2335333f.png" />
                                <h3 className="no-cart-title"> There's no item in cart! </h3>
                            </div>
                        )
                    }
                </div>
                <div className="cart_check">
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}