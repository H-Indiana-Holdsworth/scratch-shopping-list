import React, { useState } from 'react';

export default function Item({ item, onEditItem, onDeleteItem }) {
  const [isEditing, setIsEditing] = useState(false);

  let itemContent;
  if (isEditing) {
    itemContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            onEditItem({
              ...item,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p>{item.text}</p>
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <div>
      {itemContent}
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </div>
  );
}
