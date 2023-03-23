import React, { useState, useEffect } from 'react';
import Product from './Product';

export default function Shop() {
  const [products, setProducts] = useState(null);

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
          <Product product={product} key={product.id} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <span>Loading...</span>
    </div>
  );
}
