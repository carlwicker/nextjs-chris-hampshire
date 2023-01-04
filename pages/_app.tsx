import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import TopNav from "../components/TopNav/TopNav";
import { useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Chris Hampshire: Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>

      <div className="flex absolute top-0 self-center justify-center w-full">
        <TopNav />
      </div>

      <LocomotiveScrollProvider
        options={{
          smooth: true,
          mobile: { smooth: true, inertia: 0.8 },
          tablet: { smooth: true, inertia: 0.8 },
          smartphone: { smooth: true, inertia: 0.8 },
        }}
        watch={[]}
        location={asPath}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef}>
          <Component {...pageProps} />
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}

export default MyApp;
