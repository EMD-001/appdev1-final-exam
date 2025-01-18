import React, { useState } from "react";
import TodoForm from "./TodoForm"; // Import TodoForm component
import { useTodos } from "../context/TodoContext";

const TodoList = () => {
  const { todos, loading, toggleComplete, deleteTodo, addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {/* Render TodoForm with the required props */}
      <TodoForm addTodo={addTodo} newTodo={newTodo} setNewTodo={setNewTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            {/* Apply conditional styling for completed todos */}
            <span
              onClick={() => toggleComplete(todo.id)} // Toggle completion status
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.title}
            </span>

            {/* Implement a delete button to remove a todo */}
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
