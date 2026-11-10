"use client";

import React from "react";
import { TrendingUp, CheckCircle2, ShieldCheck, Zap, Database, Sparkles } from "lucide-react";
import { knowledgeManagementData } from "@/data/knowledgeManagement";

export const KnowledgeBenefits: React.FC = () => {
  const { benefits } = knowledgeManagementData;

  return (
    <section id="benefits" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#20C5D8]/6 dark:bg-[#20C5D8]/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{benefits.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            Make Business Knowledge{" "}
            <span className="bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
              Work Smarter
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {benefits.description}
          </p>
        </div>

        {/* 4 Value-Creation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.items.map((item, idx) => {
            const isViolet = item.color === "violet";
            const isBlue = item.color === "blue";
            const isCyan = item.color === "cyan";

            const accentGradient = isViolet
              ? "from-[#635BFF] to-[#4538E0]"
              : isBlue
              ? "from-[#3984FF] to-[#1D4ED8]"
              : "from-[#20C5D8] to-[#0891B2]";

            return (
              <div
                key={item.id}
                className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#F9FAFD] to-[#FFFFFF] dark:from-[#15182D] dark:to-[#101322] border border-[#E2E6EF] dark:border-[#252945] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Metric Header */}
                  <div className="flex items-baseline justify-between mb-2">
                    <span
                      className={`text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}
                    >
                      {item.metric}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8F94A8] dark:text-[#7A809C]">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="inline-block text-xs font-semibold text-[#464B63] dark:text-[#A5AABF] mb-4">
                    {item.metricLabel}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-3 group-hover:text-[#635BFF] dark:group-hover:text-[#A5A0FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom verification badge */}
                <div className="mt-6 pt-4 border-t border-[#EEF1F7] dark:border-[#23273E] flex items-center gap-2 text-xs text-[#20C5D8] dark:text-[#4FE3F4]">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-[11px] font-medium text-[#464B63] dark:text-[#8D93AF]">
                    Fully verified context
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBenefits;
