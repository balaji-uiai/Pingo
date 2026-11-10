import React from "react";
import { howItWorksData, HowItWorksData } from "@/data/howItWorks";
import StepCard from "./StepCard";

export interface HowItWorksSectionProps {
  data?: HowItWorksData;
  className?: string;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  data = howItWorksData,
  className = "",
}) => {
  return (
    <section
      id="how-it-works"
      aria-label="How Pingo Works"
      className={`relative py-16 sm:py-20 lg:py-24 z-10 overflow-hidden bg-[#F5F6FF] dark:bg-[#101326] border-y border-[#E5E7F0] dark:border-[#292D45] transition-colors duration-200 ${className}`}
    >
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[600px] h-[600px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          {/* Section Label: THE PINGO WAY */}
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{data.badge}</span>
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-tight">
            {data.heading}
          </h2>
        </div>

        {/* Six-step workflow cards container */}
        <div className="relative">
          {/* Vertical progress line connecting cards on mobile only */}
          <div
            aria-hidden="true"
            className="md:hidden absolute left-[19px] top-6 bottom-10 w-[2px] bg-gradient-to-b from-[#635BFF] via-[#3984FF] to-[#20C5D8] pointer-events-none"
          />

          {/* 3-column × 2-row grid on desktop, 2-column on tablet, 1-column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {data.steps.map((step, idx) => (
              <div key={step.step} className="relative pl-10 md:pl-0 h-full">
                {/* Node on mobile vertical line */}
                <div
                  aria-hidden="true"
                  className="md:hidden absolute left-[19px] top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FFFFFF] dark:bg-[#0B0D19] border-2 border-[#635BFF] shadow-[0_0_10px_rgba(99,91,255,0.7)] flex items-center justify-center z-10"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#20C5D8]" />
                </div>

                <StepCard step={step} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
