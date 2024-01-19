"use client";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
const themes = {
  lemonade: "lemonade",
  night: "night",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.lemonade);
  const toggleTheme = () => {
    const newTheme = theme === themes.lemonade ? themes.night : themes.lemonade;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === "lemonade" ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
