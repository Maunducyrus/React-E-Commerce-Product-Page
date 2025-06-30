// const SizeGuide = () => <div>Size Guide</div>;

// export default SizeGuide;

// src/components/Product/SizeGuide.jsx
import { useState } from 'react';

export default function SizeGuide() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="text-blue-600 underline mt-2"
        onClick={() => setOpen(true)}
      >
        View Size Guide
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-xl w-11/12 md:w-2/3">
            <h2 className="text-xl font-bold mb-4">Size Guide</h2>
            <p className="text-gray-700">Insert a detailed size chart here...</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
