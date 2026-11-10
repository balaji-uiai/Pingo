import React from "react";
import FeatureCard from "./FeatureCard";
import { homeFeaturesData } from "@/data/features";

export const HomeFeatureSection: React.FC = () => {
  return (
    <section id="features" className="relative py-16 sm:py-20 lg:py-24 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Subtle Section Divider Accent */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#20C5D8]/40" />
          <div className="w-2 h-2 rounded-full bg-[#20C5D8] shadow-[0_0_8px_#20C5D8]" />
          <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#20C5D8]/40" />
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF]">
            {homeFeaturesData.headingPart1}{" "}
            <span className="bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
              {homeFeaturesData.headingPart2}
            </span>
          </h2>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {homeFeaturesData.features.map((feature, idx) => (
            <FeatureCard key={feature.id} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureSection;
