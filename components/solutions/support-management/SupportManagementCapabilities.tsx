"use client";

import React from "react";
import {
  Compass,
  ShieldCheck,
  Zap,
  FolderTree,
  Users,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { supportManagementData } from "@/data/supportManagement";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  ShieldCheck,
  Zap,
  FolderTree,
  Users,
};

export const SupportManagementCapabilities: React.FC = () => {
  const { howPingoHelps } = supportManagementData;

  const spotlightCapability = howPingoHelps.items[0];
  const supportingCapabilities = howPingoHelps.items.slice(1, 5);

  return (
    <section
      id="capabilities"
      aria-label="Support Management Capabilities"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080710] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{howPingoHelps.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {howPingoHelps.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {howPingoHelps.subheading}
          </p>
        </div>

        {/* Asymmetrical 5-Capability Layout (Spotlight + 2x2 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column (5/12): Spotlight Anchor */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-[#635BFF]/10 via-[#3984FF]/5 to-transparent dark:from-[#635BFF]/15 dark:via-[#3984FF]/10 dark:to-transparent border border-[#635BFF]/30 shadow-lg dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center shadow-md">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white dark:bg-[#1A1435] border border-[#635BFF]/30 text-[#635BFF] dark:text-[#A5A0FF]">
                  {spotlightCapability.pillarBadge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                {spotlightCapability.title}
              </h3>

              <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                {spotlightCapability.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#635BFF]/20 space-y-2">
              <span className="text-[11px] font-mono uppercase text-[#635BFF] dark:text-[#A5A0FF] font-semibold block">
                Frontline Operational Standard:
              </span>
              <div className="flex items-center gap-2 text-xs font-medium text-[#10B981]">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Instant retrieval directly inside support workflows</span>
              </div>
            </div>
          </div>

          {/* Right Column (7/12): 2x2 Grid of Capabilities */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportingCapabilities.map((item) => {
              const IconComponent = iconMap[item.iconName] || ShieldCheck;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-6 bg-[#FAFBFE] dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-sm hover:border-[#635BFF]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center border border-[#635BFF]/20">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-[#1C1635] text-[#635BFF] dark:text-[#A5A0FF] font-semibold border border-[#E5E7F0] dark:border-white/[0.08]">
                        {item.pillarBadge}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[#E5E7F0] dark:border-white/[0.06] flex items-center gap-1.5 text-[11px] text-[#10B981] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Always verified against official documentation</span>
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

export default SupportManagementCapabilities;
