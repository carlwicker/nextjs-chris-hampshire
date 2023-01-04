//useSWR allows the use of SWR inside function components
import useSWR from "swr";

import BiographyItem from "./BiographyItem";

export default function BiographySection() {
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/biography", fetcher);

  const jsonData = data && JSON.parse(data);

  return (
    <div className="container mx-auto w-full text-xl font-normal py-40">
      <h1
        data-scroll
        data-scroll-speed="2"
        className="lg:text-9xl xl:text-9xl text-6xl border-b-[1px] border-[#333] pb-10 z-50"
      >
        Biography
      </h1>

      <div>
        {jsonData?.biography?.map((section: any, index: any) => {
          return <BiographyItem section={section} index={index} key={index} />;
        })}
      </div>
    </div>
  );
}
