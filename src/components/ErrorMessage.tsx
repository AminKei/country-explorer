import type { FC } from "react";
import { Button } from "./ui/Button";

interface ErrorMessageProps {
  error: string;
  onRetry: () => void;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error, onRetry }) => (
  <div className="flex items-center justify-center min-h-screen ">
    <div className="text-center p-10 bg-white dark:bg-black rounded-2xl shadow-2xl max-w-md w-full animate-fadeIn">
      <div className="flex justify-center mb-6">
        <div className="text-red-500 animate-pulse">
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
        Something Went Wrong
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-base">{error}</p>
      <Button
        onClick={onRetry}
        ariaLabel="Retry loading countries"
        className="mt-4 bg-red-500 hover:border-2 text-black font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
      >
        Try Again
      </Button>
    </div>
  </div>
);
