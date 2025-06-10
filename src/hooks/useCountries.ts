"use client";
import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/countryService';
import { Country } from '../types/country';

interface CountryHook {
  countries: Country[];
  loading: boolean;
  error: string | null;
}

export const useCountries = (): CountryHook => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoading(true);
        const data = await fetchCountries();
        setCountries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    loadCountries();
  }, []);

  return { countries, loading, error };
};