import React from "react";
import Hero from "@/components/home/Hero";
import StatisticsSection from "@/components/home/StatisticsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <StatisticsSection />
      <HowItWorksSection />
    </div>
  );
}
