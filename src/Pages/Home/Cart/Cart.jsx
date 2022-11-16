import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import "./Cart.css"
import { useDispatch, useSelector } from "react-redux";
export default function Cart() {
    const listItems = useSelector(state => state.product.listItems);
    return (
        <React.Fragment>
            <Header></Header>
            <div className="cart_main">
                <div className="cart_items">
                    {
                        (
                            listItems.length > 0 &&
                            listItems.map((items) => {
                                return (
                                    <div className="cart-item">
                                        <div className="cart-quantity">
                                            <button className="quantity-btn quantity-btn--active"  >
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                            <span >{items.count}</span>
                                            {
                                                (
                                                    items.count === 1 &&
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
                                        <div className="cart_img">
                                            <img
                                                className="d-block w-100"
                                                src={`https://petsla-api.herokuapp.com${items.value.images}`}
                                                alt="Image One"
                                            />
                                            <div className="cart-total-price">{(items.count * items.value.price).toLocaleString('vi')}đ</div>
                                        </div>
                                        <div className="cart_title">
                                            <h3>{items.value.product_name}</h3>
                                            <p>{items.value.description}</p>
                                        </div>
                                        <div className="cart_close" >
                                            <i className="fa-solid fa-xmark btnclose"></i>
                                        </div>
                                    </div>
                                )
                            })
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