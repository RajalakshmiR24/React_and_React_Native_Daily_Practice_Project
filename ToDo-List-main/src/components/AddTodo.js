// AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    addTodo(todoText);
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input type="text" value={todoText} onChange={handleChange} placeholder="Add a new todo..." className="border rounded-md px-2 py-1 mr-2" />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md">Add Todo</button>
    </form>
  );
};

export default AddTodo;
