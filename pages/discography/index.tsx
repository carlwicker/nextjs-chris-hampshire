import Head from "next/head";
import releases from "../../json/releases.json";
import DiscographySection from "../../components/DiscographySection.tsx/DiscographySection";
import Test from "../../components/Test";

export default function DiscographyPage() {
  return (
    <>
      <Head>
        <title>Chris Hampshire | Discography</title>
        <meta name="description" content="Chris Hampshire | Discography" />
      </Head>

      <section id="discography">
        <Test />
        <DiscographySection releases={releases} />
      </section>
    </>
  );
}
