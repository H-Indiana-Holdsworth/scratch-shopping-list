import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('adding, deleting, editing, clearing, and display functionality', () => {
  render(<App />);

  // renders initial items
  expect(screen.getByRole('list', { name: /item-list/i }).children).toHaveLength(2);

  // Testing for add item functionality
  const addInput = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: /add/i });
  const newItem = 'Cheese';
  userEvent.type(addInput, newItem);
  userEvent.click(addButton);
  const cheeseItem = screen.getByText(/cheese/i);
  expect(cheeseItem).toBeInTheDocument();

  // Test edit item functionality
  const editButton = screen.getByRole('button', { name: /edit cheese/i });
  userEvent.click(editButton);
  const editedItemInput = screen.getByRole('textbox', { name: /edit cheese/i });
  userEvent.type(editedItemInput, '{selectall}{del}Cheeses');
  const saveButton = screen.getByRole('button', { name: /save/i });
  userEvent.click(saveButton);
  expect(screen.getByText(/cheeses/i)).toBeInTheDocument();

  // Tests clear item functionality
  const clearButton = screen.getByRole('button', { name: /clear-button/i });
  userEvent.click(clearButton);
  expect(screen.getByRole('list', { name: /item-list/i }).children).toHaveLength(0);
});

test('tests delete item functionality', () => {
  render(<App />);

  // Test delete item functionality
  const addInput = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: /add/i });
  const newItem = 'Cheeses';
  userEvent.type(addInput, newItem);
  userEvent.click(addButton);
  const deletedItem = screen.getByText(/cheeses/i);
  const deleteButton = screen.getByRole('button', { name: /delete cheeses button/i });
  userEvent.click(deleteButton);
  expect(deletedItem).not.toBeInTheDocument();
});
