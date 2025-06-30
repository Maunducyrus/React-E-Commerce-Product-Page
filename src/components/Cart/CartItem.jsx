// const CartItem = () => <div>Cart Item</div>;

// export default CartItem;

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between border-b py-2">
      <img src={item.image} alt={item.title} className="h-20 w-20 object-cover rounded" />
      <div className="flex-1 ml-4">
        <h4 className="font-semibold">{item.title}</h4>
        <p className="text-gray-500">${item.price}</p>
        <div className="flex items-center mt-2 gap-2">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2">+</button>
        </div>
        <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm mt-2">Remove</button>
      </div>
    </div>
  );
}