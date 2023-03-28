import React, { useState } from 'react';

import Header from './components/Header';
import RouteSwitch from './components/Router';
import Footer from './components/Footer';

import './styles/reset.css';
import './styles/style.css';

function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState(null);

  const addToCart = (id, quantity) => {
    const newCart = { ...cart };
    if (newCart[id]) {
      newCart[id] += quantity;
    } else {
      newCart[id] = quantity;
    }
    setCart(newCart);
  };

  return (
    <div className="container">
      <Header cart={cart} />
      <RouteSwitch
        addToCart={addToCart}
        products={products}
        setProducts={setProducts}
      />
      <Footer />
    </div>
  );
}

export default App;
