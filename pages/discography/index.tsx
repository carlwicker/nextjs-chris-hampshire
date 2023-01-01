import Head from "next/head";
import Link from "next/link";
import css from "./Discography.module.css";
import SocialIcons from "../../components/SocialIcons/SocialIcons";

export default function DiscographyPage() {
  return (
    <>
      <Head>
        <title>Chris Hampshire: Discography</title>
        <meta name="description" content="Chris Hampshire Discography Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <main className={css.discography}>
          <h1 className={css["discography-h1"]}>Discography</h1>

          <div className={css.release}>
            <div className={css["cat-num"]}>EVECLSICS002 | Eve Records</div>
            <h2 className={css["discography-h2"]}>Scream 2 B Heard</h2>
            <div className={css["release-artist"]}>
              <div>SDM Soundclash, Chris Hampshire, Nikita, Jono Fernandez</div>
              <Link
                href="https://www.beatport.com/release/scream-2-b-heard/3757814"
                target="_blank"
              >
                Beatport
              </Link>
            </div>
          </div>

          <div className={css.release}>
            <div className={css["cat-num"]}>DISCFDEL06 | Discover Records</div>
            <h2 className={css["discography-h2"]}>
              Futuristic (Feat. Shane 54)
            </h2>
            <div>
              <div>Woody Van Eyden, Chris Hampshire, Shane 54, John Askew</div>
              <Link
                href="https://www.beatport.com/release/futuristic-feat-shane-54/3407976"
                target="_blank"
              >
                Beatport
              </Link>
            </div>
          </div>

          <div className={css.release}>
            <div className={css["cat-num"]}>DISDAR235 | Discover Dark</div>
            <h2 className={css["discography-h2"]}>
              Twenty Five Years (Chris Hampshire Remix)
            </h2>
            <div>
              <div>Oberon, Chris Hampshire</div>
              <Link
                href="https://www.beatport.com/release/twenty-five-years-chris-hampshire-remix/3223531"
                target="_blank"
              >
                Beatport
              </Link>
            </div>
          </div>

          <div className={css.release}>
            <div className={css["cat-num"]}>
              DISCOVER050B | Discover Records
            </div>
            <h2 className={css["discography-h2"]}>The Vault</h2>
            <div>
              <div>Chris Hampshire, Bissen, John Askew, Activa</div>
              <Link
                href="https://www.beatport.com/release/the-vault/2992047"
                target="_blank"
              >
                Beatport
              </Link>
            </div>
          </div>

          <div className={css.release}>
            <div className={css["cat-num"]}>DISCOVER102 | Discover Records</div>
            <h2 className={css["discography-h2"]}>Ninety Four</h2>
            <div>
              <div>Chris Hampshire, Lostly, Ex-Driver, Peter Hulsmans</div>
              <Link
                href="https://www.beatport.com/release/ninety-four/1083500"
                target="_blank"
              >
                Beatport
              </Link>
            </div>
          </div>

          <div className={css.release}>
            <div className={css["cat-num"]}>RECOVER44 | Recover Records</div>
            <h2 className={css["discography-h2"]}>Breathless</h2>
            <div>
              <div>
                Chris Hampshire, Weatherley, Tony De Vit, Ali Wilson, Simon Eve,
                Paul Glazby, Pants & Corset
              </div>
              <Link
                href="https://www.beatport.com/release/breathless/182256"
                target="_blank"
              >
                Beatport
              </Link>
            </div>
          </div>
          <SocialIcons />
        </main>
      </div>
    </>
  );
}
