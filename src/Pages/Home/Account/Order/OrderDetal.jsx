import React from "react";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
const OrderDetal = () => {
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
