import type { FC } from "react";
import { Input } from "./ui/Input";
import { Select } from "./ui/Select";

interface FiltersProps {
  search: string;
  setSearch: (value: string) => void;
  region: string;
  setRegion: (value: string) => void;
  regions: string[];
  language: string;
  setLanguage: (value: string) => void;
  languages: string[];
}

const Filters: FC<FiltersProps> = ({
  search,
  setSearch,
  region,
  setRegion,
  regions,
  language,
  setLanguage,
  languages,
}) => (
  <div className="flex  flex-col md:flex-row gap-6 mb-8 p-6 bg-white dark:bg-[#252525] rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
    <div className="relative w-full">
      <Input
        value={search}
        onChange={setSearch}
        placeholder="Search countries..."
        ariaLabel="Search countries"
        className="w-full pl-12 py-3 border-2 border-gray-200 dark:bg-[#2c2c2c] rounded-lg   text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200"
      />
      <svg
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <div className="relative w-full md:w-1/2">
      <Select
        value={region}
        onChange={setRegion}
        options={regions}
        defaultOption="All Regions"
        ariaLabel="Filter by region"
        className="w-full py-3 pl-12 pr-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-[#2c2c2c] text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200 appearance-none"
      />
      <svg
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H7z"
        />
      </svg>
    </div>
    <div className="relative w-full md:w-1/2">
      <Select
        value={language}
        onChange={setLanguage}
        options={languages}
        defaultOption="All Languages"
        ariaLabel="Filter by language"
        className="w-full py-3 pl-12 pr-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-[#2c2c2c] text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200 appearance-none"
      />
      <svg
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    </div>
  </div>
);
export default Filters;
