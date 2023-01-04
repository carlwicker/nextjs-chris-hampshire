import Head from "next/head";
import BiographySection from "../../components/BiographySection/BiographySection";
import Test from "../../components/Test";

import data from "../api/biography.json";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Chris Hampshire: About</title>
        <meta name="description" content="Chris Hampshire About Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Test />

      <BiographySection data={data} />
    </div>
  );
}
