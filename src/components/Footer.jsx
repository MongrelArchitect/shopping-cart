import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          Designed by
          {' '}
          <a
            target="_blank"
            href="http://www.seanericthomas.com"
            rel="noreferrer"
          >
            Sean Eric Thomas
          </a>
          .
        </li>
        <li>
          Products from
          {' '}
          <a target="_blank" href="https://fakestoreapi.com/" rel="noreferrer">
            Fake Store API
          </a>
          .
        </li>
        <li>
          Home image from
          {' '}
          <a
            target="_blank"
            href="https://unsplash.com/photos/c9FQyqIECds"
            rel="noreferrer"
          >
            Unsplash
          </a>
          .
        </li>
      </ul>
    </div>
  );
}
