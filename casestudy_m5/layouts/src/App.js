import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import ProductList from './components/Product_home';
import Detail from './pages/Details';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/cart' element={<Cart/>} />



        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>không tìm thấy đường dẫn</p>
            </main>
          }
        />
      </Routes>



    </div>
  );
}

export default App;
