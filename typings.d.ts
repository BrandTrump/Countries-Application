interface NativeName {
  official: string;
  common: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Language {
  eng: string;
  smo: string;
}

interface Translations {
  [key: string]: CommonName;
}

interface Demonyms {
  eng: Demonym;
  fra: Demonym;
}

interface Demonym {
  f: string;
  m: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface Country {
  find(arg0: (country: any) => any): any;
  filter(arg0: (country: any) => any): unknown;
  name: CommonName;
  nativeName: { [key: string]: NativeName };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: Currency };
  idd: { root: string; suffixes: string[] };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: string;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  borders?: string[];
  population: number;
  fifa: string;
  car: { signs: string[]; side: string };
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: object;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}
