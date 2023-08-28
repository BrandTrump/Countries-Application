"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchByRegion from "./SearchByRegion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Props {
  search: (search: string) => Promise<string[]>;
  regionName: string;
}

function CountriesList({ search, regionName }: Props) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    //@ts-ignore
    search("").then((name) => setCountries(name));
  }, [search]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    //@ts-ignore
    setCountries(await search(searchString));
  };

  return (
    <>
      <div className="my-10 md:my-14 md:px-8 lg:px-0 flex flex-col md:justify-between md:items-center md:flex-row space-y-4 md:space-y-0">
        <form className="relative">
          <input
            type="text"
            value={searchString}
            placeholder="Search for a country..."
            className="py-3 px-4 w-full md:w-96 shadow-md rounded-md border dark:bg-[#2b3945] dark:border-none"
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="absolute top-1/2 -translate-y-1/2 right-0 mr-3"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          </button>
        </form>
        <SearchByRegion regionName={regionName} />
      </div>
      {countries.length === 0 && searchString !== "" ? (
        <h1 className="font-bold text-2xl text-center">No Countries Found</h1>
      ) : (
        <>
          <div className="grid md:grid-cols-2 md:px-8 lg:px-0 xl:grid-cols-3 2xl:grid-cols-4 gap-14">
            {countries.map((country: Country) => (
              <Link
                href={`/country/${country.cca3}`}
                key={country.name.common}
                className="shadow-lg rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer dark:bg-[#2b3945] bg-white"
              >
                <Image
                  src={country.flags.png}
                  alt={country.flags.alt === undefined ? "" : country.flags.alt}
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-t-md border-b dark:border-none aspect-[5/3]"
                />
                <div className="px-4 py-8">
                  <h1 className="font-bold text-lg">{country.name.common}</h1>

                  <div className="mt-3">
                    <p className="font-semibold">
                      Population:{" "}
                      <span className="font-normal">
                        {country.population.toLocaleString()}
                      </span>
                    </p>
                    <p className="font-semibold">
                      Region:{" "}
                      <span className="font-normal">{country.region}</span>
                    </p>
                    {!country.capital ? null : (
                      <p className="font-semibold">
                        Capital:{" "}
                        <span className="font-normal">
                          {country.capital && country.capital[0]}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default CountriesList;
