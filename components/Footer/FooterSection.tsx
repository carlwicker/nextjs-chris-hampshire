export default function FooterSection() {
  return (
    <div className="h-[400px] bg-[rgb(11,11,11)] text-white font-normal p-5 w-full py-40">
      <div
        data-scroll
        data-scroll-speed="-2"
        className="container mx-auto text-md flex lg:justify-between flex-col lg:flex-row"
      >
        <div className="flex flex-col w-1/2">
          <a
            href="mailto:chris@recoverworld.com"
            target="_blank"
            className="text-white font-bold bg-transparent hover:bg-white hover:text-black w-min"
          >
            chris@recoverworld.com
          </a>
        </div>

        <div className="flex flex-col w-1/2">
          <a
            href="http://www.recoverworld.com"
            target="_blank"
            className="text-white font-bold bg-transparent hover:bg-white hover:text-black w-min"
          >
            http://www.recoverworld.com
          </a>

          <a
            href="http://www.facebook.com/recoverworld"
            target="_blank"
            className="text-white font-bold bg-transparent hover:bg-white hover:text-black w-min"
          >
            http://www.facebook.com/recoverworld
          </a>
        </div>
      </div>
    </div>
  );
}
