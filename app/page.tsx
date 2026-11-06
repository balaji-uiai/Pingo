import React from "react";
import Hero from "@/components/home/Hero";
import HomeFeatureSection from "@/components/home/HomeFeatureSection";

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <HomeFeatureSection />
    </div>
  );
}
