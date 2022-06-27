import Head from "next/head";
import css from "../styles/Home.module.css";
import { ThemeProvider, Container } from "react-bootstrap";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import TopNav from "../components/TopNav/TopNav";

export default function Home() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Container>
        <Head>
          <title>Chris Hampshire: Home</title>
          <meta name="description" content="Chris Hampshire Home Page" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main className={css["home"]}>
          <div className={css["home-p"]}>
            Producer, DJ, Label Owner and Manager, Publisher, Mentor and Music
            Industry Entrepreneur For over thirty years Chris Hampshire has been
            involved in the music industry.
          </div>
          <SocialIcons />
        </main>
      </Container>
    </ThemeProvider>
  );
}
