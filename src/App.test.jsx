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
  // const editButton = screen.getByRole('button', { name: /edit/i });
  // userEvent.click(editButton);
  // save button and input with item's text renders
  //    const list = screen.getByRole('list');
  //    within(list).getByRole('textbox');

  // user types new name into input

  // user clicks save button

  // new edited item renders in list

  // lines 40- 48 test delete item functionality

  // user clicks delete button
  //   const deleteButton = screen.getByRole('button', { name: /delete/i });
  //   userEvent.click(deleteButton);

  // list items display without deleted item
  //   const deletedItem = screen.getByText(/cheese/i);
  //   expect(deletedItem).
});
