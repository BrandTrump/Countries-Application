export async function fetchCountryByRegion(region: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/region/${region}?fields=name,flags,population,region,capital,cca3`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
