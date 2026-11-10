"use client";

import React from "react";
import {
  HelpCircle,
  XCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Search,
  Zap,
} from "lucide-react";
import { aiAutomationData } from "@/data/aiAutomation";

export const AiAutomationOverview: React.FC = () => {
  const { overview } = aiAutomationData;

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FAFAFE] dark:bg-[#0E1022] transition-colors duration-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-[#635BFF]/6 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#20C5D8]/6 dark:bg-[#20C5D8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{overview.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {overview.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {overview.description}
          </p>
        </div>

        {/* Side-by-side Asymmetrical Showcase: Concept & Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Traditional Search Pain Point */}
          <div className="lg:col-span-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#14172B] border border-[#E5E7F0] dark:border-[#282C48] p-7 sm:p-9 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0F2F8] dark:border-[#232742]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      {overview.comparison.traditional.label}
                    </h3>
                    <span className="text-[11px] text-[#62677D] dark:text-[#8E95AF]">
                      Outdated static keyword indexing
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                Customers must manually guess keywords, comb through dozens of article links, and open multiple tabs just to find a simple policy or answer.
              </p>

              <ul className="space-y-3.5 pt-2">
                {overview.comparison.traditional.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0]">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-[#F0F2F8] dark:border-[#232742] flex items-center gap-2 text-xs text-red-500 font-semibold">
              <Search className="w-3.5 h-3.5" />
              <span>Result: High drop-off and support overload</span>
            </div>
          </div>

          {/* Right Column: Pingo AI Automation (Highlighted) */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-[#F7F8FE] to-[#FFFFFF] dark:from-[#171B33] dark:to-[#13162C] border-2 border-[#635BFF]/35 dark:border-[#635BFF]/50 p-7 sm:p-9 flex flex-col justify-between shadow-xl dark:shadow-[0_20px_50px_rgba(99,91,255,0.18)] relative overflow-hidden group">
            {/* Top specular line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8]" />

            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0F2F8] dark:border-[#232742]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center flex-shrink-0 font-bold shadow-xs">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      {overview.comparison.pingoWay.label}
                    </h3>
                    <span className="text-[11px] text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
                      Contextual Neural Understanding
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] text-[11px] font-bold">
                  Recommended
                </span>
              </div>

              <p className="text-sm text-[#171B2E] dark:text-[#FFFFFF] leading-relaxed font-medium">
                Pingo interprets the customer’s intent, extracts the precise snippet from your verified knowledge base, and writes an immediate, helpful response.
              </p>

              <ul className="space-y-3.5 pt-2">
                {overview.comparison.pingoWay.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-xs sm:text-sm text-[#171B2E] dark:text-[#FFFFFF]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-[#F0F2F8] dark:border-[#232742] flex items-center justify-between text-xs font-semibold text-[#635BFF] dark:text-[#20C5D8]">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Real-time answer synthesis
              </span>
              <span>10x Faster &gt;</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AiAutomationOverview;

