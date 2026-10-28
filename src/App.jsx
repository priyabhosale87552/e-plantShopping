
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import CartItem from './CartItem';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="landing-page">
          <div className="landing-content">
            <p className="landing-eyebrow">GROW A LITTLE PARADISE</p>
            <h1>Paradise Nursery</h1>
            <p>Bring nature home with our beautiful collection of houseplants.</p>
            <Link className="get-started-button" to="/plants">
              Get Started
            </Link>
          </div>
        </div>
      } />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
