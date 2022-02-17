import React from 'react';
import { useList } from '../../contexts/ListContext';

export default function Header() {
  const { items } = useList();

  return <header>Shopping List</header>;
}
