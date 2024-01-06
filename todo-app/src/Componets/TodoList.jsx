import React from "react";

const TodoList = ({ todos, removeTodo, editTodo }) => {
  return (
    <ul className="line">
      {todos &&
        todos.map((todo, index) => (
          <li className="list" key={index}>
            {todo}
            <div className="bu">
              <button className="delete" onClick={() => removeTodo(index)}>
              Remove
              </button>
              <button className="edit" onClick={() => editTodo(index)}>
              Edit
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
