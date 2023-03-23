import React from 'react';
import { Link } from 'react-router-dom';

import Cart from './Cart';

export default function Header() {
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
      </ul>
      <Cart />
    </div>
  );
}
