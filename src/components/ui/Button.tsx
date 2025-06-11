import type { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel: string;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  ariaLabel,
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-white text-black  rounded-md hover:border-2 border-gray-400 transition ${className}`}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);
