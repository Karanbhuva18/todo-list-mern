import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "/src/slice/todoslice.js";

export const store = configureStore({
  reducer: {
    todos: todoReducer, // 'todos' can be any key you choose
  },
});
