"use client";

import React from "react";
import {
  Clock,
  Compass,
  CheckCheck,
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { teamAssistanceData, BenefitItem } from "@/data/teamAssistance";

const iconMap: Record<string, React.ElementType> = {
  Clock,
  Compass,
  CheckCheck,
  ShieldCheck,
  Users,
};

export const TeamAssistanceBenefits: React.FC = () => {
  const { benefits } = teamAssistanceData;

  const heroBenefit = benefits.items.find(
    (item) => item.id === "better-accessibility"
  );
  const otherBenefits = benefits.items.filter(
    (item) => item.id !== "better-accessibility"
  );

  return (
    <section
      id="benefits"
      aria-label="Team Knowledge Assistance Benefits"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FAFAFE] dark:bg-[#0B0918] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[130px] pointer-events-none" />

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

        {/* 1 Hero Anchor + 4 Grid Benefit Cards */}
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Top Hero Anchor (Full Width) */}
          {heroBenefit && (
            <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-r from-white via-[#F5F8FF] to-white dark:from-[#131028] dark:via-[#161633] dark:to-[#131028] border border-[#3984FF]/30 shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB5FF] text-xs font-bold font-mono">
                    <Users className="w-3.5 h-3.5" />
                    <span>Primary Advantage: {heroBenefit.tag}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                    {heroBenefit.title}
                  </h3>

                  <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl">
                    {heroBenefit.description} By giving everyone immediate access to the same verified documentation, new hires ramp up faster, cross-functional projects move with confidence, and senior staff stay focused on strategic goals.
                  </p>
                </div>

                <div className="md:col-span-4 flex md:justify-end">
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-white/[0.08] shadow-sm w-full md:w-auto text-center space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#3984FF] dark:text-[#7EB5FF] uppercase tracking-wider block">
                      Team Synergy
                    </span>
                    <span className="text-2xl font-black text-[#171B2E] dark:text-white block">
                      24/7 Aligned
                    </span>
                    <span className="text-[11px] text-[#62677D] dark:text-[#A5A1BF] block">
                      No colleague waiting on answers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4 Supporting Benefits (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherBenefits.map((item) => {
              const IconComponent = iconMap[item.iconName] || Clock;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#3984FF]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#3984FF]/10 dark:bg-[#3984FF]/20 text-[#3984FF] dark:text-[#7EB5FF] flex items-center justify-center border border-[#3984FF]/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#EEF4FF] dark:bg-[#152238] text-[#3984FF] dark:text-[#7EB5FF] font-semibold">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5E7F0] dark:border-white/[0.06] flex items-center gap-1.5 text-xs text-[#10B981] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Eliminates conflicting information</span>
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

export default TeamAssistanceBenefits;

