import Head from "next/head";
import releases from "../../json/releases.json";
import DiscographySection from "../../components/DiscographySection.tsx/DiscographySection";
import Test from "../../components/Test";

export default function DiscographyPage() {
  return (
    <section id="discography">
      <Head>
        <title>Chris Hampshire: Discography</title>
        <meta name="description" content="Chris Hampshire Discography" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Test />
      <DiscographySection releases={releases} />
    </section>
  );
}
