import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from './Product';

describe('Product component', () => {
  const mockProduct = {
    title: 'Some Fake Product',
    image: '#',
    description: 'A good ol fashioned phony placeholder product',
    id: 22,
    price: 150,
  };

  it('renders correctly', () => {
    const { container } = render(
      <Product product={mockProduct} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('calls addToCart correct number of times', () => {
    const mockAddToCart = jest.fn();
    render(<Product product={mockProduct} addToCart={mockAddToCart} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    userEvent.click(button);
    userEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalledTimes(3);
  });

  it('calls addToCart with correct arguments', () => {
    const mockAddToCart = jest.fn();
    render(<Product product={mockProduct} addToCart={mockAddToCart} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalledWith(22, 1);
  });

  it('calls addToCart with correct arguments after modifying quantity', () => {
    const mockAddToCart = jest.fn();
    render(<Product product={mockProduct} addToCart={mockAddToCart} />);
    const input = screen.getByRole('spinbutton');
    act(() => {
      userEvent.type(input, '4');
    });
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalledWith(22, 4);
  });

  it('does not call addToCart with invalid quantity', () => {
    const mockAddToCart = jest.fn();
    render(<Product product={mockProduct} addToCart={mockAddToCart} />);
    const input = screen.getByRole('spinbutton');
    act(() => {
      userEvent.type(input, '-4');
    });
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mockAddToCart).not.toHaveBeenCalled();
  });
});
