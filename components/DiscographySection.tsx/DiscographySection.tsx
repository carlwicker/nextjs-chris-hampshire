import ReleaseItem from "./ReleaseItem";

interface IDiscographySection {
  releases: IRelease[];
}

interface IRelease {
  catNum: string;
  label: string;
  title: string;
  artist: string;
  links: ILinks;
}

interface ILinks {
  beatport: string;
  recoverworldCatLink: string;
  recoverWorldLabelLink: string;
}

export default function DiscographySection({ releases }: IDiscographySection) {
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
        {releases?.map((release: IRelease, index: number) => (
          <ReleaseItem release={release} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
