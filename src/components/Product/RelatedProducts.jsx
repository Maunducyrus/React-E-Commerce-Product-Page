// const RelatedProducts = () => <div>Related Products</div>;

// export default RelatedProducts;

// src/components/Product/RelatedProducts.jsx
import ProductCard from './ProductCard';

export default function RelatedProducts({ products }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">You may also like</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
