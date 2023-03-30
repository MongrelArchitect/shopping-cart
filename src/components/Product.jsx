import React, { useState } from 'react';

export default function Product({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [invalidQuantity, setInvalidQuantity] = useState(false);

  const changeQuantity = (event) => {
    const { value } = event.target;
    if (!value.includes('.') && +value >= 1) {
      setQuantity(+value);
      setInvalidQuantity(false);
    } else {
      setInvalidQuantity(true);
    }
  };

  const addItem = () => {
    addToCart(product.id, quantity);
  };

  return (
    <div className="product">
      <span className="product-title">{product.title}</span>
      <img src={product.image} alt="" />
      <span>{product.description}</span>
      <span className="product-price">
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
          placeholder={quantity}
        />
      </label>
      <button disabled={invalidQuantity} type="button" onClick={addItem}>
        ADD TO CART
      </button>
      <span
        className="quantity-error"
        style={{ visibility: invalidQuantity ? 'visible' : 'hidden' }}
      >
        Invalid: No decimals or negatives
      </span>
    </div>
  );
}
