import './App.css';
// import Slider from './pages/home/Slider';
import Header from './components/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';
import { Cart } from './pages/cart/Cart';
function App() {
  return (
    <div>
      {/* <Slider /> */}
      <ShopContextProvider>
        <Router>

          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

          <Footer />
        </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;