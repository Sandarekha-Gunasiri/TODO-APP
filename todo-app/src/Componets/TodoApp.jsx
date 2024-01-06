import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './Todo.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index);
  };

  const updateTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
    setEditIndex(null); // Clear edit mode after updating
  };

  return (
    <div>
      <h1 className="header">TODO APP</h1>
      <TodoForm addTodo={addTodo} editTodo={updateTodo} editIndex={editIndex} />
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
};

export default TodoApp;
