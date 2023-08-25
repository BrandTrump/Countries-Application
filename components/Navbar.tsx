import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

function Navbar() {
  return (
    <nav className="py-6 px-5 md:px-8 lg:px-0 shadow-md border-b dark:bg-gray-700/40 dark:border-gray-700">
      <div className="flex justify-between items-center lg:w-5/6 xl:w-3/5 mx-auto">
        <Link href={"/"} className="text-lg md:text-2xl font-semibold">
          Where in the world?
        </Link>

        <DarkModeButton />
      </div>
    </nav>
  );
}

export default Navbar;
