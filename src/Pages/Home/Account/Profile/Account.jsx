import React, { useEffect, useState } from "react";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import "./Account.css";
import axios from "axios";
const Account = () => {
  const [userName, setUserName] = useState({});
  const accessToken = localStorage.getItem("token");
  const [check, setCheck] = useState("notEditMode"); //set check = true
  const [textEdit, setTextEdit] = useState("Edit Profile");
  useEffect(() => {
    axios
      .get("https://petsla-api.herokuapp.com/profile", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        setUserName(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const Edit = () => {
    // setCheck("");
    if (textEdit === "Edit Profile") 
    {
      setCheck("");
      setTextEdit("Save");
    }
    else if (textEdit === "Save") {
      setCheck("notEditMode");
      setTextEdit("Edit Profile");
    }
    console.log("run");
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
                      <a className="action" href="/account/profile">
                        <i class="bi bi-person"></i>
                        <span class="title">Profile</span>
                      </a>
                    </li>
                    <li class="dashboard-nav-item">
                      <a className="no_action" href="/account/orders">
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
                <div className="profile-page">
                  <div className="account-page-header">
                    <div className="title-wrap">
                      <div className="title_account">
                        <i
                          className="bi bi-person-fill"
                          style={{ color: "rgb(230, 150, 70" }}
                        ></i>
                        <span className="text">My Profile</span>
                      </div>
                      <div className="btn-wrap" onClick={Edit}>
                        <button type="button" className="btn-edit">
                          {textEdit}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="account-page-body">
                    <div className="profile-info">
                      <div className="row">
                        <div className="mt-4 col-md-6 col-12">
                          <div className="user-ava-cart">
                            <div className="user-ava">
                              <div className="ava">
                                <img
                                  src="https://www.leoasher.dev/static/media/cuteCat.e842e48e.jpg"
                                  alt="User avatar"
                                />
                              </div>
                              <div className="name-wrap">
                                <span className="full-name">
                                  {userName.name}
                                </span>
                                <span className="use-name">
                                  {userName.username}
                                </span>
                              </div>
                            </div>
                            <div className="member-type">Diamond User</div>
                          </div>
                        </div>
                        <div className="mt-4 col-md-6 col-12">
                          <div className="order-card-wrap">
                            <div className="order-card-item">
                              <span className="quantity">10</span>
                              <span className="title">Pending</span>
                            </div>
                            <div className="order-card-item">
                              <span className="quantity">3</span>
                              <span className="title">Shipping</span>
                            </div>
                            <div className="order-card-item">
                              <span className="quantity">99</span>
                              <span className="title">Delivered</span>
                            </div>
                            <div className="order-card-item">
                              <span className="quantity">0</span>
                              <span className="title">Cancelled</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="personal-info mt-4">
                      <form class>
                        <div className="mt-3 form-gr">
                          <label className="form-label" htmlFor="first-name">
                            First name:
                          </label>
                          <input
                            type="text"
                            id="first-name"
                            className="form-control"
                            name="first-name"
                            placeholder={userName.first_name}
                            disabled ={check}
                          />
                        </div>
                        <div className="mt-3 form-gr">
                          <label className="form-label" htmlFor="last-name">
                            Last name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="last-name"
                            id="last-name"
                            placeholder={userName.last_name}
                            disabled = {check}
                          />
                        </div>
                        <div className="mt-3 form-gr">
                          <label className="form-label" htmlFor="email">
                            Email:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder={userName.email}
                            disabled = {check}
                          />
                        </div>
                        <div className="mt-3 form-gr">
                          <label className="form-label" htmlFor="phone-number">
                            Phone number:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone-number"
                            id="phone-number"
                            disabled={check}
                          />
                        </div>
                        <div className="mt-3 form-gr">
                          <label className="form-label" htmlFor="gender">
                            Gender:
                          </label>
                          <div className="from-check">
                            <input
                              name="gender"
                              type="radio"
                              id="gender-0"
                              className="form-check-input"
                              value="0"
                              disabled = {check}
                            />
                            <label
                              htmlFor="gender-0"
                              className="gender-item form-check-label"
                            >
                              male
                            </label>
                          </div>
                          <div className="from-check">
                            <input
                              name="gender"
                              type="radio"
                              id="gender-1"
                              className="form-check-input"
                              value="1"
                              disabled = {check}
                            />
                            <label
                              htmlFor="gender-1"
                              class="gender-item form-check-label"
                            >
                              female
                            </label>
                          </div>
                          <div className="from-check">
                            <input
                              name="gender"
                              type="radio"
                              id="gender-2"
                              className="form-check-input"
                              value="2"
                              disabled={check}
                            />
                            <label
                              htmlFor="gender-2"
                              class="gender-item form-check-label"
                            >
                              other
                            </label>
                          </div>
                        </div>
                      </form>
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

export default Account;
