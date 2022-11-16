import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuCart from "../MenuCart/MenuCart";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
// import {Input} from 'antd'
import { setSearchText } from "../../Stores/FilterSlice";
import DarkModeTogge  from "../DrakMode/Theme";
function Header() {
  const [styleMenuCart, setStyleMenuCart] = useState({ right: "-400px" });
  const count = useSelector((state) => state.product.count);

  function ClickOpenMenuCart() {
    setStyleMenuCart((preStyleMenuCart) => {
      const styleMenuCart = { ...preStyleMenuCart, right: "0px" };
      return styleMenuCart;
    });
  };
  const [keyword, setKeyword] = useState("");
  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchText(keyword));
  };
  // const handleKeyPress = (event) => {
  //   if(event.key === 'Enter'){
  //     console.log('enter press here! ')
  //   }
  // }
  return (
    <React.Fragment>
      <div
        style={{ borderBottom: "2px solid hsla(0,0%,66.7%,.3)", width: "100%" }}
      >
        <div className="grid wide">
          <div className="header__higher" style={{ display: "flex" }}>
            <div className="header__higher-info">
              <div
                className="header__higher-info-mail"
                style={{ paddingLeft: "3rem" }}
              >
                <i className="fa-solid fa-envelope"></i>
                <span>petsla.vn@gmail.com</span>
              </div>
              <div className="divide"></div>
              <div className="header__higher-info-phone">
                <i className="fa-solid fa-phone"></i>
                <span>01234 456 789</span>
              </div>
              <div className="header__higher-info-img">
                <img
                  src={
                    "https://www.leoasher.dev/static/media/logofull.f2aa3784.png"
                  }
                  alt="Logo Pesla"
                />
              </div>
            </div>
            <div
              className="header__higher-btn-wrap"
              style={{ paddingRight: "3rem" }}
            >
              <div className="btn-language-wrap">
                <i className="fa-solid fa-earth-americas"></i>
              </div>
              {/* <div className="btn-theme-wrap" checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)}>
                <i className="fa-solid fa-moon"></i>
              </div> */}
              <DarkModeTogge/>
              <div className="btn-auth-wrap">
                <Link to="/Login">
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="header__top" style={{ padding: "0 3rem" }}>
          <div className="header__wrap">
            <div className="header__logo">
              <a href="/Shop">
                <img
                  className="header__logo__img"
                  src={
                    "https://www.leoasher.dev/static/media/logofull.f2aa3784.png"
                  }
                  alt="Logo Pesla"
                />
              </a>
            </div>
            <div className="header__search">
              <form action="" className="form__search">
                <input
                  onChange={handleInputChange}
                  className="header__search__input"
                  placeholder="Everything here is better than your ex"
                  type="text"
                />
                <button onClick={handleSearch} type="submit" className="btn__search-submit">
                  <i className="header__search__icon fa-solid fa-magnifying-glass"></i>
                </button>

              </form>
            </div>
            <div className="header__cart" onClick={ClickOpenMenuCart}>
              <i className="header__cart__icon fa-solid fa-cart-shopping"></i>
              <div className="header__cart__count-items"> {count} </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header__nav" style={{ padding: "0 3rem" }}>
        <ul className="header__nav-list">
          <Link to="/">
            <li className="header__nav-item header__nav-item-link">Home</li>
          </Link>
          <Link to="/Shop">
            <li className="header__nav-item header__nav-item-link">Shop</li>
          </Link>
          <Link to="/Cart">
            <li className="header__nav-item header__nav-item-link">Cart</li>
          </Link>
          <li className="header__nav-item header__nav-item-link">Contact</li>
          <li className="header__nav-item header__nav-item-link">Account</li>
        </ul>
      </div>
      <MenuCart
        styleMenuCart={styleMenuCart}
        setStyleMenuCart={setStyleMenuCart}
      />
    </React.Fragment>
  );
}
export default Header;
