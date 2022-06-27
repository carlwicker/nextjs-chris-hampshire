import Head from "next/head";
import Link from "next/link";
import css from "./About.module.css";
import { ThemeProvider, Container } from "react-bootstrap";
import SocialIcons from "../../components/SocialIcons/SocialIcons";

export default function AboutPage() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Container>
        <Head>
          <title>Chris Hampshire: About</title>
          <meta name="description" content="Chris Hampshire About Page" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main className={css.test}>
          <div className={css["about-h1"]}>About</div>
          <h2 className={css["about-h2"]}>Producer</h2>
          <p className={css["about-p"]}>
            He has sold over 100,000 vinyl units and had well over 100
            commercial releases. He is one of only a small group of producers
            with genuine cross genre appeal with successful projects in house,
            progressive, techno, hard dance and trance. Many of these were
            produced in his own studio including the 1996 release “Breathless”
            which, helped by a classic remix by Tony De Vit, went on to sell
            over 40,000 vinyl units. As an artist he has an impressive
            discography including remixes by and for{" "}
            <Link href="https://www.tiesto.com" target="_blank">
              Tiesto
            </Link>
            ,{" "}
            <Link href="http://www.sinead-oconnor.com/" target="_blank">
              Sinead O’Conner
            </Link>
            ,{" "}
            <Link href="https://satoshitomiie.bandcamp.com" target="_blank">
              Satoshi Tomiie
            </Link>{" "}
            and Tony De Vit. He has also released and licensed original tracks
            on some of the world’s biggest independent dance imprints including{" "}
            <Link href="https://www.tommyboy.com" target="_blank">
              Tommy Boy
            </Link>
            ,{" "}
            <Link href="https://www.blackholerecordings.com" target="_blank">
              Blackhole
            </Link>{" "}
            and{" "}
            <Link href="https://www.armadamusic.com" target="_blank">
              Armada Music
            </Link>
            .
          </p>
          <h2 className={css["about-h2"]}>Dj</h2>
          <p className={css["about-p"]}>
            As a DJ, his career has mirrored that of his productions - eclectic
            and always one step ahead of the game. With over 20 years behind the
            decks, he has played as far afield as Japan, South Africa and
            Australia together with regular European and UK dates. He has taken
            the famous ‘Recoverworld Live’ brand all over the world and
            regularly features as a guest mixer on various dance stations
            including “Recoverworld Radio” which has now been broadcasting for
            over 20 years…. In 2007 he released the mix album Dark Sessions
            which became Album of the Month in Mixmag and prompted Dj Mag to
            say, “this is trance at its most gorgeous”.
          </p>
          <h2 className={css["about-h2"]}>Label Owner</h2>
          <p className={css["about-p"]}>
            Interflow Sounds, his first label, went from being a small imprint
            set up as primarily a vehicle for his own productions, to one of the
            UK’s leading independent hard dance/trance labels. In 2002 he closed
            that chapter with the critically acclaimed mix album ‘Harder,
            Faster, Deeper’. Having signed to{" "}
            <Link
              href="https://recoverworld.com/digital/label/EVE%20Records"
              target="_blank"
            >
              Eve Records
            </Link>{" "}
            in 2001, Chris formed a relationship which would ultimately see him
            acquire the company in 2004. He now presides over a suite of labels
            under the Recoverworld banner and has helped launch the careers of
            John O’Callaghan, John Askew,{" "}
            <Link href="http://www.seantyasmusic.com" target="_blank">
              Sean Tyas
            </Link>
            ,{" "}
            <Link href="https://www.thomasdatt.global" target="_blank">
              Thomas Datt
            </Link>
            ,{" "}
            <Link href="http://www.manuellesaux.com" target="_blank">
              Manuel le Saux
            </Link>{" "}
            and many more.
          </p>
          <h2 className={css["about-h2"]}>Label Management</h2>
          <p className={css["about-p"]}>
            Based on the success of his own labels and encyclopedic knowledge of
            the industry, Recoverworld offer an end to end label management
            solution including royalty accounting, manufacturing and sales and
            distribution.
          </p>
          <h2 className={css["about-h2"]}>Publishing</h2>
          <p className={css["about-p"]}>
            Supreme Music Publishing, the publishing side of RecoverWorld are
            proud to represent a catalogue in excess of 3000 songs worldwide.
          </p>
          <h2 className={css["about-h2"]}>Mentor</h2>
          <p className={css["about-p"]}>
            Mentor for the UK government backed scheme “New Deal for Musicians”,
            guest lecturer at the{" "}
            <Link href="https://www.bimm.ac.uk" target="_blank">
              British and Irish Institute of Modern Music
            </Link>{" "}
            (BIMM), artist manager, music production journalist and ambassador
            from two government sponsored overseas trade missions.
          </p>
          <h2 className={css["about-h2"]}>Business Solutions</h2>
          <p className={css["about-p"]}>
            With the rise of digital media, he was one of the original directors
            of{" "}
            <Link href="https://www.ampsuite.com" target="_blank">
              AMPsuite
            </Link>
            , the label management and distribution system which powers many of
            the world’s largest independent labels. He sold his share in 2018
            but still uses it as the backbone for his guest lectures and his
            thriving label management business. His latest project, in
            partnership with{" "}
            <Link href="https://www.activamusic.co.uk" target="_blank">
              Rob `Activa` Stevenson
            </Link>{" "}
            is the innovative vinyl manufacturing platform `
            <Link href="https://therecordrepublic.com" target="_blank">
              The Record Republic
            </Link>
            `, a game changer in the world of record manufacturing. For more
            information please contact me here.
          </p>
          <SocialIcons />
        </main>
      </Container>
    </ThemeProvider>
  );
}
