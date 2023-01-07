export default function BiographyItem({ section, index }: any) {
  return (
    <div
      className={`flex flex-col border-[#333] ${
        index === 6 ? "border-b-[0px] pt-20" : "border-b-[1px] py-20"
      }`}
    >
      <h2 className={`lg:text-7xl font-medium text-5xl py-10 z-40 flex`}>
        {section.title}
      </h2>
      <p
        data-scroll
        data-scroll-speed="1"
        className="w-full xl:w-1/2 pb-20 font-normal "
      >
        {section.content}
      </p>
    </div>
  );
}
