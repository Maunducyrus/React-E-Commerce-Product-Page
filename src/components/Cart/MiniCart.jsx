// const MiniCart = () => <div>Mini Cart</div>;

// export default MiniCart;

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

export default function MiniCart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="absolute right-4 top-16 bg-white p-4 shadow rounded w-64">
      <h4 className="font-bold mb-2">Cart Preview</h4>
      {cartItems.length === 0 ? (
        <p className="text-sm">Your cart is empty.</p>
      ) : (
        <ul className="text-sm">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>{item.title}</span>
              <span>x{item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
      <Link to="/cart" className="block mt-2 text-blue-500 underline text-sm">Go to cart</Link>
    </div>
  );
}