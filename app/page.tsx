import CountriesList from "@/components/CountriesList";
import SearchByRegion from "@/components/SearchByRegion";
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
    <main className="p-5 md:p-0 lg:w-5/6 xl:w-3/5 mx-auto mb-10">
      <CountriesList search={search} />
    </main>
  );
}
