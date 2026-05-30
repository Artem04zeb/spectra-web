import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ImplementationSection } from "@/components/sections/ImplementationSection";
import { NichesSection } from "@/components/sections/NichesSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemsSection />
        <HowItWorksSection />
        <ImplementationSection />
        <NichesSection />
        <TeamSection />
        {/* <PartnersSection /> */}
        <FinalCTASection />
      </main>
    </>
  );
}
