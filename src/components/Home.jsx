import React from 'react';
import hero from '../images/shop-hero.jpg';

export default function Home() {
  const heroStyle = {
    backgroundImage: `url(${hero})`,
  };

  return (
    <div className="home">
      <div className="hero" style={heroStyle}>
        <h2>Welcome to FakeShop!</h2>
      </div>
      <div className="home-info">
        <p>
          We&apos;ve got all the phony products you need, right here. Check
          our shop for the latest in false and faux merchandise. Need
          something made up for the next holiday? How about a make believe
          product for that special nobody? Look no further!
        </p>
      </div>
    </div>
  );
}
