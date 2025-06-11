import type { FC } from "react";

export const LoadingSpinner: FC = () => (
  <div className="flex items-center justify-center min-h-screen ">
    <div className="text-center text-gray-900 dark:text-black">
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin" />
        <div className="absolute inset-0 border-4 border-transparent border-b-purple-500 border-l-purple-500 rounded-full animate-spin animate-reverse" />
      </div>
      <p className="text-lg font-semibold animate-pulse">
        Loading countries...
      </p>
    </div>
  </div>
);
