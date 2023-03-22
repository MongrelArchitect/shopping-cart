import React from 'react';
import Header from './components/Header';
import RouteSwitch from './components/Router';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <RouteSwitch />
      <Footer />
    </div>
  );
}

export default App;
