"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

type RegionName = {
  name: string;
};

interface Props {
  regionName: string;
}

const regions = [
  { name: "All" },
  { name: "Africa" },
  { name: "Americas" },
  { name: "Asia" },
  { name: "Europe" },
  { name: "Oceania" },
];

function SearchByRegion({ regionName }: Props) {
  const route = useRouter();
  const [selected, setSelected] = useState<RegionName>({ name: "" });

  const handleSelectedRegion = (region: RegionName) => {
    setSelected(region);
    if (region.name === "All") {
      route.push(`/`);
    } else {
      route.push(`/region/${region.name}`);
    }
  };

  return (
    <div className="w-full md:w-64">
      <Listbox value={selected} onChange={handleSelectedRegion}>
        <div className="relative">
          <Listbox.Button className="relative w-full rounded-lg bg-white py-3.5 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border dark:bg-[#2b3945] dark:border-none  cursor-pointer">
            <span className="block truncate">{regionName}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-[#2b3945] z-50">
              {regions.map((region, regionIdx) => (
                <Listbox.Option
                  key={regionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-amber-100 text-amber-900"
                        : "text-gray-900 dark:text-gray-300"
                    }`
                  }
                  value={region}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {region.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default SearchByRegion;
