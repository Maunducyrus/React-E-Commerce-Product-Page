// const ShippingMethod = () => <div>Shipping Method</div>;

// export default ShippingMethod;

export default function ShippingMethod({ selected, onSelect }) {
  const methods = [
    { name: 'Standard (3-5 days)', cost: 5 },
    { name: 'Express (1-2 days)', cost: 10 },
  ];

  return (
    <div className="space-y-2 mt-4">
      {methods.map((method) => (
        <label key={method.name} className="block">
          <input
            type="radio"
            name="shipping"
            value={method.name}
            checked={selected === method.name}
            onChange={() => onSelect(method.name)}
            className="mr-2"
          />
          {method.name} - ${method.cost}
        </label>
      ))}
    </div>
  );
}
