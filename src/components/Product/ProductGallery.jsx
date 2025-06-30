// const ProductGallery = () => <div>Product Gallery</div>;

// export default ProductGallery;
// src/components/Product/ProductGallery.jsx
import { useState } from 'react';

export default function ProductGallery({ images }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div>
      <img
        src={selected}
        alt="Main"
        className="w-full h-96 object-cover rounded-lg hover:scale-105 transition-transform"
      />
      <div className="flex gap-2 mt-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`thumb-${i}`}
            onClick={() => setSelected(img)}
            className={`h-20 w-20 object-cover rounded border cursor-pointer ${
              selected === img ? 'border-blue-500' : 'border-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
