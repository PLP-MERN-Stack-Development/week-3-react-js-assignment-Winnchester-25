import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="border px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
};

export default Navbar;
