import type { FC } from "react";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  defaultOption: string;
  ariaLabel: string;
  className?: string;
}

export const Select: FC<SelectProps> = ({
  value,
  onChange,
  options,
  defaultOption,
  ariaLabel,
  className = "",
}) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white dark:bg-[#252525] dark:text-white  ${className}`}
    aria-label={ariaLabel}
  >
    <option value="">{defaultOption}</option>
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);
