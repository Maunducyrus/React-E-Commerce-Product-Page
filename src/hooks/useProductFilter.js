// export default function useProductFilter() {
//   // Add filter logic here
//   return {};
// }
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

  const sortBy = (key) => {
    setFiltered([...filtered].sort((a, b) => a[key] - b[key]));
  };

  return { filtered, filterByCategory, searchByKeyword, sortBy };
}
