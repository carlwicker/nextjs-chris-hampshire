import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="flex  mx-auto">
      <div
        data-scroll
        data-scroll-speed="-0.10"
        className="flex mx-auto container w-full xl:h-[800px] lg:h-[600px] md:h-[450px] h-[350px] mb-40 relative"
      >
        <Image
          src="/images/chris_banner_mid.webp"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
          className="object-cover"
        />
      </div>
    </div>
  );
}
