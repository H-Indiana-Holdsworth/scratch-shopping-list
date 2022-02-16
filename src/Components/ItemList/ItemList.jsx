import React from 'react';

export default function ItemList({ items }) {
  console.log('items', items);
  return (
    <div>
      <ul>
        {items.map(({ id, text }) => (
          <li key={id}>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
