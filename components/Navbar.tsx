import Link from "next/link";

function Navbar() {
  return (
    <nav className="p-6 shadow-md">
      <div className="flex justify-between items-center lg:w-5/6 xl:w-3/5 mx-auto">
        <Link href={"/"} className="text-2xl font-semibold">
          Where in the world?
        </Link>

        <div>
          <h2 className="text-lg">Dark Mode</h2>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
