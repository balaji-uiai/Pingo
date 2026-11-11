import React from "react";
import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhatWeDo from "@/components/about/WhatWeDo";
import AboutSolutions from "@/components/about/AboutSolutions";
import VisionSection from "@/components/about/VisionSection";
import MissionSection from "@/components/about/MissionSection";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyPingo from "@/components/about/WhyPingo";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About Pingo – Smarter Conversations. Better Connections.",
  description:
    "Learn about Pingo, an AI-powered conversational platform and knowledge ecosystem by UIAI Technologies designed to connect businesses with customers and teams in real time.",
  openGraph: {
    title: "About Pingo – Smarter Conversations. Better Connections.",
    description:
      "Learn about Pingo, an AI-powered conversational platform and knowledge ecosystem by UIAI Technologies designed to connect businesses with customers and teams in real time.",
  },
};

export default function AboutPage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <AboutHero />
      <WhatWeDo />
      <AboutSolutions />
      <VisionSection />
      <MissionSection />
      <WhoWeAre />
      <WhyPingo />
      <AboutCta />
    </div>
  );
}
