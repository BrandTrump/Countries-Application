import BackButton from "@/components/BackButton";
import { fetchCountry } from "@/helpers/fetchCountry";
import { getBorderName } from "@/helpers/getBorderName";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    countryName: string;
  };
}

async function CountryPage({ params: { countryName } }: Props) {
  const data = await fetchCountry(countryName);
  return (
    <section className="px-5 2xl:px-0 2xl:w-4/5 mx-auto mt-10">
      <div className="lg:px-0">
        <BackButton />
      </div>
      {data.map((country: Country) => (
        <div
          key={country.name.common}
          className="flex flex-col lg:flex-row lg:justify-between lg:px-0 lg:space-x-10"
        >
          <Image
            src={country.flags.png}
            alt={country.flags.alt === undefined ? "" : country.flags.alt}
            width={400}
            height={400}
            className="w-full md:w-1/2 aspect-[5/3] rounded-sm border dark:border-none"
          />

          <aside className="flex flex-col justify-around mt-10 lg:mt-0">
            <h1 className="font-bold text-2xl md:text-4xl">
              {country.name.common}
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between md:space-x-10 md:space-y-0 space-y-10 mt-5 lg:mt-0">
              <div className="space-y-3">
                <p className="font-semibold">
                  Native Name:{" "}
                  {Object.keys(country.name.nativeName)
                    .slice(0, 1)
                    .map((nativeCode) => (
                      <span key={nativeCode} className="font-normal">
                        {country.name.nativeName[nativeCode].common}
                      </span>
                    ))}
                </p>
                <p className="font-semibold">
                  Population:{" "}
                  <span className="font-normal">
                    {country.population.toLocaleString()}
                  </span>
                </p>
                <p className="font-semibold">
                  Region: <span className="font-normal">{country.region}</span>
                </p>
                <p className="font-semibold">
                  Sub Region:{" "}
                  <span className="font-normal">{country.subregion}</span>
                </p>
                <p className="font-semibold">
                  Capital:{" "}
                  <span className="font-normal">
                    {country.capital && country.capital[0]}
                  </span>
                </p>
              </div>
              <div className="space-y-3">
                <p className="font-semibold">
                  Top Level Domain:{" "}
                  <span className="font-normal">{country.tld}</span>
                </p>
                <p className="font-semibold">
                  Currencies:{" "}
                  {Object.keys(country.currencies).map((currencyCode) => (
                    <span key={currencyCode} className="font-normal">
                      {country.currencies[currencyCode].name}
                    </span>
                  ))}
                </p>

                <p className="font-semibold">
                  Languages:{" "}
                  {Object.keys(country.languages)
                    .slice(0, 3)
                    .map((languageKey: any, index: number, array: string[]) => (
                      <span key={languageKey} className="font-normal">
                        {country.languages[languageKey]}
                        {index !== array.length - 1 && ", "}
                      </span>
                    ))}
                </p>
              </div>
            </div>

            {!country.borders ? null : (
              <div className="font-semibold flex flex-col md:flex-row md:items-center gap-4 my-10">
                <p>Border Countries:</p>
                {country.borders &&
                  country.borders.slice(0, 3).map((border, i) => (
                    <Link
                      href={`/country/${border}`}
                      key={i}
                      className="py-1 px-6 shadow-md rounded-sm font-light border text-center dark:bg-[#2b3945] dark:border-none bg-white"
                    >
                      {border}
                    </Link>
                  ))}
              </div>
            )}
          </aside>
        </div>
      ))}
    </section>
  );
}

export default CountryPage;
