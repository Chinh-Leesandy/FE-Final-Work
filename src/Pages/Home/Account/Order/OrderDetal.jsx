import React, { useState, useEffect } from "react";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const OrderDetal = () => {
  const listItems =[];
  const accessToken = localStorage.getItem("token");
  const idOder = localStorage.getItem("idOrderDetail");
  const [items,setIems]=useState([]);
  console.log(idOder)
   useEffect(() => {
      axios
        .get(`https://petsla-api.herokuapp.com/order/`,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
        )
        .then((res) => {
          setIems(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
    console.log(items)
  return (
    <React.Fragment>
      <Header></Header>
      <div className="account_page">
        <div className="account_page-container container">
          <div className="row">
            <div className="d-none d-lg-block col-3">
              <div class="shadow-sm rounded dashboard-col">
                <div class="dashboard">
                  <h5 class="dashboard-header">Dashboard</h5>
                  <ul class="dashboard-nav-list" style={{ listStyle: "none" }}>
                    <li class="dashboard-nav-item">
                      <a className="no_action" href="/Account">
                        <i class="bi bi-person"></i>
                        <span class="title">Profile</span>
                      </a>
                    </li>
                    <li class="dashboard-nav-item">
                      <a className="action" href="/Account/Order">
                        <i class="bi bi-bag"></i>
                        <span class="title">Orders</span>
                      </a>
                    </li>
                    <li class="dashboard-nav-item">
                      <a className="no_action" href="/account/wish_list">
                        <i class="bi bi-heart"></i>
                        <span class="title">Wishlist</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-12">
              <div className="account-page-outlet">
                <div className="order-page">
                  <div className="account-page-header">
                    <div className="title-wrap">
                      <div className="title_account">
                        <i
                          className="bi bi-bag-fill"
                          style={{ color: "rgb(230, 150, 70" }}
                        ></i>
                        <span className="text">Order Detail</span>
                      </div>
                      <div className="show-dashboard-btn">
                        <i className="bi bi-list"></i>
                      </div>
                    </div>
                  </div>
                  <div class="detail-order-body mt-3">
                    <div className="cart_main-items">
                      <div className="cart_main-items--header">Cart</div>
                      {(listItems.length != 0 &&
                        listItems.map((items) => {
                          return (
                            <div
                              className="cart-item"
                              key={items.value.id}
                              id={items.value.id}
                            >
                              <div className="cart-info">
                                <div
                                  className="cart-img"
                                  style={{
                                    backgroundImage: `url(https://petsla-api.herokuapp.com${items.value.images})`,
                                  }}
                                ></div>
                                <div className="cart-description">
                                  <div className="cart-name">
                                    {" "}
                                    {items.value.product_name}
                                  </div>
                                  <div className="cart-price">
                                    {" "}
                                    {items.value.price.toLocaleString("vi")}đ x{" "}
                                    {items.count}
                                  </div>
                                  <div className="cart-total-price">
                                    {(items.count * items.value.price).toLocaleString(
                                      "vi"
                                    )}
                                    đ
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })) || (
                          <div className="no-products">
                            <img
                              className="no-products-img"
                              src="https://www.leoasher.dev/static/media/sadCat.2335333f.png"
                            />
                            <h3 className="no-products-title">
                              {" "}
                              There's no item in cart!{" "}
                            </h3>
                          </div>
                        )}
                    </div>
                  </div>
                  <div class="detail-order-info ">
                    <div class="row">
                      <div class="col-md-6 col-12">
                        <div class="info-col shadow-sm rounded" >
                          <div class="shipping-info">
                            <h5 class="info-header">Shipping Information</h5>
                            <div class="shipping-info-body">
                              <li class="info-item">
                                <span class="title">Address: </span>
                                <span class="value">3424</span>
                              </li>
                              <li class="info-item">
                                <span class="title">Phone Number: </span>
                                <span class="value">3423423</span>
                              </li>
                              <li class="info-item">
                                <span class="title">Note: </span>
                                <span class="value">234234</span>
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-12">
                        <div class="info-col shadow-sm rounded" >
                          <div class="info-total-summary">
                            <h5 class="info-header">Total Summary: </h5>
                            <div class="header-wrap">
                              <span class="total-title ">Quantity:</span>
                              <span class="total-value">4 Items</span>
                            </div>
                            <div class="header-wrap">
                              <span class="total-title">Total price:</span>
                              <span class="total-value">4đ</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default OrderDetal;
