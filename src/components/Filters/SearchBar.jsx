// const SearchBar = () => <div>Search Bar</div>;

// export default SearchBar;

import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Search products..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="border rounded px-4 py-2 w-full"
      />
    </form>
  );
}
