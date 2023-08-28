import CountriesList from "@/components/CountriesList";
import { fetchAllCountries } from "@/helpers/fetchAllCountries";

export default function Home() {
  async function search(search: string) {
    "use server";
    const data = await fetchAllCountries();

    return data.filter((country: Country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <main className="p-5 2xl:p-0 2xl:w-4/5 mx-auto mb-10">
      <CountriesList search={search} regionName={"Filter by Region"} />
    </main>
  );
}
