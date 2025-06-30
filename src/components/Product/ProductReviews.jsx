// const ProductReviews = () => <div>Product Reviews</div>;

// export default ProductReviews;

// src/components/Product/ProductReviews.jsx
export default function ProductReviews({ reviews }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Customer Reviews</h3>
      {reviews.length === 0 ? (
        <p className="text-gray-500 mt-2">No reviews yet.</p>
      ) : (
        reviews.map((review, i) => (
          <div key={i} className="mt-4 border-t pt-4">
            <p className="font-bold">{review.name}</p>
            <p className="text-yellow-500">Rating: {review.rating}/5</p>
            <p className="text-gray-700 mt-1">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
}
