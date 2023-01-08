import Head from "next/head";
import DiscographySection from "../../components/DiscographySection.tsx/DiscographySection";
import Test from "../../components/Test";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import { query, orderBy } from "firebase/firestore";
import { NextApiHandler } from "next";

export default function DiscographyPage({ discographyData }: any) {
  return (
    <>
      <Head>
        <title>Chris Hampshire | Discography</title>
        <meta name="description" content="Chris Hampshire | Discography" />
      </Head>

      <DiscographySection discographyData={discographyData} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const querySnapshotDiscog = await getDocs(
    query(collection(db, "discography"), orderBy("index"))
  );
  let discographyData: any = [];
  querySnapshotDiscog.forEach((doc) => {
    discographyData.push(doc.data());
  });

  return {
    props: { discographyData },
  };
}
