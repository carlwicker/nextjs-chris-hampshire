import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import TopNav from "../components/TopNav/TopNav";
import css from "../components/Background/Background.module.css";
import { ThemeProvider, Container } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={css.background}></div>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      >
        <Container>
          <TopNav />
          <div className={css.content}>
            <Component {...pageProps} />
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
