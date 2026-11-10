"use client";

import React from "react";
import {
  HelpCircle,
  Layers,
  Clock,
  FileWarning,
  AlertTriangle,
  ArrowRight,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { productServiceData, ChallengeItem } from "@/data/productServiceGuidance";

const iconMap: Record<string, React.ElementType> = {
  HelpCircle,
  Layers,
  Clock,
  FileWarning,
};

export const ProductServiceChallenge: React.FC = () => {
  const { challenges } = productServiceData;

  return (
    <section
      id="challenges"
      aria-label="Product and Service Information Challenges"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FAFBFE] dark:bg-[#0A0815] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-28 w-[500px] h-[500px] bg-[#3984FF]/6 dark:bg-[#3984FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[480px] h-[480px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 dark:border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold tracking-wider uppercase shadow-xs">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{challenges.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {challenges.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {challenges.subheading}
          </p>
        </div>

        {/* 4-Quadrant Information Complexity Matrix */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {challenges.items.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || HelpCircle;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#3984FF]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-semibold">
                        {item.impactTag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5E7F0] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#62677D] dark:text-[#A5A1BF]">
                    <span className="font-mono">Friction Point 0{index + 1}</span>
                    <span className="text-rose-500 dark:text-rose-400 font-medium">Stalls Evaluation</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connected Guidance Reassurance Banner */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#3984FF]/10 via-[#635BFF]/10 to-[#20C5D8]/10 border border-[#3984FF]/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#3984FF] text-white flex items-center justify-center flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#171B2E] dark:text-white">
                  The Pingo Clarity Standard
                </h4>
                <p className="text-xs text-[#62677D] dark:text-[#A5A1BF]">
                  Grounded guidance translates complex brochures and manuals into precise, natural explanations.
                </p>
              </div>
            </div>

            <span className="text-xs font-mono font-semibold text-[#3984FF] dark:text-[#7EB5FF] px-3 py-1.5 rounded-full bg-white dark:bg-[#120E24] border border-[#3984FF]/25 shadow-xs flex-shrink-0">
              100% Document Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductServiceChallenge;

