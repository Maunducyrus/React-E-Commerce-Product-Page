// const CartTotals = () => <div>Cart Totals</div>;

// export default CartTotals;

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export default function CartTotals() {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="text-right mt-4">
      <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
    </div>
  );
}