export async function fetchAllCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
