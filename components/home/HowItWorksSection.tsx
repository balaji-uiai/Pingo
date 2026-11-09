import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      className={`relative py-16 sm:py-20 lg:py-24 z-10 overflow-hidden ${className}`}
    >
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-[#782BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[600px] h-[600px] bg-[#4C16B8]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            {data.heading}
          </h2>
        </div>

        {/* Six-step workflow cards container */}
        <div className="relative">
          {/* Vertical progress line connecting cards on mobile only */}
          <div
            aria-hidden="true"
            className="md:hidden absolute left-[19px] top-6 bottom-10 w-[2px] bg-gradient-to-b from-[#782BFF] via-[#A855F7] to-[#4C16B8] pointer-events-none"
          />

          {/* 3-column × 2-row grid on desktop, 2-column on tablet, 1-column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {data.steps.map((step, idx) => (
              <div key={step.step} className="relative pl-10 md:pl-0 h-full">
                {/* Node on mobile vertical line */}
                <div
                  aria-hidden="true"
                  className="md:hidden absolute left-[19px] top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-[#080711] border-2 border-[#782BFF] shadow-[0_0_10px_rgba(120,43,255,0.7)] flex items-center justify-center z-10"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B5FF45]" />
                </div>

                <StepCard step={step} index={idx} />
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Bottom CTA */}
        <div className="mt-16 sm:mt-20 pt-6 text-center max-w-2xl mx-auto space-y-4 sm:space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {data.bottomCta.heading}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-[#D5D0E5] leading-relaxed">
            {data.bottomCta.subheading}
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              href={data.bottomCta.buttonHref}
              className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#782BFF] to-[#4C16B8] border border-white/20 shadow-[0_0_25px_rgba(120,43,255,0.45)] hover:shadow-[0_0_35px_rgba(120,43,255,0.7)] hover:from-[#8938FF] hover:to-[#5B1DDE] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer uppercase tracking-wider"
            >
              <span>{data.bottomCta.buttonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
