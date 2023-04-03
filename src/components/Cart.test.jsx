import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Cart from './Cart';

describe('Cart component', () => {
  const mockCart = {
    1: 7,
    3: 2,
    4: 3,
  };

  const mockProducts = [
    {
      image: '1',
      price: 100,
    },
    {
      image: '2',
      price: 10,
    },
    {
      image: '3',
      price: 250,
    },
    {
      image: '4',
      price: 1000,
    },
  ];

  const mockRemove = jest.fn();

  it('renders correctly with zero items in cart', () => {
    const { container } = render(<Cart cart={{}} />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with some items in cart', () => {
    const { container } = render(
      <Cart cart={mockCart} products={mockProducts} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('calculates cart total correctly', () => {
    render(<Cart cart={mockCart} products={mockProducts} />);
    const total = screen.getByText(/Total/);
    expect(total.textContent).toContain('Total: $4200');
  });

  it('displays correct number of "delete" buttons', () => {
    render(
      <Cart
        cart={mockCart}
        products={mockProducts}
        removeFromCart={mockRemove}
      />,
    );
    const buttons = screen.getAllByText('✕');
    expect(buttons.length).toBe(3);
  });

  it('calls removeFromCart correct number of times', () => {
    render(
      <Cart
        cart={mockCart}
        products={mockProducts}
        removeFromCart={mockRemove}
      />,
    );
    const buttons = screen.getAllByText('✕');
    userEvent.click(buttons[0]);
    expect(mockRemove).toHaveBeenCalledTimes(1);
    userEvent.click(buttons[1]);
    expect(mockRemove).toHaveBeenCalledTimes(2);
  });

  it('calls removeFromCart with correct arguments', () => {
    render(
      <Cart
        cart={mockCart}
        products={mockProducts}
        removeFromCart={mockRemove}
      />,
    );
    const buttons = screen.getAllByText('✕');
    userEvent.click(buttons[0]);
    expect(mockRemove).toHaveBeenCalledWith('1');
    userEvent.click(buttons[1]);
    expect(mockRemove).toHaveBeenCalledWith('3');
    userEvent.click(buttons[2]);
    expect(mockRemove).toHaveBeenCalledWith('4');
  });
});
