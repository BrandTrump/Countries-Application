export async function fetchCountry(country: string) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
