import React from "react";
import TodoList from "./TodoList";
import Todos from "./Todos";
const App = () => {
  return (
    <div className="flex flex-col w-full grow bg-slate-700 h-[100vh]">
      <TodoList />
      <Todos />
    </div>
  );
};

export default App;
