import React from 'react';
import { render } from '@testing-library/react';
import Shop from './Shop';

jest.mock(
  './Product',
  () => function MockProduct({ product }) {
    return (
      <div className="product">
        <span className="product-title">{product.title}</span>
        <img src={product.image} alt="" />
        <span>{product.description}</span>
        <span className="product-price">
          $
          {product.price}
        </span>
        <label htmlFor={`quant${product.id}`}>
          Quantity:
          <input type="number" min="1" id={`quant${product.id}`} />
        </label>
        <button type="button">ADD TO CART</button>
      </div>
    );
  },
);

describe('Shop component', () => {
  it('renders correctly with zero products', () => {
    const { container } = render(
      <Shop products={null} addToCart={jest.fn()} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with some products', () => {
    const mockProducts = [
      {
        title: 'Fake Product #1',
        image: '#',
        description: 'A fantastic fake product that does nothing',
        id: 1,
        price: 200,
      },
      {
        title: 'Fake Product #2',
        image: '#',
        description: 'Another phony placeholder',
        id: 2,
        price: 25,
      },
    ];

    const { container } = render(
      <Shop products={mockProducts} addToCart={jest.fn()} />,
    );
    expect(container).toMatchSnapshot();
  });
});
