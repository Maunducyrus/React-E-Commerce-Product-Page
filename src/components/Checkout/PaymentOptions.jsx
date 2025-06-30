// const PaymentOptions = () => <div>Payment Options</div>;

// export default PaymentOptions;

export default function PaymentOptions({ selected, onSelect }) {
  const options = ['Credit Card', 'M-Pesa', 'PayPal'];

  return (
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt} className="block">
          <input
            type="radio"
            name="payment"
            value={opt}
            checked={selected === opt}
            onChange={() => onSelect(opt)}
            className="mr-2"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}