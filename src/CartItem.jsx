
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from './redux/CartSlice';
import './CartItem.css';

function CartItem({ onHomeClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const total = items.reduce(
    (sum, item) => sum + item.cost * item.quantity,
    0
  );

  function handleParadiseNurseyClick(event) {
    event.preventDefault();
    if (onHomeClick) {
      onHomeClick();
      return;
    }
    navigate('/');
  }

  function handleContinueShopping() {
    navigate('/plants');
  }

  function handleIncrement(item) {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  }

  function handleDecrement(item) {
    if (item.quantity <= 1) {
      handleRemove(item);
      return;
    }
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  }

  function handleRemove(item) {
    dispatch(removeItem(item.name));
  }

  return (
    <div className="cart-page">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" onClick={handleParadiseNurseyClick}>Home</Link>
        <Link to="/plants">Plants</Link>
        <Link
          to="/cart"
          aria-label={`Shopping cart, ${cartCount} items`}
        >
          <span aria-hidden="true">🛒</span> Cart{' '}
          <span className="cart-count">{cartCount}</span>
        </Link>
      </nav>

      <header className="cart-header">
        <p className="section-eyebrow">YOUR GREEN FINDS</p>
        <h1>Your Shopping Cart</h1>
      </header>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-cart-icon" aria-hidden="true">
            🪴
          </p>
          <h2>Your cart is waiting to bloom.</h2>
          <p>Your cart is empty. Let&apos;s find some plants!</p>
          <button
            className="get-started-button"
            onClick={handleContinueShopping}
            type="button"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-container">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-cost">
                    Unit price: ${item.cost.toFixed(2)}
                  </p>
                  <p>
                    Item total ({item.quantity}): $
                    {(item.cost * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => handleDecrement(item)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => handleIncrement(item)}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button cart-item-delete"
                    aria-label={`Delete ${item.name} from cart`}
                    onClick={() => handleRemove(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>{cartCount} items in your cart</p>
            <h2>Order total: ${total.toFixed(2)}</h2>
            <div className="cart-actions">
              <button
                className="get-started-button"
                onClick={handleContinueShopping}
                type="button"
              >
                Continue Shopping
              </button>
              <button
                className="get-started-button1"
                onClick={() => window.alert('Checkout is coming soon!')}
                type="button"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
