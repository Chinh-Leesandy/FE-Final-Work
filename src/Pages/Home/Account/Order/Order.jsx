import React, { useState, useEffect } from "react";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import "./Order.css";
import axios from "axios";
const Order = () => {
  const accessToken = localStorage.getItem("token");
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    axios
      .get("https://petsla-api.herokuapp.com/get-order", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(orderList);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(5);
  const chosePage = (event) => {
    setCurrentPage(Number(event.target.id));
    window.scrollTo(0, 0);
  };
  const select = (event) => {
    setNewsPerPage(event.target.value);
    window.scrollTo(0, 0);
    setCurrentPage(1);
  };
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentOrder = orderList.slice(indexOfFirstNews, indexOfLastNews);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(orderList.length / newsPerPage); i++) {
    pageNumbers.push(i);
  }
  const next = () => {
    if (currentPage !== Math.ceil(orderList.length / newsPerPage)) {
      setCurrentPage((currentPage) => currentPage + 1);
      window.scrollTo(0, 0);
    }
  };
  const previous = () => {
    if (currentPage !== 1) {
      setCurrentPage((currentPage) => currentPage - 1);
      window.scrollTo(0, 0);
    }
  };
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
                        <span className="text">My Order</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-table">
                    <div class="orders-header order-row">
                      <div class="order-cell order-index">#</div>
                      <div class="order-cell order-id">Order</div>
                      <div class="order-cell order-status">Status</div>
                      <div class="order-cell order-time">Time Placed</div>
                      <div class="order-cell order-price">Total Price</div>
                    </div>
                    <div className="order-list">
                      {currentOrder.map((res) => {
                        return (
                          <React.Fragment>
                            <div className="order-item shadow-sm rounded">
                              <div className="order-row">
                                <div class="order-cell order-index">
                                  {orderList.indexOf(res) + 1}
                                </div>
                                <div class="order-cell order-id">{res.id}</div>
                                <div class="order-cell order-status1">
                                  pendding
                                </div>
                                <div class="order-cell order-time">
                                  {res.created_at}
                                </div>
                                <div class="order-cell order-price">
                                  {res.total_price} đ
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                      <div className="footer_wrap">
                        <div className="pagination-custom">
                          <ul className="page-numbers">
                            <div
                              className="btn-pagination active_wrap"
                              onClick={previous}
                            >
                              <i class="bi bi-chevron-left"></i>
                            </div>
                            {pageNumbers.map((number) => {
                              if (currentPage === number) {
                                return (
                                  <li
                                    key={number}
                                    id={number}
                                    className="active_wrap pagination-wrap"
                                  >
                                    {number}
                                  </li>
                                );
                              } else {
                                return (
                                  <li
                                    className="pagination-wrap"
                                    key={number}
                                    id={number}
                                    onClick={chosePage}
                                  >
                                    {number}
                                  </li>
                                );
                              }
                            })}
                            <div
                              className="btn-pagination active_wrap"
                              onClick={next}
                            >
                              <i class="bi bi-chevron-right"></i>
                            </div>
                          </ul>
                        </div>
                        <div className="news-per-page">
                          <label className="form-title" htmlFor="item/page">
                            Item/Page
                          </label>
                          <select
                            className="select-page"
                            defaultValue="0"
                            onChange={select}
                          >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                          </select>
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

export default Order;
