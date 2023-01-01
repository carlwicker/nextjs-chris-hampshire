import Link from "next/link";
import css from "./TopNav.module.css";

export default function TopNav() {
  return (
    <div className="absolute flex gap-10 z-50 p-5 bg-black">
      <div>
        <Link href="/">Chris Hampshire</Link>
      </div>

      <div>
        <Link href="/about">About</Link>
      </div>

      <div>
        <Link href="/discography">Discography</Link>
      </div>
      <div>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
