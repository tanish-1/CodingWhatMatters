import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 border rounded bg-gray-200"
      style={{ backgroundColor: theme === "dark" ? "#333" : "#e2e8f0", color: theme === "dark" ? "white" : "black" }}
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;