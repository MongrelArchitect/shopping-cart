import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Cart Quantity', () => {
  it('displays total quantity of items in cart', () => {
    const mockCart = {
      1: 7,
      2: 1,
      9: 12,
    };

    render(<Header cart={mockCart} />);
    const cartQuantity = screen.getByText(/\(\d+ items?\)/g);
  });
});
