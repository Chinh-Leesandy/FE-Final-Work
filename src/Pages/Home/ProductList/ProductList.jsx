import React, { useEffect} from "react";
import axios from "axios";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux"
import { callApi, sortNameAZ } from "../../../Stores/productSlice";
// import  from "bootstrap-icons"
// import "bootstrap/dist/css/bootstrap.css";
export default function ProductList() {
  const product = useSelector(state => state.product).product;
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://petsla-api.herokuapp.com/products")
      .then((res) => {
        const products = res.data;
        dispatch(callApi(products))
      })
      .catch((err) => console.log(err));

  }, []);

  return (
    <div className="product-list">
      {product.map((res) => (
        <div className="product-container" key={res.id}>
          <div className="products">
            <React.Fragment>
              <div className="col l-3 m-4 c-6">
                <div className="product-item">
                  <div
                    className="avt"
                    style={{
                      backgroundImage: `url(https://petsla-api.herokuapp.com${res.images})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      paddingTop: "100%",
                    }}
                  ></div>
                </div>
              </div>
              <div className="col l-3 m-4 c-6">
                <div className="product-content">
                  <div className="text-product-content">
                    <span className="title">{res.product_name}</span>
                  </div>
                  <div className="price">{res.price.toLocaleString()} đ</div>
                  <div className="btn-product-content">
                    <div className="buy button-wrap">
                      <i className="bi bi-bag"></i>
                      <span>Buy Now</span>
                    </div>
                    <div className="car button-wrap">
                      <i className="bi bi-cart3"></i>
                      <span> Add to Cart</span>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          </div>
        </div>
      ))}
    </div>
  );
}

