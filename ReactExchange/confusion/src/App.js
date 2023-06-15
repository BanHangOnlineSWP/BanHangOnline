import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import Login2 from './pages/login/Login2';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      
      <Login2/>
      {/* <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login2' element={<Login2 />} />
        </Routes>

        <Footer />
      </Router> */}
    </div>
  );
}

export default App;