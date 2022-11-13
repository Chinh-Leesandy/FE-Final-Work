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
              </div>
            </div>
          </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default ProductItem;
