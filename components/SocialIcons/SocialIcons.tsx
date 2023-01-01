import { SiSpotify, SiFacebook, SiInstagram } from "react-icons/si";
import Link from "next/link";
import css from "./SocialIcons.module.css";

export default function SocialIcons() {
  return (
    <div className={css["social-icons"]}>
      <Link
        href="https://open.spotify.com/artist/29xDjpPje4zJSNEmaHpfdT"
        className={css.icon}
        target="_blank"
      >
        <SiSpotify size={"30px"} />
      </Link>

      <Link
        href="https://www.facebook.com/hampshire.chris"
        className={css.icon}
        target="_blank"
      >
        <SiFacebook size={"30px"} />
      </Link>

      <Link
        href="https://www.instagram.com/recoverworld_family/"
        className={css.icon}
        target="_blank"
      >
        <SiInstagram size={"30px"} />
      </Link>
    </div>
  );
}
