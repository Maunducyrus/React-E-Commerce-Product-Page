import { useState } from 'react';

export default function useProductFilter(initialProducts) {
  const [filtered, setFiltered] = useState(initialProducts);

  const filterByCategory = (category) => {
    setFiltered(initialProducts.filter((p) => p.category === category));
  };

  const searchByKeyword = (keyword) => {
    setFiltered(initialProducts.filter((p) =>
      p.title.toLowerCase().includes(keyword.toLowerCase())
    ));
  };

  const sortBy = (key, direction = 'asc') => {
    const sorted = [...filtered].sort((a, b) => {
      if (direction === 'asc') return a[key] - b[key];
      else return b[key] - a[key];
    });
    setFiltered(sorted);
  };

  const resetFilter = () => setFiltered(initialProducts);

  return { filtered, filterByCategory, searchByKeyword, sortBy, resetFilter };
}
