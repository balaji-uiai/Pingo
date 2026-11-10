"use client";

import React from "react";
import {
  Database,
  FolderTree,
  MessageSquare,
  Target,
  Sparkles,
  CheckCircle2,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { businessKnowledgeData, CapabilityItem } from "@/data/businessKnowledgeAccess";

const iconMap: Record<string, React.ElementType> = {
  Database,
  FolderTree,
  MessageSquare,
  Target,
  Sparkles,
};

export const BusinessKnowledgeCapabilities: React.FC = () => {
  const { capabilities } = businessKnowledgeData;

  return (
    <section
      id="capabilities"
      aria-label="Business Knowledge Architecture Capabilities"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080710] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{capabilities.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {capabilities.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {capabilities.subheading}
          </p>
        </div>

        {/* 5-Card Layered Knowledge Architecture Cards */}
        <div className="max-w-6xl mx-auto space-y-4">
          {capabilities.items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Database;

            return (
              <div
                key={item.id}
                className="rounded-2xl p-6 sm:p-7 bg-[#FAFBFE] dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-sm hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(99,91,255,0.15)] hover:border-[#635BFF]/40 transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column (5/12): Icon, Title, Badge */}
                  <div className="lg:col-span-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#635BFF]/10 to-[#3984FF]/10 text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center border border-[#635BFF]/20 flex-shrink-0 mt-0.5">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white dark:bg-[#1A1435] border border-[#E5E7F0] dark:border-white/[0.08] text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
                          Layer 0{index + 1}
                        </span>
                        <span className="text-[10px] font-mono text-[#62677D] dark:text-[#A5A1BF]">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Middle Column (4/12): Description */}
                  <div className="lg:col-span-4">
                    <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Column (3/12): Architectural Specification Note */}
                  <div className="lg:col-span-3 lg:text-right">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#17122C] border border-[#E5E7F0] dark:border-white/[0.08] text-[11px] font-mono text-[#171B2E] dark:text-[#E2E0F4] shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                      <span className="truncate">{item.architecturePoint}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BusinessKnowledgeCapabilities;

