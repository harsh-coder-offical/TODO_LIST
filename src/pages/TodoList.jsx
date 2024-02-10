// TodoList.js
import React from 'react';

export default function TodoList({ items, deleteItem }) {
  return (
    <>
      {items.map((e, index) => (
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', padding: '1rem' }} key={index}>
          <h2>{e}</h2>
          <span>
            <i
              className="fa fa-trash"
              style={{ color: "#5485f0", cursor: 'pointer' }}
              onClick={() => deleteItem(index)} // Pass a function reference
              aria-hidden="true"
            ></i>
          </span>
        </div>
      ))}
    </>
  );
}
