
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './redux/CartSlice';
import { Link } from 'react-router-dom';
import './ProductList.css';

const plantCategories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', description: 'A sculptural, resilient favorite that thrives in a range of light.', price: 15, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b' },
      { id: 2, name: 'Peace Lily', description: 'Elegant white blooms and glossy leaves bring a peaceful touch.', price: 18, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee' },
      { id: 3, name: 'Spider Plant', description: 'A cheerful, easy-growing plant with arching striped leaves.', price: 12, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333' },
      { id: 4, name: 'Areca Palm', description: 'Feathery fronds add a bright, tropical feel to any room.', price: 22, image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c2b' },
      { id: 5, name: 'Rubber Plant', description: 'Bold, glossy foliage makes this a striking indoor statement.', price: 20, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
      { id: 6, name: 'Boston Fern', description: 'Soft, cascading fronds bring lush greenery to shelves and planters.', price: 16, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115' },
    ],
  },
  {
    name: 'Low Maintenance Plants',
    plants: [
      { id: 7, name: 'ZZ Plant', description: 'Glossy, upright leaves make this a low-fuss choice for busy homes.', price: 19, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09' },
      { id: 8, name: 'Jade Plant', description: 'A compact succulent with plump leaves and a tree-like shape.', price: 14, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09' },
      { id: 9, name: 'Aloe Vera', description: 'A sun-loving succulent with distinctive, fleshy green leaves.', price: 10, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09' },
      { id: 10, name: 'Pothos', description: 'Fast-growing trailing vines brighten shelves and hanging planters.', price: 13, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e' },
      { id: 11, name: 'Monstera', description: 'Iconic split leaves give this tropical beauty a bold silhouette.', price: 25, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b' },
      { id: 12, name: 'Chinese Evergreen', description: 'Colorful patterned leaves thrive with minimal day-to-day care.', price: 17, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
    ],
  },
  {
    name: 'Decorative Plants',
    plants: [
      { id: 13, name: 'Calathea', description: 'Decorative leaves with intricate patterns bring color and movement.', price: 21, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
      { id: 14, name: 'Bird of Paradise', description: 'Large, tropical leaves create a dramatic focal point indoors.', price: 30, image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c2b' },
      { id: 15, name: 'Fiddle Leaf Fig', description: 'Oversized violin-shaped leaves make a statement in bright rooms.', price: 28, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09' },
      { id: 16, name: 'Philodendron', description: 'Heart-shaped leaves and trailing stems add a soft, leafy accent.', price: 20, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e' },
      { id: 17, name: 'Anthurium', description: 'Vibrant, heart-shaped blooms pair beautifully with glossy leaves.', price: 24, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee' },
      { id: 18, name: 'Dracaena', description: 'Architectural, upright foliage brings an elegant modern touch.', price: 18, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="product-page">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" aria-label={`Shopping cart, ${cartCount} items`}>
          <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{cartCount}</span>
        </Link>
      </nav>

      <header className="product-header">
        <p className="section-eyebrow">A LITTLE GREEN GOES A LONG WAY</p>
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
                  <p className="plant-description">{plant.description}</p>
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
