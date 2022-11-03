import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import ProductList from './Pages/Home/ProductList/ProductList';
function App() {
  return (
    <div className="Main" >
      <Header/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;