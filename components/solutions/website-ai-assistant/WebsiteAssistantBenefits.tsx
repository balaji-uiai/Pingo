"use client";

import React from "react";
import {
  MousePointerClick,
  Search,
  Sparkles,
  CheckCircle,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { websiteAiAssistantData } from "@/data/websiteAiAssistant";

const iconMap: Record<string, React.ElementType> = {
  MousePointerClick,
  Search,
  Sparkles,
  CheckCircle,
};

export const WebsiteAssistantBenefits: React.FC = () => {
  const { benefits } = websiteAiAssistantData;

  return (
    <section
      id="benefits"
      aria-label="Website Assistant Benefits"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FAFAFE] dark:bg-[#0B0918] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#20C5D8]/30 dark:border-[#20C5D8]/50 bg-[#E6FAFC] dark:bg-[#122A2F] text-[#0E7A8A] dark:text-[#20C5D8] text-xs font-bold tracking-wider uppercase shadow-xs">
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

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.items.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#131526] border border-[#E2E6EF] dark:border-[#252844] shadow-sm hover:border-[#20C5D8]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#20C5D8]/10 text-[#0E7A8A] dark:text-[#20C5D8] flex items-center justify-center font-bold text-sm shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#8F94A8]">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-semibold text-[#0E7A8A] dark:text-[#20C5D8] mb-2">
                    {item.highlight}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#EEF1F7] dark:border-[#22253E] flex items-center gap-1.5 text-xs text-[#059669] dark:text-[#34D399] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Interactive experience verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WebsiteAssistantBenefits;
