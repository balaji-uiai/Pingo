"use client";

import React from "react";
import {
  Search,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Smile,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { websiteAiAssistantData, BenefitItem } from "@/data/websiteAiAssistant";

const iconMap: Record<string, React.ElementType> = {
  Search,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Smile,
};

export const WebsiteAssistantBenefits: React.FC = () => {
  const { benefits } = websiteAiAssistantData;

  const heroBenefit = benefits.items.find((item) => item.id === "experience");
  const otherBenefits = benefits.items.filter((item) => item.id !== "experience");

  return (
    <section
      id="benefits"
      aria-label="Website AI Assistant Benefits"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FAFAFE] dark:bg-[#0B0918] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[130px] pointer-events-none" />

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

        {/* Asymmetrical 5-Item Experience Grid (Tall Anchor + 2x2 Tiles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column (5/12): Featured Hero Anchor Card */}
          {heroBenefit && (
            <div className="lg:col-span-5 rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-white via-[#F7FBFD] to-white dark:from-[#131028] dark:via-[#161330] dark:to-[#131028] border border-[#20C5D8]/30 dark:border-[#20C5D8]/30 shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#20C5D8] to-[#3984FF] text-white flex items-center justify-center shadow-md">
                  <Smile className="w-6 h-6 text-white" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0E7A8A] dark:text-[#20C5D8] block">
                    Core Outcome: {heroBenefit.highlight}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171B2E] dark:text-white leading-tight">
                    {heroBenefit.title}
                  </h3>
                </div>

                <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                  {heroBenefit.description} By providing immediate, relevant answers 24/7 directly on your website, prospective buyers stay engaged and informed without hitting dead ends.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E7F0] dark:border-white/[0.08] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#171B2E] dark:text-[#E2E0F4] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Immediate answers on the current webpage</span>
                </div>
                <div className="flex items-center gap-2 text-[#171B2E] dark:text-[#E2E0F4] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#20C5D8] flex-shrink-0" />
                  <span>Reduces visitor bounce and drop-off</span>
                </div>
              </div>
            </div>
          )}

          {/* Right Column (7/12): 4 Supporting Benefit Tiles (2x2 Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherBenefits.map((item) => {
              const IconComponent = iconMap[item.iconName] || Sparkles;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-6 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#20C5D8]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#20C5D8]/10 text-[#0E7A8A] dark:text-[#20C5D8] flex items-center justify-center border border-[#20C5D8]/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#E6FAFC] dark:bg-[#122A2F] text-[#0E7A8A] dark:text-[#20C5D8] font-semibold">
                        {item.highlight}
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
                    <span>Always grounded in your docs</span>
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

export default WebsiteAssistantBenefits;

