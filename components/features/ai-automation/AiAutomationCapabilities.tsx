"use client";

import React from "react";
import {
  Bot,
  Database,
  Sparkles,
  Cpu,
  ShieldCheck,
  UserCheck,
  Layers,
} from "lucide-react";
import { aiAutomationData } from "@/data/aiAutomation";
import { Icon3D } from "@/components/common/Icon3D";

const iconMap = {
  Bot,
  Database,
  Sparkles,
  Cpu,
  ShieldCheck,
  UserCheck,
};

export const AiAutomationCapabilities: React.FC = () => {
  const { capabilities } = aiAutomationData;

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#3984FF]/6 dark:bg-[#3984FF]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>KEY CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            Engineered for Precision.{" "}
            <span className="bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
              Built for Scale.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            Six purpose-built capabilities powering conversational intelligence from initial inquiry through resolution.
          </p>
        </div>

        {/* Clean, Visually Varied 3-Column Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {capabilities.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Bot;

            return (
              <div
                key={item.id}
                className="group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F8F9FE] dark:bg-[#13172C] border border-[#E5E7F0] dark:border-[#252945] hover:border-[#635BFF]/40 dark:hover:border-[#635BFF]/50 shadow-xs hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top specular glow line on hover */}
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#635BFF]/30 to-transparent rounded-t-2xl sm:rounded-t-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Top row: 3D Tactile Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <Icon3D icon={Icon} color={item.color} size="md" />

                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#1B1F3B] text-[#62677D] dark:text-[#A5A0FF] border border-[#E5E7F0] dark:border-[#2C3154]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Index */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold text-[#635BFF] dark:text-[#20C5D8]">
                      {item.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-snug group-hover:text-[#635BFF] dark:group-hover:text-[#20C5D8] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom subtle indicator */}
                <div className="pt-4 mt-4 border-t border-[#E5E7F0]/60 dark:border-[#232742] flex items-center justify-between text-[11px] text-[#62677D] dark:text-[#8E95AF]">
                  <span>Active Module</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AiAutomationCapabilities;

