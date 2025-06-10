export interface Country {
  name: { common: string };
  flags: { png: string; alt: string };
  population: number;
  region: string;
  capital: string[];
  languages: { [key: string]: string };
  area: number;
}