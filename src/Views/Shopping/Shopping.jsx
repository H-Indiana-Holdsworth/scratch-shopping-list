import React from 'react';
import AddItem from '../../Components/AddItem/AddItem';
import ItemList from '../../Components/ItemList/ItemList';
import { useList } from '../../contexts/ListContext';

export default function Shopping() {
  const { items, handleAddItem, handleDeleteItem, handleEditItem } = useList();

  return (
    <div>
      <AddItem onAddItem={handleAddItem} />
      <ItemList items={items} onEditItem={handleEditItem} onDeleteItem={handleDeleteItem} />
    </div>
  );
}
