import React from 'react';

export default function AddItem() {
  return (
    <div>
      <form className="user-form">
        <input className="item-input" type="text" placeholder="Add Item" />
        <button>Add</button>
      </form>
    </div>
  );
}
