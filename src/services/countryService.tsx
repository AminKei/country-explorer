import { API_BASE_URL } from "@/utils/api";
import { Country } from "../types/country";

export const fetchCountries = async (): Promise<Country[]> => {
  const fields = "name,flags,population,region,capital,languages,area";
  const response = await fetch(`${API_BASE_URL}=${fields}`);
  if (!response.ok) throw new Error("Failed to fetch countries");
  return response.json();
};
