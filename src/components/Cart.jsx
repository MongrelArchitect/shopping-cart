import React from 'react';

export default function Cart({ cart, products, removeFromCart }) {
  const getTotalPrice = () => {
    const keys = Object.keys(cart);
    let total = 0;
    keys.forEach((key) => {
      total += products[key - 1].price * cart[key];
    });
    return Math.round((total + Number.EPSILON) * 100) / 100;
  };

  const handleRemove = (event) => {
    removeFromCart(event.target.dataset.key);
  };

  const cartKeys = Object.keys(cart);

  if (!cartKeys.length) {
    return (
      <div className="cart">
        <h3>Cart is empty. Get shopping!</h3>
      </div>
    );
  }

  return (
    <div className="cart">
      <ul>
        {cartKeys.map((key) => {
          const id = key - 1;
          return (
            <li key={key}>
              <img
                src={products[id].image}
                alt=""
                className="cart-product-image"
              />
              <span>
                $
                {products[id].price}
                {' x '}
                {cart[key]}
                : $
                {products[id].price * cart[key]}
                <button
                  className="remove"
                  data-key={key}
                  type="button"
                  onClick={handleRemove}
                >
                  ✕
                </button>
              </span>
            </li>
          );
        })}
        <li>
          <span />
          <span className="cart-total">
            Total: $
            {getTotalPrice()}
            <button type="button">CHECKOUT</button>
          </span>
        </li>
      </ul>
    </div>
  );
}
