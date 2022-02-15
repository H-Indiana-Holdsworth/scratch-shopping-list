import React from 'react';
import AddItem from '../../Components/AddItem/AddItem';

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

export default function Shopping() {
  return (
    <div>
      <AddItem />
    </div>
  );
}
