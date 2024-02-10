// App.js
import React, { useState, useEffect } from 'react';
import TodoInput from './pages/TodoInput';
import TodoList from './pages/TodoList';

export default function App() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    // Load items from localStorage when component mounts
    const storedItems = localStorage.getItem('todoListItems');
    if (storedItems) {
      setListItems(JSON.parse(storedItems));
    }
  }, []);

  function deleteItem(index) {
    // Retrieve the array from localStorage
    let todoListItems = JSON.parse(localStorage.getItem('todoListItems')) || [];

    // Check if the index is valid
    if (index >= 0 && index < todoListItems.length) {
      // Remove the item at the specified index
      todoListItems.splice(index, 1);

      // Update the localStorage with the modified array
      localStorage.setItem('todoListItems', JSON.stringify(todoListItems));

      // Optionally, you can return the updated array
      return setListItems(todoListItems)
    } else {
      console.error("Invalid index provided");
      return null;
    }
  }



  function addList(item) {
    if (item.trim() !== '') {
      const updatedList = [...listItems, item];
      setListItems(updatedList);
      // Save updated listItems to localStorage
      localStorage.setItem('todoListItems', JSON.stringify(updatedList));
    }
  }

  return (
    <>
      <h1 style={{ color: 'white' }}>TODO LIST</h1>
      <TodoInput addList={addList} />
      <TodoList items={listItems} deleteItem={deleteItem} />
    </>
  );
}
