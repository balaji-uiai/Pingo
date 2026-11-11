"use client";

import React from "react";
import {
  SplitSquareVertical,
  FileSpreadsheet,
  SearchX,
  HelpCircle,
  TrendingDown,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { productServiceData } from "@/data/productServiceGuidance";

const iconMap: Record<string, React.ElementType> = {
  SplitSquareVertical,
  FileSpreadsheet,
  SearchX,
  HelpCircle,
  TrendingDown,
};

export const ProductServiceChallenge: React.FC = () => {
  const { challenges } = productServiceData;

  return (
    <section
      id="challenges"
      aria-label="Product Discovery Challenges"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FAFBFE] dark:bg-[#0A0815] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-28 w-[500px] h-[500px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[480px] h-[480px] bg-[#3984FF]/6 dark:bg-[#3984FF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 dark:border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold tracking-wider uppercase shadow-xs">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{challenges.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {challenges.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {challenges.subheading}
          </p>
        </div>

        {/* 5 Buyer Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {challenges.items.map((item, idx) => {
            const Icon = iconMap[item.iconName] || HelpCircle;
            const isWide = idx === 4;

            return (
              <div
                key={item.id}
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isWide
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-r from-red-500/5 via-amber-500/5 to-transparent dark:from-red-500/10 dark:via-amber-500/10 border-red-500/20"
                    : "bg-white dark:bg-[#131526] border-[#E2E6EF] dark:border-[#252844] hover:border-[#635BFF]/40 hover:shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                      {item.impactTag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EEF1F7] dark:border-[#22253E] flex items-center justify-between text-xs text-[#8F94A8]">
                  <span>Friction Factor 0{idx + 1}</span>
                  <span className="text-red-500 font-semibold">High Drop-off Risk</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductServiceChallenge;
