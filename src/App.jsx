
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import CartItem from './CartItem';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();

  function handleGetStartedClick() {
    navigate('/plants');
  }

  return (
    <div className="landing-page background-image">
      <div className="landing-content">
        <p className="landing-eyebrow">GROW A LITTLE PARADISE</p>
        <h1>Welcome to Paradise Nursery</h1>
        <p>Bring nature home with our beautiful collection of houseplants.</p>
        <button
          className="get-started-button"
          onClick={handleGetStartedClick}
          type="button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
