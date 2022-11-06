import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import "./App.css";
// import Login from './Account/Login/Login';
import Register from "./Account/Register/Register";
import ProductList from "./Pages/Home/ProductList/ProductList";
import store from "./Stores/Redux";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Register></Register>
        <Header/>
        <ProductList />
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
