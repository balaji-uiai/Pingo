"use client";

import React from "react";
import {
  Compass,
  MessageSquare,
  Target,
  FolderTree,
  ShieldCheck,
  CheckCircle2,
  Users,
  Sparkles,
} from "lucide-react";
import { teamAssistanceData, CapabilityItem } from "@/data/teamAssistance";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  MessageSquare,
  Target,
  FolderTree,
  ShieldCheck,
};

export const TeamAssistanceCapabilities: React.FC = () => {
  const { capabilities } = teamAssistanceData;

  const topThree = capabilities.items.slice(0, 3);
  const bottomTwo = capabilities.items.slice(3, 5);

  return (
    <section
      id="capabilities"
      aria-label="Team Knowledge Assistance Capabilities"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080710] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3984FF]/30 dark:border-[#3984FF]/50 bg-[#EEF4FF] dark:bg-[#152238] text-[#3984FF] dark:text-[#7EB5FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#3984FF] dark:text-[#7EB5FF]" />
            <span>{capabilities.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {capabilities.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {capabilities.subheading}
          </p>
        </div>

        {/* 3 + 2 Enablement Matrix */}
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Top Row: 3 Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topThree.map((item) => {
              const IconComponent = iconMap[item.iconName] || Compass;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-6 sm:p-7 bg-[#FAFBFE] dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#3984FF]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#3984FF]/10 dark:bg-[#3984FF]/20 text-[#3984FF] dark:text-[#7EB5FF] flex items-center justify-center border border-[#3984FF]/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1A1435] border border-[#E5E7F0] dark:border-white/[0.08] text-[#3984FF] dark:text-[#7EB5FF] font-semibold">
                        {item.badge}
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
                    <span className="truncate">{item.teamImpact}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 2 Wider Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bottomTwo.map((item) => {
              const IconComponent = iconMap[item.iconName] || FolderTree;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-7 bg-[#FAFBFE] dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#635BFF]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#635BFF]/10 dark:bg-[#635BFF]/20 text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center border border-[#635BFF]/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1A1435] border border-[#E5E7F0] dark:border-white/[0.08] text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5E7F0] dark:border-white/[0.06] flex items-center gap-1.5 text-xs text-[#10B981] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{item.teamImpact}</span>
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

export default TeamAssistanceCapabilities;

