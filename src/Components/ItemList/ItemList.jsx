import React from 'react';
import Item from './Item';

export default function ItemList({ items, onEditItem }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} onEditItem={onEditItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
