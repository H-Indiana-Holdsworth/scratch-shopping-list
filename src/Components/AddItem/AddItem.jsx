import React, { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(newItem);
    setNewItem('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-form">
        <input
          className="item-input"
          placeholder="Add Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
