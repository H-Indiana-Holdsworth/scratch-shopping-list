import React from 'react';
import Item from './Item';

export default function ItemList({ items, onEditItem, onDeleteItem }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} onEditItem={onEditItem} onDeleteItem={onDeleteItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
