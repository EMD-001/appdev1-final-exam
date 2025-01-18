import React from "react";

const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo.trim()); // Add the new todo
      setNewTodo(""); // Clear the input field
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} // Update input value
        placeholder="Enter todo title"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
