import Head from "next/head";
import css2 from "../../styles/Home.module.css";
import css from "About.module.css";
import { ThemeProvider, Container } from "react-bootstrap";

export default function DiscographyPage() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Container>
        <Head>
          <title>Chris Hampshire: Discography</title>
          <meta name="description" content="Chris Hampshire Discography Page" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main className={css2.test}>
          <h1>Discography</h1>
        </main>
      </Container>
    </ThemeProvider>
  );
}
