import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
// import Login from './Account/Login/Login';
import Register from "./Account/Register/Register";
import ProductList from "./Pages/Home/ProductList/ProductList";
import Sortwrap from "./Pages/Home/SortWrap/Sortwrap";
import { Route, Routes } from "react-router-dom";
import Login from "./Account/Login/Login";
import Infor from "./Account/Infor/Infor";
import MenuCart from "./Pages/MenuCart/MenuCart";
import ProductItem from "./Pages/Home/ProductItem/ProductItem";
import Home from "./Pages/Home/Home/Home";
import Cart from "./Pages/Home/Cart/Cart/Cart";
import CustomerInfo from "./Pages/Home/Cart/CustomerInfo/CustomerInfo";
import Account from "./Pages/Home/Account/Profile/Account";
import Contact from "./Pages/Home/Contact";
import { Redirect } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import Order from "./Pages/Home/Account/Order/Order";
import OrderDetal from "./Pages/Home/Account/Order/OrderDetal";
 function Shop() {
  return (
    <div>
      <Header />
      <div className="container" style={{backgroundColor: "#f6f9fc", maxWidth : "100%"}}>
        <Sortwrap />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element = {<Home />} />
        <Route path ="/CustomerInfo" element = {<CustomerInfo/>} />
        <Route path="/Infor" element = {<Infor />} />
        <Route path="/Register" element = {<Register />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/Shop" element = {<Shop/>} />
        <Route path="/Cart" element = {<Cart/>} />
        <Route path="/Contact" element = {<Contact/>} />
        <Route path="/Account" element = {<Account/>} />
        <Route path="/Account/Order" element = {<Order/>} />
        <Route path="/Acount/Order-detal" element = {<OrderDetal/>} />
        <Route path="/MenuCart" element = {<MenuCart/>} />
        <Route path="/ProductItem/:productId" element = {<ProductItem/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
