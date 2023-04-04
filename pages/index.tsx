import ChrisImage from "../components/ChrisImage/ChrisImage";
import HeroSection from "../components/HeroSection/HeroSection";
import Test from "../components/Test";
import DiscographySection from "../components/DiscographySection.tsx/DiscographySection";
import BiographySection from "../components/BiographySection/BiographySection";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/clientApp";
import { query, orderBy } from "firebase/firestore";
import Head from "next/head";

export default function Home({ biographyData, discographyData }: any) {
  return (
    <>
      <Head>
        <title>Chris Hampshire | Home</title>
        <meta name="description" content="Chris Hampshire Home Page" />
      </Head>

      <>
        <div id="top">
          <HeroSection />
          <ChrisImage />
        </div>
        <div id="biography">
          <BiographySection biographyData={biographyData} />
        </div>
        <div id="discography">
          <DiscographySection discographyData={discographyData} />
        </div>
      </>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const querySnapshotBio = await getDocs(
    query(collection(db, "biography"), orderBy("index"))
  );
  let biographyData: any = [];
  querySnapshotBio.forEach((doc) => {
    biographyData.push(doc.data());
  });

  const querySnapshotDiscog = await getDocs(
    query(collection(db, "discography"), orderBy("index", "desc"))
  );
  let discographyData: any = [];
  querySnapshotDiscog.forEach((doc) => {
    discographyData.push(doc.data());
  });

  return {
    props: { biographyData, discographyData },
  };
}
