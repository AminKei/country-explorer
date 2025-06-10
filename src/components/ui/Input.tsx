import type { FC } from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  ariaLabel: string;
  className?: string;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  ariaLabel,
  className = "",
}) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white dark:bg-[#252525] dark:text-white dark:border-gray-600 ${className}`}
    aria-label={ariaLabel}
  />
);
