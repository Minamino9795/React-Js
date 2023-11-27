import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/Product_home';
import Detail from './pages/Details';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Register from './pages/Register';

import LogInForm from './components/LoginForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LogInForm />} />
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
