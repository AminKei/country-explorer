import type { FC } from "react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => (
  <header className="p-6 bg-white dark:bg-[#252525] shadow-md ">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Country Explorer
      </h1>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="sr-only peer"
          aria-label="Toggle dark mode"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-600 rounded-full peer peer-checked:bg-blue-600"></div>
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
      </label>
    </div>
  </header>
);
