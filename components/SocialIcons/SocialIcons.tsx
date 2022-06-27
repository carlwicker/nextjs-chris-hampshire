import { SiSpotify, SiFacebook, SiInstagram } from "react-icons/si";
import Link from "next/link";
import css from "./SocialIcons.module.css";

export default function SocialIcons() {
  const RedLink = css.a;

  return (
    <div className={css["social-icons"]}>
      <Link href="https://open.spotify.com/artist/29xDjpPje4zJSNEmaHpfdT">
        <a className={css.icon} target="_blank">
          <SiSpotify size={"30px"} />
        </a>
      </Link>

      <Link href="https://www.facebook.com/hampshire.chris">
        <a className={css.icon} target="_blank">
          <SiFacebook size={"30px"} />
        </a>
      </Link>

      <Link href="https://www.instagram.com/recoverworld_family/">
        <a className={css.icon} target="_blank">
          <SiInstagram size={"30px"} />
        </a>
      </Link>
    </div>
  );
}
