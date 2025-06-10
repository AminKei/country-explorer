import type { FC } from "react";
import { Card } from "./ui/Card";
import { formatNumber } from "../utils/formatters";
import type { Country } from "../types/country";
import Icon from "./ui/Icon";

interface CountryCardProps {
  country: Country;
}

export const CountryCard: FC<CountryCardProps> = ({ country }) => (
  <Card>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-40 object-cover rounded-md mb-4"
      preserveAspectRatio="xMidYMid slice"
    >
      <image
        href={country.flags.png}
        width="100"
        height="100"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
      {country.name.common}
    </h2>
    <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
      <Icon type="population" />
      Population: {formatNumber(country.population)}
    </p>
    <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
      <Icon type="region" />
      Region: {country.region}
    </p>
    <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
      <Icon type="capital" />
      Capital: {country.capital?.[0] || "N/A"}
    </p>
    <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
      <Icon type="languages" />
      Languages: {Object.values(country.languages || {}).join(", ") || "N/A"}
    </p>
    <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
      <Icon type="area" />
      Area: {formatNumber(country.area)} km²
    </p>
  </Card>
);
