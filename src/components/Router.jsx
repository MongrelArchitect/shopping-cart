import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

export default function RouteSwitch({ addToCart }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
