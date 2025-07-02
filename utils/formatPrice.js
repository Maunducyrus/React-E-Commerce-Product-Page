// export function formatPrice(price) {
//   return `$${price.toFixed(2)}`;
// }

export function formatPrice(value) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES'
  }).format(value);
}