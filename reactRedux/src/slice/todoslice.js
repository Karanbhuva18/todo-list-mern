import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), name: "karan" }], // Call nanoid() to generate ID
};

export const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text } = action.payload;
      const todo = {
        id: nanoid(), // Call nanoid() to generate ID
        name: text,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
    },
  },
});

export const { addTodo, removeTodo } = todoslice.actions;
export default todoslice.reducer;
