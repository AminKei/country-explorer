
import { Country } from '../types/country';

export const fetchCountries = async (): Promise<Country[]> => {
  const fields = 'name,flags,population,region,capital,languages,area';
  const response = await fetch(`https://restcountries.com/v3.1/all?fields=${fields}`);
  if (!response.ok) throw new Error('Failed to fetch countries');
  return response.json();
};