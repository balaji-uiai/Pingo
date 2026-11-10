import React from "react";
import Hero from "@/components/home/Hero";
import StatisticsSection from "@/components/home/StatisticsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import AiCustomerSupportSection from "@/components/home/AiCustomerSupportSection";
import KnowledgeCenterSection from "@/components/home/KnowledgeCenterSection";

export default function HomePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <Hero />
      <StatisticsSection />
      <HowItWorksSection />
      <AiCustomerSupportSection />
      <KnowledgeCenterSection />
    </div>
  );
}
