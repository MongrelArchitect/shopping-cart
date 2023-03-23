import React from 'react';

import Header from './components/Header';
import RouteSwitch from './components/Router';
import Footer from './components/Footer';

import './styles/reset.css';
import './styles/style.css';

function App() {
  return (
    <div className="container">
      <Header />
      <RouteSwitch />
      <Footer />
    </div>
  );
}

export default App;
