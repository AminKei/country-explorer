import { useState, useEffect } from "react";

interface DarkModeHook {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkMode = (): DarkModeHook => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode.toString());
      document.documentElement.classList.toggle("dark");
      return newMode;
    });
  };

  return { darkMode, toggleDarkMode };
};
