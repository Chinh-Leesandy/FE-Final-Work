// import logo from './logo.svg';
import './App.css';
import Login from './Account/Login/Login';
import Register from './Account/Register/Register';
import ProductList from './Pages/Home/ProductList/ProductList';
function App() {
  return (
    <div className="App">
      <Register></Register>
      <ProductList/>
    </div>
  );
}

export default App;
