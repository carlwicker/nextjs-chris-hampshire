import BiographyItem from "./BiographyItem";

export default function BiographySection({ data }: any) {
  return (
    <div className="container mx-auto p-5 w-full text-xl font-normal py-40">
      <h1
        data-scroll
        data-scroll-speed="2"
        className="lg:text-9xl xl:text-9xl text-6xl border-b-[1px] border-[#333] pb-10 z-50"
      >
        Biography
      </h1>

      <div>
        {data?.map((section: any, index: number) => (
          <BiographyItem section={section} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
