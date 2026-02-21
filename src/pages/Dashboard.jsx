import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, addTodo } from "../features/todos/todosThunks";
import ThemeToggle from "../components/ThemeToggle";
import TodoItem from "../components/TodoItem";
import Todo from "../assets/Todo.png";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((s) => s.todos);

  const [input, setInput] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  useEffect(() => {
    if (dark) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
  }, [dark]);


  const handleAdd = () => {
    const clean = input.trim();
    if (!clean) return alert("Todo tidak boleh kosong");
    dispatch(addTodo(clean));
    setInput("");
  };

  const incomplete = items.filter((t) => !t.completed);
  const complete = items.filter((t) => t.completed);
  const total = items.length;


  return (
        <div className="min-h-screen relative bg-white dark:bg-[#1A1A1A]">

        <div className="absolute top-0 left-0 w-full 
            h-[280px] sm:h-[165px] bg-gray-200 
            dark:bg-gradient-to-b dark:from-black dark:bg-[#1A1A1A]"/>

        <div className="relative flex justify-center">
            <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8 py-10">

            <div className="flex flex-col items-center gap-2 mb-6">
                <img src={Todo} alt="Logo" />
                <ThemeToggle dark={dark} setDark={setDark} />
            </div>

            <div className="flex gap-2 mb-4 flex-col sm:flex-row">
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tambah tugas baru"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300
                bg-white text-black placeholder-gray-400
                dark:bg-zinc-900 dark:text-white dark:border-zinc-700"
                />
                <button
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
                >
                Tambah
                </button>
            </div>

            {loading && (
                <p className="text-sm text-gray-500">Loading...</p>
            )}

            <div className="flex justify-between items-center mb-3">

            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-blue-400">
                Belum Selesai
                </span>
                <span className="px-2 py-0.5 text-xs rounded-full
                bg-blue-400 text-white dark:bg-zinc-700">
                {incomplete.length}
                </span>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-purple-400">
                Selesai
                </span>
                <span className="px-3 py-0.5 text-xs rounded-full
                bg-purple-400 text-white dark:bg-zinc-700">
                {complete.length} dari {total}
                </span>
            </div>

            </div>

            <div className="mb-4">
                {incomplete.length === 0 && (
                <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                    Belum ada tugas
                </p>
                )}
                {incomplete.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>

            <div>
                {complete.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>

            </div>
        </div>
        </div>
  );
}