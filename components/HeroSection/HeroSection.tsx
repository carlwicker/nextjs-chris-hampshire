import SocialIcons from "../SocialIcons/SocialIcons";

export default function HeroSection() {
  return (
    <div className="overflow-hidden">
      <section className="flex w-full min-h-screen z-20">
        <div className="flex flex-col gap-10 self-center container mx-auto">
          <div
            data-scroll
            data-scroll-speed="2"
            className="xl:text-6xl font-normal lg:w-1/2 z-50 text-3xl md:text-5xl md:w-2/3"
          >
            Producer, DJ, Label Owner and Manager, Publisher, Mentor and Music
            Industry Entrepreneur for over thirty years Chris Hampshire has been
            involved in the music industry.
          </div>
          <div data-scroll data-scroll-speed="3" className="z-50">
            <SocialIcons />
          </div>
        </div>
      </section>
    </div>
  );
}
