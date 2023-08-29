export async function fetchBorderNames(codes: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name,cca3`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
