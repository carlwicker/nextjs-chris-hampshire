export default function BiographyItem({ section, index }: any) {
  return (
    <div
      className={`flex flex-col gap-1 ${
        index === 6 ? "border-b-[0px]" : "border-b-[1px]"
      } border-b-[1px] border-[#333] py-20`}
    >
      <h2 className={`lg:text-7xl font-medium text-5xl py-10 z-50 flex`}>
        {section.title}
      </h2>
      <p
        data-scroll
        data-scroll-speed="1"
        className="w-full xl:w-1/2 pb-20 font-thin "
      >
        {section.content}
      </p>
    </div>
  );
}
