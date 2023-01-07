import Head from "next/head";
import BiographySection from "../../components/BiographySection/BiographySection";
import Test from "../../components/Test";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import { query, orderBy } from "firebase/firestore";

export default function BiographyPage({ biographyData }: any) {
  return (
    <>
      <Head>
        <title>Chris Hampshire | Biography</title>
        <meta name="description" content="Chris Hampshire Biography" />
      </Head>

      <Test />
      <BiographySection biographyData={biographyData} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const querySnapshot = await getDocs(
    query(collection(db, "biography"), orderBy("index"))
  );

  let biographyData: any = [];
  querySnapshot.forEach((doc) => {
    biographyData.push(doc.data());
  });

  return {
    props: { biographyData },
  };
}
