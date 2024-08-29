import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./slice/todoslice";

const TodoList = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodoHandler = () => {
    dispatch(addTodo({ text: input }));
    setInput("");
  };

  return (
    <div className="w-full p-5 flex justify-center flex-col">
      <p className="text-2xl text-white mx-auto">Your Todo</p>
      <p className="text-xl text-white mx-auto">
        Make your shopping easy with us.
      </p>
      <div className="flex justify-around items-center pt-8">
        <input
          placeholder="Enter your shopping item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-700 w-6/12 rounded border focus:border-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <button
          onClick={addTodoHandler}
          className="text-white bg-indigo-500 border-0 py-2 focus:outline-none hover:bg-indigo-600 rounded text-lg p-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TodoList;
