// const RecentlyViewed = () => <div>Recently Viewed Products</div>;

// export default RecentlyViewed;

import { Link } from 'react-router-dom';

export default function RecentlyViewed({ items }) {
  if (!items.length) return null;

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Recently Viewed</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="block border p-2 rounded hover:shadow"
          >
            <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded" />
            <h4 className="text-sm mt-2 font-medium">{item.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}