// const AttributeFilters = () => <div>Attribute Filters</div>;

// export default AttributeFilters;

export default function AttributeFilters({ attributes, onChange }) {
  return (
    <div className="space-y-4">
      {Object.entries(attributes).map(([attr, options]) => (
        <div key={attr}>
          <h4 className="font-semibold mb-2 capitalize">{attr}</h4>
          {options.map((opt) => (
            <label key={opt} className="block">
              <input
                type="checkbox"
                value={opt}
                onChange={() => onChange(attr, opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}