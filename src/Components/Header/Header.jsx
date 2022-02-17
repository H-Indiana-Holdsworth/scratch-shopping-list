import React from 'react';
import { useList } from '../../contexts/ListContext';

export default function Header() {
  const { items, handleClearItems } = useList();

  return (
    <>
      <header>Shopping List</header>
      <span>Items: {items.length}</span>
      <button aria-label="clear-button" onClick={handleClearItems}>
        Clear Items
      </button>
    </>
  );
}
