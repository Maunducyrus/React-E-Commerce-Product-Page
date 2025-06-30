// const WishlistItem = () => <div>Wishlist Item</div>;

// export default WishlistItem;

import { useContext } from 'react';
import { WishlistContext } from '../../contexts/WishlistContext';
import { CartContext } from '../../contexts/CartContext';

export default function WishlistItem({ item }) {
  const { removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded shadow">
      <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-600">${item.price}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => addToCart(item)}
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
        >
          Add to Cart
        </button>
        <button
          onClick={() => removeFromWishlist(item.id)}
          className="text-red-500 text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
