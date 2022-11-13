import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useSelector } from "react-redux";
function ProductItem() {
    const res = useSelector((state) => state.product.productItem);
    console.log(res)
  return (
    <React.Fragment>
      <Header></Header>
      <div className="product-detail-page">
          <div className="productItem" key={res.id}>
            <div className="product-detail container">
              <div className="product_items">
                <div
                  className="avt"
                  style={{
                    backgroundImage: `url(https://petsla-api.herokuapp.com${res.images})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    paddingTop: "100%",
                  }}
                ></div>
                <div className="product-detail-infor">
                  <h2 className="product-title">{res.product_name}</h2>
                  <div className="product-price">
                    <span>{res.price.toLocaleString()} đ</span>
                  </div>
                  <div className="btn_wrap">
                    <button className="buy-now">Buy Now</button>
                    <button className="cart">Add to Cart</button>
                  </div>
                  <div className="product-desc">
                    <h3 className="product-desc-title">Thông tin sản phẩm</h3>
                    <div className="detail">{res.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default ProductItem;
