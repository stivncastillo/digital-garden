import { useEffect, useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io/index";

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState("light");

  const handleClick = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? "light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="p-px rounded-md group hidden md:block hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-500 duration-300 ease-in-out transition-all">
      <button
        className="bg bg-slate-200/80 dark:bg-indigo-900/80 rounded-md p-2 text-slate-700 dark:text-slate-50"
        onClick={handleClick}
      >
        {theme === "light" ? <IoIosMoon /> : <IoIosSunny />}
      </button>
    </div>
  );
}
