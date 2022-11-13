import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { callApi, addProduct, productItems } from "../../../Stores/productSlice";
import { Link } from "react-router-dom";
// import ProductItem from "../ProductItem/ProductItem";
export default function ProductList() {
  const product = useSelector((state) => state.product.product);
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
    dispatch(productItems(element))
  }
  // const ProductItems = useSelector(state => state.product.productItem);
  //   console.log(ProductItems)
  return (
    <>
      <div className="product-list">
        {currentProducts.map((res) => (
          <div className="product" key={res.id}>
            <React.Fragment>
              <Link to="/ProductItem">
              <div className="col l-3 m-4 s-6">
                <div className="product-item">
                  <div onClick = {() => infoProducts(res)}
                    className="avt"
                    style={{
                      backgroundImage: `url(https://petsla-api.herokuapp.com${res.images})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      paddingTop: "100%",
                    }}
                  ></div>
                  <div className="product-content">
                    <div onClick = {() => infoProducts(res)} className="text-product-content">
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
              </Link>
            </React.Fragment>
          </div>
        ))}
      </div>
      <div className="footer_wrap">
        <div className="news-per-page">
          <label className="form-title" htmlFor="item/page">Item/Page</label>
          <select className="select-page" defaultValue="0" onChange={select}>
            {/* <option value="0" disabled>12</option> */}
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
        <div className="pagination-custom">
          <ul className="page-numbers">
            {pageNumbers.map((number) => {
              if (currentPage === number) {
                return (
                  <li key={number} id={number} className="active_wrap pagination-wrap">
                    {number}
                    {window.scrollTo(0, 0)}
                  </li>
                );
              } else {
                return (
                  <li className="pagination-wrap" key={number} id={number} onClick={chosePage}>
                    {number}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      {/* <ProductItem/> */}
    </>
  );
}