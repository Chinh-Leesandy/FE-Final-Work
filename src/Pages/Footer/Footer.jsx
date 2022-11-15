import React, {  } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
export default function Footer() {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="footer__banner">
                    <img src = "https://www.leoasher.dev/static/media/bannerFooter.4b09af08.png" className="footer__banner-img" alt="Footer Banner"/>
                </div>
                <div className="footer__contain grid wide" style={{ padding : "0 3rem" }}>
                    <div className="footer__contain-wrap">
                        <div className="col l-4 c-4 mb-12">
                            <div className="about-us">
                                <h3>Về PetLa</h3>
                                <p>
                                    PetsLa ra đời với sứ mệnh Pets hóa thế giới loài người <br></br>
                                    bằng cách mang đến cho cộng đồng những content thú <br></br>
                                    vị, đáng yêu về pets.
                                </p>
                            </div>
                        </div>
                        <div className="col l-4 c-4 mb-12"></div>
                        <div className="col l-4 c-4 mb-12">
                            <div className="follow-us">
                                <h3>Follow Us</h3>
                                <div className="follow-us-wrap">
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom__nav-mobile" style={{display:"none"}}>
                <ul className="bottom__nav-list-mobile">
                    <Link to="/">
                    <li className="bottom__nav-item-mobile">
                           
                            <i className="fa-solid fa-house"></i>
                            <div>Home</div>
                    </li>
                    </Link>
                    <Link to="/Shop">
                    <li className="bottom__nav-item-mobile">
                   
                            <i className="fa-solid fa-shop"></i>
                            <div>Shop</div>
                    </li>
                    </Link>
                    <Link to="/Cart">
                    <li className="bottom__nav-item-mobile">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <div>Cart</div>
                    </li>
                    </Link>
                    <li className="bottom__nav-item-mobile">
                            <i className="fa-solid fa-arrow-right-to-bracket"></i>
                            <div>Contact</div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}