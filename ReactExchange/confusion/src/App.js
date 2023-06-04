import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>

        <Header />

        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/login' element={<Login/>}/> 
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;