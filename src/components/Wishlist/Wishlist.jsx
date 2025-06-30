// const Wishlist = () => <div>Wishlist</div>;

// export default Wishlist;

import { useContext } from 'react';
import WishlistItem from './WishlistItem';
import { WishlistContext } from '../../contexts/WishlistContext';

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {wishlist.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}