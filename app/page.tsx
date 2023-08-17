import { fetchAllCountries } from "@/helpers/fetchAllCountries";

export default async function Home() {
  const data = await fetchAllCountries();

  return (
    <main>
      {data.map((country: any) => (
        <h1 key={country.name.common}>{country.name.common}</h1>
      ))}
    </main>
  );
}
