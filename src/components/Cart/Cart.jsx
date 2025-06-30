// const Cart = () => <div>Cart Component</div>;

// export default Cart;

import { useContext } from 'react';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import { CartContext } from '../../contexts/CartContext';

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <CartTotals />
        </>
      )}
    </div>
  );
}