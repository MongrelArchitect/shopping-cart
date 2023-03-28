import React, { useEffect } from 'react';
import Product from './Product';

export default function Shop({ products, setProducts, addToCart }) {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setProducts(result);
    };

    fetchData();
  }, []);

  if (products) {
    return (
      <div className="products">
        {products.map((product) => (
          <Product product={product} key={product.id} addToCart={addToCart} />
        ))}
      </div>
    );
  }

  return (
    <div className="products">
      <span>Loading...</span>
    </div>
  );
}
