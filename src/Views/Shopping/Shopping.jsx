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

    case 'edited': {
      return items.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
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

  const handleEditItem = (item) => {
    dispatch({
      type: 'edited',
      item,
    });
  };

  return (
    <div>
      <AddItem onAddItem={handleAddItem} />
      <ItemList items={items} onEditItem={handleEditItem} />
    </div>
  );
}
