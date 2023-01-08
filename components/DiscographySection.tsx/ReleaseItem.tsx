import Link from "next/link";

interface IRelease {
  release: any;
  index: number;
}

export default function ReleaseItem({ release, index }: IRelease) {
  return (
    <div
      className={`flex flex-col gap-1 ${
        index === 5 ? "border-b-[0px] pt-20" : "border-b-[1px] py-20"
      } border-[#333]`}
    >
      <div data-scroll data-scroll-speed="2">
        <div className="text-sm">
          <a
            href={`https://recoverworld.com/digital/${release.catNum}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 text-white transition ease-in duration-200"
          >
            {release.catNum}
          </a>{" "}
          |{" "}
          <a
            href={release?.labelUrl}
            className="hover:text-red-500 text-white transition ease-in duration-200"
          >
            {release.label}
          </a>
        </div>

        <h2 className="font-medium text-4xl">{release.title}</h2>

        <div className="">{release.artist}</div>
        <br />
        <Link
          href={release?.beatport}
          target="_blank"
          className="hover:text-red-500 text-white transition ease-in duration-200"
        >
          Purchase on Beatport
        </Link>
      </div>
    </div>
  );
}
