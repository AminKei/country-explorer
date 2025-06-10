import { useMemo, useState } from "react";
import { useCountries } from "./useCountries";
import { useTheme } from "@/contexts/ThemeContext";

const useSpecialOptions = () => {
  const { countries, loading, error } = useCountries();
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const { darkMode, toggleDarkMode } = useTheme();

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesRegion = region === "" || country.region === region;
      const matchesLanguage =
        language === "" ||
        Object.values(country.languages || {}).includes(language);
      return matchesSearch && matchesRegion && matchesLanguage;
    });
  }, [countries, search, region, language]);

  const regions = useMemo(() => {
    const uniqueRegions = [...new Set(countries.map((c) => c.region))];
    return uniqueRegions.sort();
  }, [countries]);

  const languages = useMemo(() => {
    const allLanguages = countries.flatMap((country) =>
      Object.values(country.languages || {})
    );
    const uniqueLanguages = [...new Set(allLanguages)];
    return uniqueLanguages.sort();
  }, [countries]);

  return {
    countries,
    loading,
    error,
    search,
    setSearch,
    region,
    setRegion,
    language,
    setLanguage,
    darkMode,
    toggleDarkMode,
    filteredCountries,
    regions,
    languages,
  };
};
export default useSpecialOptions;
