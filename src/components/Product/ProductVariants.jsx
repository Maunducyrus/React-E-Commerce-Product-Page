// const ProductVariants = () => <div>Product Variants</div>;

// export default ProductVariants;
// src/components/Product/ProductVariants.jsx
export default function ProductVariants({ variants, selected, onSelect }) {
  return (
    <div className="mt-4">
      {Object.entries(variants).map(([variantType, options]) => (
        <div key={variantType} className="mb-3">
          <h4 className="font-semibold capitalize">{variantType}</h4>
          <div className="flex gap-2 mt-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => onSelect(variantType, option)}
                className={`px-4 py-2 rounded border ${
                  selected[variantType] === option
                    ? 'bg-blue-600 text-white'
                    : 'border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
