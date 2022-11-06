import React from "react"

import "./Header.css"

function Header() {
    return (
        <React.Fragment>
            <div style={{ borderBottom: "2px solid hsla(0,0%,66.7%,.3)", width: "100%" }}>
                <div className="grid wide">
                    <div className="header__higher" style={{ display: "flex" }}>
                        <div className="header__higher-info">
                            <div className="header__higher-info-mail">
                                <i className="fa-solid fa-envelope"></i>
                                <span>petsla.vn@gmail.com</span>
                            </div>
                            <div className="divide">
                            </div>
                            <div className="header__higher-info-phone">
                                <i className="fa-solid fa-phone"></i>
                                <span>01234 456 789</span>
                            </div>
                            <div className="header__higher-info-img">

                                    <img src={"https://www.leoasher.dev/static/media/logofull.f2aa3784.png"} alt="Logo Pesla" />

                            </div>
                        </div>
                        <div className="header__higher-btn-wrap">
                            <div className="btn-language-wrap">
                                <i className="fa-solid fa-earth-americas"></i>
                            </div>
                            <div className="btn-theme-wrap">
                                <i className="fa-solid fa-moon"></i>
                            </div>
                            <div className="btn-auth-wrap">
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header">
                <div className="header__top grid wide">
                    <div className="header__wrap">
                        <div className="header__logo">

                                <img className="header__logo__img" src={"https://www.leoasher.dev/static/media/logofull.f2aa3784.png"} alt="Logo Pesla" />

                        </div>
                        <div className="header__search">
                            <input className="header__search__input" placeholder="Everything here is better than your ex" type="text" />
                            <i className="header__search__icon fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="header__cart" >
                            <i className="header__cart__icon fa-solid fa-cart-shopping"></i>
                            <div className="header__cart__count-items"> 0 </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="header__nav grid wide">
                <ul className="header__nav-list">
                    <li className="header__nav-item">

                            Home

                    </li>
                    <li className="header__nav-item">

                            Shop

                    </li>
                    <li className="header__nav-item">

                            Cart

                    </li>
                    <li className="header__nav-item">

                            Contact

                    </li>
                    <li className="header__nav-item">

                            Account

                    </li>
                </ul>
            </div>
           
        </React.Fragment>
    )
}
export default Header;