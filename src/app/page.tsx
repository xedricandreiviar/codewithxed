"use client";

import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { About } from "@/components/sections/About";
import { GuildHistory } from "@/components/sections/GuildHistory";
import { TavernBoard } from "@/components/sections/TavernBoard";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { DungeonGate } from "@/components/ui/DungeonGate";
import { LevelGate } from "@/components/ui/LevelGate";
import { GateProvider } from "@/components/ui/GateContext";

export default function HomePage() {
  return (
    <GateProvider>
      <DungeonGate />
      <Navbar logoText={SITE_CONFIG.name} links={NAV_LINKS} />

      <main id="main-content">
        <Hero />
        <SectionDivider />

        <LevelGate level={2} title="Quest Log">
          <FeaturedProjects />
          <SectionDivider />
        </LevelGate>

        <LevelGate level={3} title="Guild History">
          <GuildHistory />
          <SectionDivider />
        </LevelGate>

        <LevelGate level={4} title="Tavern Board">
          <TavernBoard />
          <SectionDivider />
        </LevelGate>

        <LevelGate level={5} title="Character Bio">
          <About />
          <SectionDivider />
        </LevelGate>

        <LevelGate level={6} title="Message Board">
          <Footer />
        </LevelGate>
      </main>
    </GateProvider>
  );
}
