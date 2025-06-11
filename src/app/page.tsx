"use client";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Header } from "../components/Header";
import { CountryCard } from "../components/CountryCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorMessage } from "../components/ErrorMessage";
import { Footer } from "../components/Footer";
import Filters from "@/components/Filters";
import useSpecialOptions from "@/hooks/useSpecialOptions";

const Home: React.FC = () => {
  const {
    countries,
    darkMode,
    error,
    filteredCountries,
    language,
    languages,
    loading,
    region,
    regions,
    search,
    setLanguage,
    setRegion,
    setSearch,
    toggleDarkMode,
  } = useSpecialOptions();

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <ErrorMessage error={error} onRetry={() => window.location.reload()} />
    );

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "dark bg-gradient-to-br dark:bg-[#252525] "
          : "bg-gradient-to-br from-gray-50 to-gray-200"
      } transition-colors duration-500`}
    >
      <Head>
        <title>Country Explorer</title>
        <meta
          name="description"
          content="Explore countries with RESTCountries API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="max-w-7xl mx-auto p-6">
        <Filters
          search={search}
          setSearch={setSearch}
          region={region}
          setRegion={setRegion}
          regions={regions}
          language={language}
          setLanguage={setLanguage}
          languages={languages}
        />
        {filteredCountries.length === 0 ? (
          <div className="text-center p-8 bg-white dark:bg-[#252525] rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              No countries found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCountries.map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });