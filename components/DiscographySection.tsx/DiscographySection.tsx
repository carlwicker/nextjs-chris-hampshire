import ReleaseItem from "./ReleaseItem";

export default function DiscographySection({ discographyData }: any) {
  return (
    <div className="container mx-auto w-full text-xl font-normal py-40">
      <h1
        data-scroll
        data-scroll-speed="2"
        className="lg:text-9xl xl:text-9xl text-6xl border-b-[1px] border-[#333] pb-10 z-50"
      >
        Discography
      </h1>

      <div>
        {discographyData?.map((release: any, index: number) => (
          <ReleaseItem release={release} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
