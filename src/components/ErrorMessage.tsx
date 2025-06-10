import type { FC } from "react";
import { Button } from "./ui/Button";

interface ErrorMessageProps {
  error: string;
  onRetry: () => void;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error , onRetry}) => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center text-red-500 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <p className="text-lg font-semibold">Error: {error}</p>
      <Button
        onClick={onRetry as any}
        ariaLabel="Retry loading countries"
        className="mt-4"
      >
        Retry
      </Button>
    </div>
  </div>
);
