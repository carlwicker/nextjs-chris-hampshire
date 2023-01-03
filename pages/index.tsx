import AboutSection from "../components/AboutSection/AboutSection";
import ChrisImage from "../components/ChrisImage/ChrisImage";
import HeroSection from "../components/HeroSection/HeroSection";
import Test from "../components/Test";
export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <ChrisImage />
      <AboutSection />
      <Test />
    </div>
  );
}
