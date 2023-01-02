import SocialIcons from "../SocialIcons/SocialIcons";
import AnimatedSvg from "./AnimatedSvg";

export default function HeroSection() {
  return (
    <div className="overflow-hidden">
      <div className="absolute z-0">
        <AnimatedSvg />
      </div>

      <section className="flex bg-[url('/images/chris_banner_mid.webp')] bg-no-repeat bg- w-full min-h-screen z-20">
        <div className="flex flex-col gap-10 self-center container mx-auto px-5">
          <div
            data-scroll
            data-scroll-speed="2"
            className="text-6xl font-normal w-1/2 z-50 relative"
          >
            Producer, DJ, Label Owner and Manager, Publisher, Mentor and Music
            Industry Entrepreneur for over thirty years Chris Hampshire has been
            involved in the music industry.
          </div>
          <div data-scroll data-scroll-speed="2">
            <SocialIcons />
          </div>
        </div>
      </section>
    </div>
  );
}
