import React from "react";
import Hero from "@/components/home/Hero";
import StatisticsSection from "@/components/home/StatisticsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CustomerJourneySection from "@/components/home/CustomerJourneySection";
import ProductFeatures from "@/components/home/ProductFeatures";

export default function HomePage() {
  return (
    <div className="relative bg-[#080711] text-white transition-colors duration-200">
      <Hero />
      <StatisticsSection />
      <HowItWorksSection />
      <CustomerJourneySection />
      <ProductFeatures />
    </div>
  );
}
