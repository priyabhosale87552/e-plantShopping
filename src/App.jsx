
import { Routes, Route, Navigate } from 'react-router-dom';
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
            <h1>Paradise Nursery</h1>
            <p>Bring nature home with our beautiful collection of houseplants.</p>
            <button
              className="get-started-button"
              onClick={() => window.location.href = '/plants'}
            >
              Get Started
            </button>
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
