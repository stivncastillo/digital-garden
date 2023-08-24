import React, { useEffect, useState } from "react";
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
    <div className="relative group md:block">
      <button
        className="bg-white rounded-md p-2 border border-black text-slate-700 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
        onClick={handleClick}
        aria-label="Theme toggle button"
      >
        {theme === "light" ? <IoIosMoon size={20} /> : <IoIosSunny size={20} />}
      </button>

      <div className="absolute top-0 bottom-0 right-0 left-0 group-hover:bg-blue-marguerite-600 rounded-md -z-10"></div>
    </div>
  );
}
