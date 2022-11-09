import React, { useEffect} from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ProductList from "../ProductList/ProductList";
import "./MenuCart.css"



export default function MenuCart({styleMenuCart,setStyleMenuCart}) {
    return (
    <React.Fragment>
        <Header/>
        <ProductList/>
        <Footer/>
       <div class="cartJs">
                    <div class="cartJs_header">
                        <div>Số sản phẩm :</div>
                        <div class="cartJS_header-number">0</div>
                        <div class="exitIcon">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div class="line">
                        <div class="notCart">
                            {/* <img class="notCart__img" src="https://www.leoasher.dev/static/media/sadCat.2335333f.png" alt=""> */}
                        <div class="notCart__title">Không có sản phẩm </div>
                    </div>
                    </div>
                <div class="cartjs_itemParent">
                    <div  class="cartjs_footer">
                        <div class="sumPrice">
                            <span>Tổng tiền:</span>
                            <span class="sumPrice1">0</span>
                            <span>đ</span>
                        </div>
                        <div class="viewTitleCart">
                            Xem giỏ hàng
                        </div>
                    </div>
                </div>
         </div>
    </React.Fragment>
    )
}