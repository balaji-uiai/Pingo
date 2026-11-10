"use client";

import React from "react";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import { aiAutomationData } from "@/data/aiAutomation";

export const AiAutomationBenefits: React.FC = () => {
  const { benefits } = aiAutomationData;

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
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
            Better Conversations.{" "}
            <span className="bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
              Less Manual Effort.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {benefits.description}
          </p>
        </div>

        {/* 2x2 Impact Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {benefits.items.map((item) => {
            const accentGradient =
              item.color === "violet"
                ? "from-[#635BFF] to-[#4538E0]"
                : item.color === "blue"
                ? "from-[#3984FF] to-[#1D4ED8]"
                : "from-[#20C5D8] to-[#0891B2]";

            return (
              <div
                key={item.id}
                className="group relative p-7 sm:p-9 rounded-3xl bg-[#F8F9FE] dark:bg-[#13172C] border border-[#E5E7F0] dark:border-[#252945] hover:border-[#635BFF]/40 shadow-xs hover:shadow-xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Metric Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span
                        className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}
                      >
                        {item.metric}
                      </span>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#62677D] dark:text-[#8E95AF]">
                        {item.metricLabel}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#FFFFFF] dark:bg-[#1A1E36] border border-[#E5E7F0] dark:border-[#282C48] flex items-center justify-center text-[#10B981]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E5E7F0]/60 dark:border-[#232742] flex items-center gap-2 text-xs font-semibold text-[#635BFF] dark:text-[#20C5D8]">
                  <span>Proven Value Delivery</span>
                  <span>• Active across all tiers</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AiAutomationBenefits;

