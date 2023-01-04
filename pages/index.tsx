import ChrisImage from "../components/ChrisImage/ChrisImage";
import HeroSection from "../components/HeroSection/HeroSection";
import Test from "../components/Test";
import DiscographySection from "../components/DiscographySection.tsx/DiscographySection";
import releases from "../json/releases.json";
import BiographySection from "../components/BiographySection/BiographySection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ChrisImage />
      <BiographySection />
      <Test />
      <DiscographySection releases={releases} />
    </div>
  );
}
