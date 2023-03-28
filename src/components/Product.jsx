import React, { useState } from 'react';

export default function Product({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (event) => {
    setQuantity(+event.target.value);
  };

  const addItem = () => {
    addToCart(product.id, quantity);
  };

  return (
    <div className="product">
      <span>{product.title}</span>
      <img src={product.image} alt="" />
      <span>{product.description}</span>
      <span>
        $
        {product.price}
      </span>
      <label htmlFor={`quant${product.id}`}>
        Quantity:
        <input
          type="number"
          min="1"
          id={`quant${product.id}`}
          onChange={changeQuantity}
          value={quantity !== 0 ? quantity : 1}
        />
      </label>
      <button type="button" onClick={addItem}>ADD TO CART</button>
    </div>
  );
}
