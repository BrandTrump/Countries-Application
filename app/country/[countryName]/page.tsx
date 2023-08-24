import BackButton from "@/components/BackButton";
import { fetchCountry } from "@/helpers/fetchCountry";
import Image from "next/image";

interface Props {
  params: {
    countryName: string;
  };
}

async function CountryPage({ params: { countryName } }: Props) {
  const data = await fetchCountry(countryName);
  return (
    <section className="lg:w-5/6 xl:w-3/5 mx-auto mt-10">
      <BackButton />
      {data.map((country: Country) => (
        <div key={country.name.common} className="flex justify-between">
          <Image
            src={country.flags.png}
            alt={country.flags.alt === undefined ? "" : country.flags.alt}
            width={400}
            height={400}
            className="w-1/2 aspect-[5/3] rounded-sm border"
          />

          <aside className="flex flex-col justify-around">
            <h1 className="font-bold text-4xl">{country.name.common}</h1>
            <div className="flex justify-between space-x-10">
              <div className="space-y-3">
                <p className="font-semibold">
                  Native Name:{" "}
                  <span className="font-normal">{country.name.official}</span>
                </p>
                <p className="font-semibold">
                  Population:{" "}
                  <span className="font-normal">{country.population}</span>
                </p>
                <p className="font-semibold">
                  Region: <span className="font-normal">{country.region}</span>
                </p>
                <p className="font-semibold">
                  Sub Region:{" "}
                  <span className="font-normal">{country.subregion}</span>
                </p>
                <p className="font-semibold">
                  capital:{" "}
                  <span className="font-normal">{country.capital[0]}</span>
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
                    .slice(0, 1)
                    .map((languageKey: any) => (
                      <span key={languageKey} className="font-normal">
                        {country.languages[languageKey]}
                      </span>
                    ))}
                </p>
              </div>
            </div>

            {!country.borders ? null : (
              <p className="font-semibold flex items-center gap-4">
                Border Countries:{" "}
                {country.borders &&
                  country.borders.slice(0, 3).map((border, i) => (
                    <span
                      key={i}
                      className="py-1 px-6 shadow-md rounded-sm font-light border"
                    >
                      {border}
                    </span>
                  ))}
              </p>
            )}
          </aside>
        </div>
      ))}
    </section>
  );
}

export default CountryPage;
