import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todos/todosThunks";
import { Trash2 } from "lucide-react";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-xl mb-2 transition
      border border-gray-200 bg-white text-black
      dark:bg-zinc-900 dark:text-white dark:border-zinc-800
      ${todo.completed ? "opacity-60" : ""}`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <p className={`text-sm ${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </p>
      </div>

      <button
        type="button"
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-gray-400 hover:text-red-500 transition px-4 sm:px-6"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
