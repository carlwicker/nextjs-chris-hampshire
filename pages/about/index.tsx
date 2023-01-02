import Head from "next/head";
import AboutSection from "../../components/AboutSection/AboutSection";

export default function AboutPage() {
  return (
    <div data-scroll-section>
      <Head>
        <title>Chris Hampshire: About</title>
        <meta name="description" content="Chris Hampshire About Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <AboutSection />
    </div>
  );
}
