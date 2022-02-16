import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('ensures adding, deleting, editing, and display functionality', () => {
  render(<App />);

  // Lines 10-23 testing for add item functionality

  // looks for input and add button
  const addInput = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: /add/i });

  // user types new item into input
  const newItem = 'Cheese';
  userEvent.type(addInput, newItem);

  // user clicks add button
  userEvent.click(addButton);

  // new item is displayed as a list item
  const cheeseItem = screen.getByText(/cheese/i);
  expect(cheeseItem).toBeInTheDocument();

  // lines 27-38 test edit item functionality

  // user clicks edit button
  const editButton = screen.getByRole('button', { name: /edit cheese/i });
  userEvent.click(editButton);

  // user types new name into input
  const editedItemInput = screen.getByRole('textbox', { name: /edit cheese/i });
  userEvent.type(editedItemInput, '{selectall}{del}Cheeses');

  // user clicks save button
  const saveButton = screen.getByRole('button', { name: /save/i });
  userEvent.click(saveButton);

  // new edited item renders in list
  expect(screen.getByText(/cheeses/i)).toBeInTheDocument();
});

test('tests delete item functionality', () => {
  render(<App />);
  // lines 40- 48 test delete item functionality

  // looks for input and add button
  const addInput = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: /add/i });

  // user types new item into input
  const newItem = 'Cheeses';
  userEvent.type(addInput, newItem);

  // user clicks add button
  userEvent.click(addButton);
  const deletedItem = screen.getByText(/cheeses/i);

  // user clicks delete button
  const deleteButton = screen.getByRole('button', { name: /delete cheeses button/i });
  userEvent.click(deleteButton);

  // list items display without deleted item
  expect(deletedItem).not.toBeInTheDocument();
});
