import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductList/productItem';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      <hr/>
      <ProductsList/>
      <hr/>
      <Cart/>
    </div>
  );
}

export default App;
