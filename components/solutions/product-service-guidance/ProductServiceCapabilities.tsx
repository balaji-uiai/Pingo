"use client";

import React from "react";
import {
  SlidersHorizontal,
  Briefcase,
  Scale,
  Target,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { productServiceData } from "@/data/productServiceGuidance";

const iconMap: Record<string, React.ElementType> = {
  SlidersHorizontal,
  Briefcase,
  Scale,
  Target,
  Compass,
};

export const ProductServiceCapabilities: React.FC = () => {
  const { howPingoHelps } = productServiceData;

  return (
    <section
      id="how-pingo-helps"
      aria-label="How Pingo Guides Products and Services"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white dark:bg-[#080710] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3984FF]/30 dark:border-[#3984FF]/50 bg-[#EEF4FF] dark:bg-[#152238] text-[#3984FF] dark:text-[#7EB5FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#3984FF] dark:text-[#7EB5FF]" />
            <span>{howPingoHelps.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {howPingoHelps.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {howPingoHelps.subheading}
          </p>
        </div>

        {/* 5 Guidance Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {howPingoHelps.items.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Compass;
            const isFeatured = idx === 4;

            return (
              <div
                key={item.id}
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#3984FF]/8 via-[#20C5D8]/8 to-transparent dark:from-[#3984FF]/15 dark:via-[#20C5D8]/15 border-[#3984FF]/30 dark:border-[#3984FF]/50 shadow-md"
                    : "bg-[#FAFBFE] dark:bg-[#131526] border-[#E2E6EF] dark:border-[#252844] hover:border-[#3984FF]/40 hover:shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3984FF] to-[#20C5D8] text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#8F94A8]">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-semibold text-[#3984FF] dark:text-[#7EB5FF] mb-1">
                    {item.benefitTag}
                  </span>

                  <h3 className="text-lg font-bold text-[#171B2E] dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EEF1F7] dark:border-[#22253E] flex items-center gap-2 text-xs font-semibold text-[#059669] dark:text-[#34D399]">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Connected product intelligence</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductServiceCapabilities;
