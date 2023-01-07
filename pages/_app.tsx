import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import TopNav from "../components/TopNav/TopNav";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import FooterSection from "../components/Footer/FooterSection";
import Router from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [Component]);

  return (
    <>
      <Head>
        <title>Chris Hampshire | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Chris Hampshire Home Page" />
        <meta charSet="utf-8" />
      </Head>

      <LocomotiveScrollProvider
        options={{
          smooth: true,
          inertia: 0.5,
          mobile: { smooth: true, breakpoint: 0 },
          tablet: { smooth: true, breakpoint: 0 },
          smartphone: { smooth: true, breakpoint: 0 },
        }}
        watch={[]}
        location={asPath}
        lerp={0.03}
        multiplier={1.2}
        containerRef={containerRef}
        onLocationChange={(scroll: any) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#scroll-container"
            className="pb-5 align-center sticky top-0 justify-center w-full bg-[#111] z-50"
          >
            <div className="container mx-auto ">
              <TopNav />
            </div>
          </div>
          <div className="p-5">
            <Component {...pageProps} />
          </div>
          <FooterSection />
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}

export default MyApp;
