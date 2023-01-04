import Link from "next/link";

export default function TopNav() {
  return (
    <div className="pt-5 flex z-50 container mx-auto font-semibold uppercase text-sm">
      <div className="flex justify-between w-full">
        <div className="bg-black p-2">
          <Link href="/">Chris Hampshire</Link>
        </div>

        <nav className="flex gap-2">
          <div className="bg-black p-2">
            <Link href="/biography">Biography</Link>
          </div>
          <div className="bg-black p-2">
            <Link href="/discography">Discography</Link>
          </div>
          {/* <div className="bg-black p-2 ">
            <Link href="/contact">Contact</Link>
          </div> */}
        </nav>
      </div>
    </div>
  );
}
