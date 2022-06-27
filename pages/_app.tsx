// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import TopNav from "../components/TopNav/TopNav";
import Background from "../components/Background/Background";
import css from "../components/Background/Background.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={css.background}></div>
      <TopNav />
      <div className={css.content}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
