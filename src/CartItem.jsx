
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './redux/CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/">Home</Link>
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
          <Link className="action-button" to="/plants">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>
                    Item total ({item.quantity}): $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    aria-label={`Delete ${item.name} from cart`}
                    onClick={() => dispatch(removeItem(item.id))}
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
              <Link className="action-button action-button-secondary" to="/plants">
                Continue Shopping
              </Link>
              <button onClick={() => window.alert('Checkout is coming soon!')}>
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
