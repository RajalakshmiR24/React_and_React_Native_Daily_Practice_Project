// TodoList.js
import React from 'react';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <ul className="list-disc pl-4">
      {todos.map(todo => (
        <li key={todo.id} className="mb-2">
          <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
          <button onClick={() => toggleComplete(todo.id)} className="ml-2 px-2 py-1 bg-green-500 text-white rounded-md">{todo.completed ? 'Undo' : 'Complete'}</button>
          <button onClick={() => deleteTodo(todo.id)} className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
