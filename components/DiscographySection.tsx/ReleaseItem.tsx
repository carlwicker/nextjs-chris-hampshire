import Link from "next/link";

interface IRelease {
  release: any;
  index: number;
}

export default function ReleaseItem({ release, index }: IRelease) {
  return (
    <div
      className={`flex flex-col gap-1 ${
        index === 5 ? "border-b-[px]" : "border-b-[1px]"
      } border-[#333] py-40`}
    >
      <div data-scroll data-scroll-speed="2">
        <div className="text-sm">
          <a href={release?.links.recoverworldCatLink} target="_blank">
            {release.catNum}
          </a>{" "}
          | <a href={release?.links.recoverWorldLabelLink}>{release.label}</a>
        </div>

        <h2 className="font-medium text-4xl">{release.title}</h2>

        <div className="font-thin">{release.artist}</div>

        <Link href={release?.links.beatport} target="_blank" className="">
          Purchase on Beatport
        </Link>
      </div>
    </div>
  );
}
