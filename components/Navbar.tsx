import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

function Navbar() {
  return (
    <nav className="py-6 shadow-md border-b">
      <div className="flex justify-between items-center lg:w-5/6 xl:w-3/5 mx-auto">
        <Link href={"/"} className="text-2xl font-semibold">
          Where in the world?
        </Link>

        <DarkModeButton />
      </div>
    </nav>
  );
}

export default Navbar;
