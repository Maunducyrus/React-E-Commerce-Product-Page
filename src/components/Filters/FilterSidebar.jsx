// const FilterSidebar = () => <div>Filter Sidebar</div>;

// export default FilterSidebar;

export default function FilterSidebar({ filters, onChange }) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold mb-2">Category</h4>
        {filters.categories.map((cat) => (
          <label key={cat} className="block">
            <input
              type="checkbox"
              value={cat}
              onChange={onChange}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
      </div>

      <div>
        <h4 className="font-semibold mb-2">Price Range</h4>
        <input
          type="range"
          min="0"
          max="1000"
          onChange={onChange}
          className="w-full"
        />
      </div>

      <div>
        <h4 className="font-semibold mb-2">Rating</h4>
        {[5, 4, 3, 2, 1].map((r) => (
          <label key={r} className="block">
            <input
              type="radio"
              name="rating"
              value={r}
              onChange={onChange}
              className="mr-2"
            />
            {r} Stars & Up
          </label>
        ))}
      </div>
    </div>
  );
}