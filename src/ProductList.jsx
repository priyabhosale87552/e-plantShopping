
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './redux/CartSlice';
import { Link } from 'react-router-dom';
import './ProductList.css';

const plantCategories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 15, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b' },
      { id: 2, name: 'Peace Lily', price: 18, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee' },
      { id: 3, name: 'Spider Plant', price: 12, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333' },
      { id: 4, name: 'Areca Palm', price: 22, image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c2b' },
      { id: 5, name: 'Rubber Plant', price: 20, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
      { id: 6, name: 'Boston Fern', price: 16, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115' },
    ],
  },
  {
    name: 'Low Maintenance Plants',
    plants: [
      { id: 7, name: 'ZZ Plant', price: 19, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09' },
      { id: 8, name: 'Jade Plant', price: 14, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09' },
      { id: 9, name: 'Aloe Vera', price: 10, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09' },
      { id: 10, name: 'Pothos', price: 13, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e' },
      { id: 11, name: 'Monstera', price: 25, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b' },
      { id: 12, name: 'Chinese Evergreen', price: 17, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
    ],
  },
  {
    name: 'Decorative Plants',
    plants: [
      { id: 13, name: 'Calathea', price: 21, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
      { id: 14, name: 'Bird of Paradise', price: 30, image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c2b' },
      { id: 15, name: 'Fiddle Leaf Fig', price: 28, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09' },
      { id: 16, name: 'Philodendron', price: 20, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e' },
      { id: 17, name: 'Anthurium', price: 24, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee' },
      { id: 18, name: 'Dracaena', price: 18, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="product-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">🛒 Cart ({cartCount})</Link>
      </nav>

      <header className="product-header">
        <h1>Our Houseplants</h1>
        <p>Find the perfect green companion for your home.</p>
      </header>

      {plantCategories.map((category) => (
        <section className="plant-category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const isAdded = cartItems.some((item) => item.id === plant.id);

              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    disabled={isAdded}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {isAdded ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
