import React from 'react';

export default function Product({ product }) {
  return (
    <div className="product">
      <span>{product.title}</span>
      <img src={product.image} alt="" />
      <span>{product.description}</span>
      <span>
        $
        {product.price}
      </span>
    </div>
  );
}
