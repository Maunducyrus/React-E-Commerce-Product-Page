// import { createContext } from "react";

// export const ProductContext = createContext();
import { createContext, useState, useEffect } from 'react';
import { products as staticProducts } from '../data/products';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(staticProducts);
  }, []);

  const getProductById = (id) => products.find((p) => p.id === id);

  return (
    <ProductContext.Provider value={{ products, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
};
