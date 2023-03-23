import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ cart }) {
  const getTotalItemCount = () => {
    const keys = Object.keys(cart);
    let total = 0;
    keys.forEach((key) => {
      total += cart[key];
    });
    return total;
  };

  return (
    <div className="header">
      <span>FakeShop</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
          <span>
            {' '}
            (
            {getTotalItemCount()}
            )
          </span>
        </li>
      </ul>
    </div>
  );
}
