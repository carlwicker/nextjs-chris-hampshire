import Link from "next/link";

export default function TopNav() {
  return (
    <div
      data-scroll-sticky
      className="flex pt-5 sticky z-50 text-sm font-medium"
    >
      <div className="flex justify-between w-full z-50" id="nav">
        <div>
          <a
            href="#top"
            data-scroll-to
            className="hover:text-red-500 text-white transition ease-in duration-200 normal-case"
          >
            Chris Hampshire
          </a>
        </div>

        <nav className="flex gap-5">
          <div>
            <a
              href="#biography"
              data-scroll-to
              className="hover:text-red-500 text-white transition ease-in duration-200 normal-case"
            >
              Biography
            </a>
          </div>
          <div>
            <a
              href="#discography"
              data-scroll-to
              className="hover:text-red-500 text-white transition ease-in duration-200 normal-case"
            >
              Discography
            </a>
          </div>
          {/* <div className="bg-black p-2 ">
            <Link href="/contact">Contact</Link>
          </div> */}
        </nav>
      </div>
    </div>
  );
}
