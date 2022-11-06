import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
// import Login from './Account/Login/Login';
import Register from "./Account/Register/Register";
import ProductList from "./Pages/Home/ProductList/ProductList";
import { Provider } from "react-redux";
import Sortwrap from "./Pages/Home/SortWrap/Sortwrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="/Register" element = {<Register />} />
        <Route path="/Shop" element = {<Shop/>} />
      </Routes>
    </div>
  );
}

export default App;
