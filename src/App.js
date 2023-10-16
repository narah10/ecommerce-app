import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductDetails from './pages/ProductDetails';
import Footer from "./components/Footer";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
