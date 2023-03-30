import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import RouteSwitch from './components/Router';
import Footer from './components/Footer';

import './styles/reset.css';
import './styles/style.css';

function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setProducts(result);
    };

    fetchData();
  }, []);

  const addToCart = (id, quantity) => {
    const newCart = { ...cart };
    if (newCart[id]) {
      newCart[id] += quantity;
    } else {
      newCart[id] = quantity;
    }
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = { ...cart };
    delete newCart[id];
    setCart(newCart);
  };

  return (
    <div className="container">
      <Header cart={cart} />
      <RouteSwitch
        cart={cart}
        addToCart={addToCart}
        products={products}
        setProducts={setProducts}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </div>
  );
}

export default App;
