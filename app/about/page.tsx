import React from "react";
import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhatWeDo from "@/components/about/WhatWeDo";
import VisionSection from "@/components/about/VisionSection";
import MissionSection from "@/components/about/MissionSection";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyPingo from "@/components/about/WhyPingo";
import ContactSection from "@/components/about/ContactSection";

export const metadata: Metadata = {
  title: "About Pingo – Smarter Conversations. Better Connections.",
  description:
    "Learn about Pingo, an AI-powered, customizable live chat platform by UIAI Technologies designed to help businesses connect with customers in real time.",
};

export default function AboutPage() {
  return (
    <div className="relative">
      <AboutHero />
      <WhatWeDo />
      <VisionSection />
      <MissionSection />
      <WhoWeAre />
      <WhyPingo />
      <ContactSection />
    </div>
  );
}

