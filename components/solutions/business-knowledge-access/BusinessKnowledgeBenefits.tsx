"use client";

import React from "react";
import {
  Compass,
  FolderTree,
  Zap,
  Clock,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { businessKnowledgeData, BenefitItem } from "@/data/businessKnowledgeAccess";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  FolderTree,
  Zap,
  Clock,
  ShieldCheck,
};

export const BusinessKnowledgeBenefits: React.FC = () => {
  const { benefits } = businessKnowledgeData;

  const topTwo = benefits.items.slice(0, 2);
  const bottomThree = benefits.items.slice(2, 5);

  return (
    <section
      id="benefits"
      aria-label="Business Knowledge Access Benefits"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FAFAFE] dark:bg-[#0B0918] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#10B981]/30 dark:border-[#10B981]/50 bg-[#E6F9F2] dark:bg-[#0E2820] text-[#059669] dark:text-[#34D399] text-xs font-bold tracking-wider uppercase shadow-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{benefits.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {benefits.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {benefits.subheading}
          </p>
        </div>

        {/* 2 + 3 Tiered Knowledge Benefit Matrix */}
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Top Row: 2 Wider Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topTwo.map((item) => {
              const IconComponent = iconMap[item.iconName] || Compass;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-7 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#635BFF]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center border border-[#635BFF]/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
                        {item.impactTag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[#E5E7F0] dark:border-white/[0.06] flex items-center gap-1.5 text-xs text-[#10B981] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Instant retrieval across connected bases</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 3 Focused Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomThree.map((item) => {
              const IconComponent = iconMap[item.iconName] || Zap;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#3984FF]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB5FF] flex items-center justify-center border border-[#3984FF]/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#EEF4FF] dark:bg-[#152238] text-[#3984FF] dark:text-[#7EB5FF] font-semibold">
                        {item.impactTag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5E7F0] dark:border-white/[0.06] flex items-center gap-1.5 text-xs text-[#10B981] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Direct source document ground truth</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessKnowledgeBenefits;

