"use client";

import { useTheme } from "@/context/theme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="border px-4 py-2 rounded bg-gray-100"
      onClick={toggleTheme}
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
};
