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
        <Route path="/Infor" element = {<Infor />} />
        <Route path="/Register" element = {<Register />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/Shop" element = {<Shop/>} />
        <Route path="/MenuCart" element = {<MenuCart/>} />
        <Route path="/ProductItem" element = {<ProductItem/>} />
      </Routes>
    </div>
  );
}

export default App;
