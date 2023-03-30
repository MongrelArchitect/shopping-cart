import React from 'react';
import Product from './Product';

export default function Shop({ products, addToCart }) {
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
    <div className="cart">
      <h3>Loading...</h3>
    </div>
  );
}
