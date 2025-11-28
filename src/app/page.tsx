import { Hero } from "@/components/sections/Hero";
import { CharityHighlight } from "@/components/sections/CharityHighlight";
import { FeaturedPlayers } from "@/components/sections/FeaturedPlayers";
import { MissionTeaser } from "@/components/sections/MissionTeaser";
import { MainTournamentPreview } from "@/components/sections/MainTournamentPreview";
import { NewsSection } from "@/components/sections/NewsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CharityHighlight />
      <FeaturedPlayers />
      <MissionTeaser />
      <MainTournamentPreview />
      <NewsSection />
      <PartnersSection />
    </div>
  );
}
