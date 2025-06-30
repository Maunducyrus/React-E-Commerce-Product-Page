// const OrderSummary = () => <div>Order Summary</div>;

// export default OrderSummary;

export default function OrderSummary({ cartItems }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5; // fixed shipping for demo
  const total = subtotal + shipping;

  return (
    <div className="border p-4 rounded shadow space-y-2">
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Shipping: ${shipping.toFixed(2)}</p>
      <p className="font-bold">Total: ${total.toFixed(2)}</p>
    </div>
  );
}