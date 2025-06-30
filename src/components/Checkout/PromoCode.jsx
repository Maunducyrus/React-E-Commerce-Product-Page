// const PromoCode = () => <div>Promo Code</div>;

// export default PromoCode;

import { useState } from 'react';

export default function PromoCode({ onApply }) {
  const [code, setCode] = useState('');

  const apply = () => {
    onApply(code);
    setCode('');
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Promo Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <button onClick={apply} className="bg-green-600 text-white px-4 py-2 rounded">
        Apply
      </button>
    </div>
  );
}
