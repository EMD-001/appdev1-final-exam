import React from "react";
import { TodoProvider } from "./context/TodoContext"; 
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoProvider> 
      <div>
        <h1>Todo App</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
