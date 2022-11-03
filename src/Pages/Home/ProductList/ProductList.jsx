import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";
// import  from "bootstrap-icons"
// import "bootstrap/dist/css/bootstrap.css";
export default function ProductList() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios
      .get("https://petsla-api.herokuapp.com/products")
      .then((res) => {
        const products = res.data;
        setItem([...products]);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(item);
  return (
    <div className="product-list">
      {item.map((res) => (
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
                      <i class="bi bi-bag"></i>
                      <span>Buy Now</span>
                    </div>
                    <div className="car button-wrap">
                      <i class="bi bi-cart3"></i>
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
