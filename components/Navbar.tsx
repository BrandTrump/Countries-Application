import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

function Navbar() {
  return (
    <nav className="py-6 px-5 md:px-8 2xl:px-0 shadow-md border-b dark:bg-[#2b3945] dark:border-gray-700 bg-white">
      <div className="flex justify-between items-center 2xl:w-4/5 mx-auto">
        <Link href={"/"} className="text-lg md:text-2xl font-semibold">
          Where in the world?
        </Link>

        <DarkModeButton />
      </div>
    </nav>
  );
}

export default Navbar;
