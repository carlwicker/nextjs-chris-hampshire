import { SiSpotify, SiFacebook, SiInstagram } from "react-icons/si";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="flex gap-3">
      <Link
        href="https://open.spotify.com/artist/29xDjpPje4zJSNEmaHpfdT"
        target="_blank"
      >
        <SiSpotify
          size={"30px"}
          className="hover:fill-red-500 fill-white transition ease-in duration-200"
        />
      </Link>

      <Link href="https://www.facebook.com/hampshire.chris" target="_blank">
        <SiFacebook
          size={"30px"}
          className="hover:fill-red-500 fill-white transition ease-in duration-200"
        />
      </Link>

      <Link
        href="https://www.instagram.com/recoverworld_family/"
        className=""
        target="_blank"
      >
        <SiInstagram
          size={"30px"}
          className="hover:fill-red-500 fill-white transition ease-in duration-200"
        />
      </Link>
    </div>
  );
}
