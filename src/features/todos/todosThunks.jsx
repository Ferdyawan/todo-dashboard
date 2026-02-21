import {
  fetchStart,
  fetchSuccess,
  fetchError,
  addTodoLocal,
  deleteTodoLocal,
  toggleTodoLocal,
} from "./todosSlice";

export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    dispatch(fetchSuccess(data));
  } catch (err) {
    dispatch(fetchError(err.message));
  }
};

export const addTodo = (title) => async (dispatch) => {
  const newTodo = {
    id: Date.now(),
    title,
    completed: false,
  };
  dispatch(addTodoLocal(newTodo));
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch(deleteTodoLocal(id));
};

export const toggleTodo = (id) => async (dispatch) => {
  dispatch(toggleTodoLocal(id));
};
