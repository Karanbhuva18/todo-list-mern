import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./slice/todoslice";
import DeleteIcon from "./assets/DeleteIcon"; // Import the custom SVG component

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center w-9/12 mx-auto">
      <ul className="w-full flex justify-center mx-auto flex-col">
        {todos.map((item) => (
          <li key={item.id} className="flex justify-between w-full py-3">
            <span>{item.name}</span>
            <button onClick={() => dispatch(removeTodo({ id: item.id }))}>
              <DeleteIcon className="w-6 h-6" /> {/* Use the SVG component */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
