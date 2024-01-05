import React from "react";

const TodoList = ({ todos, removeTodo, editTodo }) => {
  return (
    <ul>
      {todos &&
        todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
            <button onClick={() => editTodo(index)}>Edit</button>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
