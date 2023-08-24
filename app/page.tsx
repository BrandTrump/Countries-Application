import SearchSection from "@/components/SearchSection";
import { fetchAllCountries } from "@/helpers/fetchAllCountries";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await fetchAllCountries();

  return (
    <main className="lg:w-5/6 xl:w-3/5 mx-auto">
      <SearchSection countries={data} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
        {data.map((country: Country) => (
          <Link
            href={`/country/${country.name.common}`}
            key={country.name.common}
            className="shadow-lg rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer dark:bg-gray-600/50"
          >
            <Image
              src={country.flags.png}
              alt={country.flags.alt === undefined ? "" : country.flags.alt}
              width={400}
              height={400}
              className="w-full h-52 rounded-t-md border-b"
            />
            <div className="px-4 py-8">
              <h1 className="font-bold text-lg">{country.name.common}</h1>

              <div className="mt-3">
                <p className="font-semibold">
                  Population:{" "}
                  <span className="font-normal">{country.population}</span>
                </p>
                <p className="font-semibold">
                  Region: <span className="font-normal">{country.region}</span>
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
    </main>
  );
}
