import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ cart }) {
  const getTotalItemCount = () => {
    const keys = Object.keys(cart);
    let total = 0;
    keys.forEach((key) => {
      total += cart[key];
    });
    return total;
  };

  const { pathname } = useLocation();

  return (
    <div className="header">
      <h1>FakeShop</h1>
      <ul>
        <li>
          <Link to="/" className={pathname === '/' ? 'active' : null}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className={pathname === '/shop' ? 'active' : null}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart" className={pathname === '/cart' ? 'active' : null}>
            Cart
          </Link>
          <span>
            {' '}
            (
            {getTotalItemCount()}
            {' '}
            item
            {getTotalItemCount() === 1 ? null : 's'}
            )
          </span>
        </li>
      </ul>
    </div>
  );
}
