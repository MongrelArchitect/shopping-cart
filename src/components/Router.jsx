import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

export default function RouteSwitch({
  products,
  setProducts,
  cart,
  addToCart,
}) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/shop"
        element={(
          <Shop
            addToCart={addToCart}
            products={products}
            setProducts={setProducts}
          />
        )}
      />
      <Route path="/cart" element={<Cart products={products} cart={cart} />} />
    </Routes>
  );
}
