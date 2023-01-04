import Head from "next/head";
import BiographySection from "../../components/BiographySection/BiographySection";
import Test from "../../components/Test";

export default function BiographyPage() {
  return (
    <div>
      <Head>
        <title>Chris Hampshire: About</title>
        <meta name="description" content="Chris Hampshire About Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Test />

      <BiographySection />
    </div>
  );
}
