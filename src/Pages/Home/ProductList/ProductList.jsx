import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  callApi,
  addProduct,
  addIdProductItems,
} from "../../../Stores/productSlice";
import { mainProduct } from "../../../Stores/Selector";
import { Link } from "react-router-dom";
// import ProductItem from "../ProductItem/ProductItem";
export default function ProductList() {
  const productList = useSelector(mainProduct);
  const product = [...productList];
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(12);
  useEffect(() => {
    axios
      .get("https://petsla-api.herokuapp.com/products")
      .then((res) => {
        const products = res.data;
        dispatch(callApi(products));
      })
      .catch((err) => console.log(err));
  }, []);
  const handleClick = (element) => {
    dispatch(addProduct(element));
  };
  const chosePage = (event) => {
    setCurrentPage(Number(event.target.id));
    window.scrollTo(0, 0);
  };
  const select = (event) => {
    setNewsPerPage(event.target.value);
    window.scrollTo(0, 0);
    setCurrentPage(1);
  };
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentProducts = product.slice(indexOfFirstNews, indexOfLastNews);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(product.length / newsPerPage); i++) {
    pageNumbers.push(i);
  }
  const infoProducts = (element) => {
    dispatch(addIdProductItems(element));
  };
  // const ProductItems = useSelector(state => state.product.productItem);
  //   console.log(ProductItems)
  console.log(productList);
  return (
    <>
      <div className="product-list">
        <div className="product row">
          {currentProducts.map((res) => (
            <React.Fragment>
              <div className="product col-lg-3 col-md-4 col-sm-6">
                <div className="product-item">
                  <Link to="/ProductItem">
                    <div
                      onClick={() => infoProducts(res)}
                      className="avt"
                      style={{
                        backgroundImage: `url(https://petsla-api.herokuapp.com${res.images})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        paddingTop: "100%",
                      }}
                    ></div>
                  </Link>
                  <div className="product-content">
                    <div
                      onClick={() => infoProducts(res)}
                      className="text-product-content"
                    >
                      <span className="title">{res.product_name}</span>
                    </div>
                    <div className="price">{res.price.toLocaleString()} đ</div>
                    <div className="btn-product-content">
                      <div className="buy button-wrap">
                        <i className="bi bi-bag"></i>
                        <span>Buy Now</span>
                      </div>
                      <div
                        className="car button-wrap"
                        onClick={() => handleClick(res)}
                      >
                        <i className="bi bi-cart3"></i>
                        <span> Add to Cart</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="footer_wrap">
        <div className="news-per-page">
          <label className="form-title" htmlFor="item/page">
            Item/Page
          </label>
          <select className="select-page" defaultValue="0" onChange={select}>
            {/* <option value="0" disabled>12</option> */}
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
        <div className="pagination-custom">
          <ul className="page-numbers">
            {/* <div className="btn-pagination">
              <i class="bi bi-chevron-double-left"></i>
            </div> */}
            <div className="btn-pagination">
              <i class="bi bi-chevron-left"></i>
            </div>
            {pageNumbers.map((number) => {
              if (currentPage === number) {
                return (
                  <li
                    key={number}
                    id={number}
                    className="active_wrap pagination-wrap"
                  >
                    {number}
                  </li>
                );
              } else {
                return (
                  <li
                    className="pagination-wrap"
                    key={number}
                    id={number}
                    onClick={chosePage}
                  >
                    {number}
                  </li>
                );
              }
            })}
            <div className="btn-pagination">
              <i class="bi bi-chevron-right"></i>
            </div>

            {/* <div className="btn-pagination">
              <i class="bi bi-chevron-double-right"></i>
            </div> */}
          </ul>
        </div>
      </div>
      {/* <ProductItem/> */}
    </>
  );
}
