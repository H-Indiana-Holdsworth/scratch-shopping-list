import { createContext, useContext, useReducer } from 'react';

const ListContext = createContext();

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

    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }

    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

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

function ListProvider({ children }) {
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

  const handleDeleteItem = (itemId) => {
    dispatch({
      type: 'deleted',
      id: itemId,
    });
  };

  return (
    <ListContext.Provider value={{ items, handleAddItem, handleEditItem, handleDeleteItem }}>
      {children}
    </ListContext.Provider>
  );
}

const useList = () => {
  const context = useContext(ListContext);

  if (context === undefined) {
    throw new Error('You must wrap component in ListProvider to use useList hook');
  }

  return context;
};

export { ListProvider, useList };
