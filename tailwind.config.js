/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}", // شامل تمام فایل‌های ts و tsx در src
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/components/ui/*.{tsx}",
  ],
  darkMode: "class", // برای پشتیبانی از دارک مود
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#10b981",
      },
    },
  },
  plugins: [],
};


