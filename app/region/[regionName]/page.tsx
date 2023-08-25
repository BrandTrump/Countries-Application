import CountriesList from "@/components/CountriesList";
import { fetchCountryByRegion } from "@/helpers/fetchCountryByRegion";
import React from "react";

interface RegionName {
  params: {
    regionName: string;
  };
}

function RegionPage({ params: { regionName } }: RegionName) {
  async function search(search: string) {
    "use server";
    const data = await fetchCountryByRegion(regionName);

    return data.filter((country: Country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <main className="p-5 md:p-0 lg:w-5/6 xl:w-3/5 mx-auto mb-10">
      <CountriesList search={search} regionName={regionName} />
    </main>
  );
}

export default RegionPage;
