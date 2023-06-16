import './App.css';
// import Login2 from './pages/login/Login2';
import Header from './components/Header';
import Home from './pages/home/Home';
import Trending from './pages/trending/Trending';
import Description from './pages/description/Description';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
    
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/login2' element={<Login2 />} /> */}
          <Route path='/trend' element={<Trending/>} />
          <Route path='/description' element={<Description/>} />
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;