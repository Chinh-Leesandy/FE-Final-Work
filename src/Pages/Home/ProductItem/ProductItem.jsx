import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./ProductItem.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { addProduct } from "../../../Stores/productSlice";
import { success } from "../../../util/toastify";
import { useDispatch } from "react-redux";
function ProductItem() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios
      .get(`https://petsla-api.herokuapp.com/product/${productId}`)
      .then((value) => {
        setItem(value.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleClick = (element) => {
    dispatch(addProduct(element));
    success("Add to cart sucessfully");
  };
  return (
    <React.Fragment>
      <Header></Header>
      <div className="product-container">
        <div className="product-wrap">
          {item != undefined && (
            <React.Fragment>
              <div className="product__img-wrap">
                <img
                  className="product__img"
                  src={`https://petsla-api.herokuapp.com${item.images}`}
                />
              </div>
              <div className="product__info-wrap">
                <div className="product__title">
                  <h2>{item.product_name}</h2>
                </div>
                <div className="product__price">{item.price} đ</div>
                <div className="product__btn-wrap">
                  <div className="product__btn-buy-wrap">
                    <button className="product__btn product__btn-buy">
                      Buy Now
                    </button>
                  </div>
                  <div
                    className="product__btn-buy-wrap"
                    onClick={() => handleClick(item)}
                  >
                    <button className="product__btn product__btn-add">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="info">
                  <h3
                    style={{
                      marginTop: "0.75rem",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                    }}
                  >
                    Thông tin sản phẩm
                  </h3>
                  <div className="info-title">{item.description}</div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default ProductItem;
