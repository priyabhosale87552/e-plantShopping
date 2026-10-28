
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import CartItem from './CartItem';
import './App.css';

function LandingPage({ onGetStartedClick }) {
  return (
    <div className="app-container background-image">
      <div className="landing-content">
        <p className="landing-eyebrow">GROW A LITTLE PARADISE</p>
        <h1>Welcome to Paradise Nursery</h1>
        <p>Bring nature home with our beautiful collection of houseplants.</p>
        <button
          className="get-started-button"
          onClick={onGetStartedClick}
          type="button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const [showProductList, setShowProductList] = useState(false);

  function handleGetStartedClick() {
    setShowProductList(true);
    navigate('/plants');
  }

  function handleParadiseNurseyClick() {
    setShowProductList(false);
    navigate('/');
  }

  return (
    <Routes>
      <Route
        path="/"
        element={showProductList
          ? <ProductList onHomeClick={handleParadiseNurseyClick} />
          : <LandingPage onGetStartedClick={handleGetStartedClick} />}
      />
      <Route
        path="/plants"
        element={<ProductList onHomeClick={handleParadiseNurseyClick} />}
      />
      <Route
        path="/cart"
        element={<CartItem onHomeClick={handleParadiseNurseyClick} />}
      />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
