import React, { useReducer } from 'react';
import AddItem from '../../Components/AddItem/AddItem';
import ItemList from '../../Components/ItemList/ItemList';

const initialItems = [
  {
    id: 0,
    text: 'Water',
    done: false,
  },
  {
    id: 1,
    text: 'Bread',
    done: false,
  },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function Shopping() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };

  return (
    <div>
      <AddItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
