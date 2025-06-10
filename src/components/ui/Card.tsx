import type { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className = "" }) => (
  <div
    className={`bg-white dark:bg-[#252525] p-4 border-gray-500 border-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);
