import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('Renders correctly with zero cart items', () => {
    const { container } = render(
      <BrowserRouter>
        <Header cart={{}} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Shows correct number of items in cart', () => {
    const fakeCart = {
      1: 7,
      2: 1,
      4: 3,
    };

    render(
      <BrowserRouter>
        <Header cart={fakeCart} />
      </BrowserRouter>,
    );

    const cartItems = screen.getByText(/\(\d* item(s)\)/);
    expect(cartItems.textContent).toMatch('(11 items)');
  });

  it('Style links according to router path', () => {
    render(
      <MemoryRouter initialEntries={['/shop']}>
        <Header cart={{}} />
      </MemoryRouter>,
    );

    const shopLink = screen.getByText('Shop');
    const homeLink = screen.getByText('Home');
    const cartLink = screen.getByText('Cart');
    expect(shopLink.classList.contains('active')).toBe(true);
    expect(homeLink.classList.contains('active')).toBe(false);
    expect(cartLink.classList.contains('active')).toBe(false);
  });
});
