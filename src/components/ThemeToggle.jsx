export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-xs px-3 py-1 rounded-full bg-blue-500 text-white"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
