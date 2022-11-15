import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
// import Login from './Account/Login/Login';
import Register from "./Account/Register/Register";
import ProductList from "./Pages/Home/ProductList/ProductList";
import { Provider } from "react-redux";
import Sortwrap from "./Pages/Home/SortWrap/Sortwrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Account/Login/Login";
import Infor from "./Account/Infor/Infor";
import MenuCart from "./Pages/MenuCart/MenuCart";
import ProductItem from "./Pages/Home/ProductItem/ProductItem";
import Home from "./Pages/Home/Home/Home";
import Cart from "./Pages/Home/Cart/Cart";
 function Shop() {
  return (
    <div>
      <Header />
      <Sortwrap />
      <ProductList />
      <Footer />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element = {<Home />} />
        <Route path="/Infor" element = {<Infor />} />
        <Route path="/Register" element = {<Register />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/Shop" element = {<Shop/>} />
        <Route path="/Cart" element = {<Cart/>} />
        <Route path="/MenuCart" element = {<MenuCart/>} />
        <Route path="/ProductItem" element = {<ProductItem/>} />
      </Routes>
    </div>
  );
}

export default App;
