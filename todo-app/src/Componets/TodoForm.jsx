import React, { useState } from "react";
import "./Todo.css";


const TodoForm = ({ addTodo, editTodo, editIndex }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      if (editIndex !== null) {
        // If editing, call the editTodo function
        editTodo(editIndex, todo);
      } else {
        // If not editing, call the addTodo function
        addTodo(todo);
      }
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="textbox"
        type="text"
        placeholder={editIndex !== null ? "Edit todo" : "Add a new "}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="add" type="submit">
        {editIndex !== null ? "Edit" : "Add "}
      </button>
    </form>
  );
};

export default TodoForm;
