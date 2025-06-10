import type { FC } from "react";

export const LoadingSpinner: FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center text-gray-900 dark:text-white">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p>Loading countries...</p>
    </div>
  </div>
);
