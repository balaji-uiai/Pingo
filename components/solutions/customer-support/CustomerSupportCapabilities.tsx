"use client";

import React from "react";
import {
  Bot,
  Database,
  UserPlus,
  FileText,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { customerSupportData } from "@/data/customerSupport";

const iconMap: Record<string, React.ElementType> = {
  Bot,
  Database,
  UserPlus,
  FileText,
  Sparkles,
};

export const CustomerSupportCapabilities: React.FC = () => {
  const { howPingoHelps } = customerSupportData;

  return (
    <section
      id="how-pingo-helps"
      aria-label="How Pingo Helps Customer Support"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white dark:bg-[#080710] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{howPingoHelps.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {howPingoHelps.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {howPingoHelps.subheading}
          </p>
        </div>

        {/* 5 Complementary Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {howPingoHelps.items.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            const isFeatured = idx === 4;

            return (
              <div
                key={item.id}
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#635BFF]/8 via-[#3984FF]/8 to-[#20C5D8]/8 dark:from-[#635BFF]/15 dark:via-[#3984FF]/15 dark:to-[#20C5D8]/15 border-[#635BFF]/30 dark:border-[#635BFF]/50 shadow-md"
                    : "bg-[#FAFBFE] dark:bg-[#131526] border-[#E2E6EF] dark:border-[#252844] hover:border-[#635BFF]/40 hover:shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#8F94A8]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#171B2E] dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EEF1F7] dark:border-[#22253E] flex items-center gap-2 text-xs font-semibold text-[#635BFF] dark:text-[#A5A0FF]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                  <span className="truncate">{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportCapabilities;
