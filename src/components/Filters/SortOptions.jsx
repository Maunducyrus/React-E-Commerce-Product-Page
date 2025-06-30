// const SortOptions = () => <div>Sort Options</div>;

// export default SortOptions;

export default function SortOptions({ value, onChange }) {
  return (
    <div className="mb-4">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border px-4 py-2 rounded w-full"
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="newest">Newest</option>
        <option value="popular">Most Popular</option>
      </select>
    </div>
  );
}