import { Country } from "./country.interface";
import { Region } from "./region.type";


export interface ChacheStore {
  byCapital: termCountries
  byCountries: termCountries
  byRegion: regionCountries
}

export interface termCountries {
  term: string;
  countries: Country[]
}

export interface regionCountries {
  region: Region;
  countries: Country[]
}
