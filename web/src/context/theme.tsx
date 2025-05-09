"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "dark";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    const initialTheme: Theme = storedTheme === "dark" ? "dark" : "dark";

    const html = document.documentElement;
    if (initialTheme === "dark") {
      html.classList.add("dark");
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
      html.classList.remove("dark");
    }

    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "dark" : "dark";

    setTheme(nextTheme);

    const html = document.documentElement;
    //html.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
