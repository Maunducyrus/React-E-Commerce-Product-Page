// const ProductInfo = () => <div>Product Info</div>;

// export default ProductInfo;

// src/components/Product/ProductInfo.jsx
export default function ProductInfo({ title, price, description, inStock }) {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-green-600 text-xl mt-2">${price}</p>
      <p className="mt-4 text-gray-700">{description}</p>
      <p className={`mt-2 font-medium ${inStock ? 'text-green-600' : 'text-red-600'}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
}
