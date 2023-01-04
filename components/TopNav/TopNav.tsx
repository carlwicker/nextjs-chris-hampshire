import Link from "next/link";

export default function TopNav() {
  return (
    <div className="pt-5 flex z-50 container mx-auto font-semibold uppercase text-sm">
      <div className="flex justify-between w-full">
        <div className="bg-black p-2">
          <Link
            href="/"
            className="hover:text-red-500 text-white transition ease-in duration-200 normal-case"
          >
            Chris Hampshire
          </Link>
        </div>

        <nav className="flex gap-2">
          <div className="bg-black p-2 ">
            <Link
              href="/biography"
              className="hover:text-red-500 text-white transition ease-in duration-200 normal-case"
            >
              Biography
            </Link>
          </div>
          <div className="bg-black p-2">
            <Link
              href="/discography"
              className="hover:text-red-500 text-white transition ease-in duration-200 normal-case"
            >
              Discography
            </Link>
          </div>
          {/* <div className="bg-black p-2 ">
            <Link href="/contact">Contact</Link>
          </div> */}
        </nav>
      </div>
    </div>
  );
}
