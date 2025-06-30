// const ProductSpecs = () => <div>Product Specs</div>;

// export default ProductSpecs;

export default function ProductSpecs({ specs }) {
  return (
    <div className="mt-4">
      <h4 className="text-lg font-bold mb-2">Specifications</h4>
      <ul className="list-disc pl-5 text-sm text-gray-700">
        {specs.map((spec, idx) => (
          <li key={idx}>{spec}</li>
        ))}
      </ul>
    </div>
  );
}