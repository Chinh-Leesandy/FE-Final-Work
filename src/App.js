// import logo from './logo.svg';
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
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
