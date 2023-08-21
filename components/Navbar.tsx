import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md">
      <Link href={"/"} className="text-2xl font-semibold">
        Where in the world?
      </Link>

      <div>
        <h2 className="text-lg">Dark Mode</h2>
      </div>
    </nav>
  );
}

export default Navbar;
