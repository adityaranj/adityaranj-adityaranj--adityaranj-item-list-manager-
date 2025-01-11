import React, { useState } from 'react';

function ItemListManager() {
  const [items, setItems] = useState([]); // State for the list of items
  const [inputValue, setInputValue] = useState(''); // State for the input field

  // Function to handle adding a new item to the list
  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]); // Add the input value to the list
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Item List Manager</h1>

      {/* Input field */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update the input field value
        placeholder="Enter a new item"
        style={{
          padding: '10px',
          marginRight: '10px',
          width: '300px',
          fontSize: '16px',
        }}
      />

      {/* Add Item Button */}
      <button
        onClick={addItem}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Add Item
      </button>

      {/* List of items */}
      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: '10px',
              fontSize: '18px',
              background: '#f8f8f8',
              margin: '5px 0',
              borderRadius: '5px',
              textAlign: 'left',
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
