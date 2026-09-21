import { BranchesPreview } from "@/features/home/sections/BranchesPreview";
import { HeroSection } from "@/features/home/sections/HeroSection";
import { IntroSection } from "@/features/home/sections/IntroSection";
import { JoinBand } from "@/features/home/sections/JoinBand";
import { MarqueeSection } from "@/features/home/sections/MarqueeSection";
import { MethodSection } from "@/features/home/sections/MethodSection";
import { MosaicSection } from "@/features/home/sections/MosaicSection";
import { NewsPreview } from "@/features/home/sections/NewsPreview";
import { StatsSection } from "@/features/home/sections/StatsSection";
import "./home.css";

export default function HomePage() {
  return (
    <div className="home">
      <HeroSection />
      <MarqueeSection />
      <IntroSection />
      <StatsSection />
      <BranchesPreview />
      <MethodSection />
      <JoinBand />
      <MosaicSection />
      <NewsPreview />
    </div>
  );
}
