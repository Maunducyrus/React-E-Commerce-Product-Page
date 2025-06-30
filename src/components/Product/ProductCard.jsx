// const ProductCard = () => <div>Product Card</div>;

// export default ProductCard;
// src/components/Product/ProductCard.jsx
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-4">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={i < product.rating ? "#facc15" : "none"} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
