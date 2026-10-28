
import { Link } from 'react-router-dom';
import './ProductList.css';

function AboutUs() {
  return (
    <div className="product-page">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <main className="about-page about-us-container">
        <p className="section-eyebrow">OUR STORY</p>
        <h1>About Paradise Nursery</h1>
        <p>
          We believe every home deserves a little more green. Paradise Nursery
          brings together beautiful, thoughtfully selected houseplants to help
          you create a calmer, more welcoming space.
        </p>
        <p>
          From easy-care favorites to statement-making foliage, our collection
          makes it simple to find the right plant for your home and your
          experience level.
        </p>
        <p>
          Our mission is to make plant ownership joyful and accessible. We
          provide a thoughtfully curated selection of houseplants and helpful
          guidance so every customer can find and care for a plant they love.
        </p>
        <Link className="text-link" to="/plants">Explore our plants</Link>
      </main>
    </div>
  );
}

export default AboutUs;
