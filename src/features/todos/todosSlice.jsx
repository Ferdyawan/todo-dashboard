import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload.slice(0, 10);
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodoLocal: (state, action) => {
      state.items.unshift(action.payload);
    },
    deleteTodoLocal: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    toggleTodoLocal: (state, action) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  addTodoLocal,
  deleteTodoLocal,
  toggleTodoLocal,
} = todosSlice.actions;

export default todosSlice.reducer;
