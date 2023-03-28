import React from 'react';

export default function Cart({ cart, products }) {
  const getTotalPrice = () => {
    const keys = Object.keys(cart);
    let total = 0;
    keys.forEach((key) => {
      total += products[key - 1].price * cart[key];
    });
    return Math.round((total + Number.EPSILON) * 100) / 100;
  };

  const cartKeys = Object.keys(cart);

  if (!cartKeys.length) {
    return (
      <div>
        <h3>Cart is empty. Get shopping!</h3>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {cartKeys.map((key) => {
          const id = key - 1;
          return (
            <li>
              <img
                src={products[id].image}
                alt=""
                className="cart-product-image"
              />
              $
              {products[id].price}
              {' x '}
              {cart[key]}
              : $
              {products[id].price * cart[key]}
              <button type="button">REMOVE</button>
            </li>
          );
        })}
      </ul>
      Total: $
      {getTotalPrice()}
    </div>
  );
}
