"use client";

import React, { useState } from "react";
import {
  Zap,
  MessageSquareQuote,
  Sparkles,
  Database,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Search,
  ArrowRight,
  Bot,
  User,
} from "lucide-react";
import { customerSupportData, CapabilityItem } from "@/data/customerSupport";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  MessageSquareQuote,
  Sparkles,
  Database,
  CheckCircle2,
};

export const CustomerSupportCapabilities: React.FC = () => {
  const { capabilities } = customerSupportData;
  const [activeCapability, setActiveCapability] = useState<CapabilityItem>(
    capabilities.items[0]
  );

  return (
    <section
      id="capabilities"
      aria-label="Core Support Capabilities"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080710] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{capabilities.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {capabilities.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {capabilities.subheading}
          </p>
        </div>

        {/* Interactive Capability Showcase (Workbench Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: 5 Selectable Capability Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
            {capabilities.items.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || Sparkles;
              const isSelected = activeCapability.id === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveCapability(item)}
                  className={`w-full p-4 sm:p-4.5 rounded-2xl text-left transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-[#F5F4FF] dark:bg-[#15102A] border-[#635BFF] dark:border-[#8138F7] shadow-md dark:shadow-[0_4px_25px_rgba(99,91,255,0.2)]"
                      : "bg-[#FAFBFE] dark:bg-[#100D1E]/70 border-[#E5E7F0] dark:border-[#28223D] hover:bg-white dark:hover:bg-[#15102A] hover:border-[#635BFF]/30"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 mt-0.5 ${
                        isSelected
                          ? "bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white shadow-sm"
                          : "bg-[#635BFF]/10 dark:bg-[#635BFF]/20 text-[#635BFF] dark:text-[#A5A0FF] border border-[#635BFF]/20"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                          {item.title}
                        </h3>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                            isSelected
                              ? "bg-[#635BFF] text-white"
                              : "bg-gray-100 dark:bg-white/[0.08] text-[#62677D] dark:text-[#A5A1BF]"
                          }`}
                        >
                          0{index + 1}
                        </span>
                      </div>

                      <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] line-clamp-2 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Capability Inspector Preview */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="h-full rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-white to-[#F9F9FE] dark:from-[#120E24] dark:to-[#0D0A1B] border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between">
              
              {/* Card Header Bar */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E7F0] dark:border-white/[0.08] mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#171B2E] dark:text-[#FFFFFF]">
                      Capability Live Demo: {activeCapability.title}
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] border border-[#635BFF]/20 font-semibold">
                    {activeCapability.highlight}
                  </span>
                </div>

                {/* Simulated Customer Question */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#3984FF]" />
                      Customer Inquires Naturally
                    </span>
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1533] border border-[#E5E7F0] dark:border-white/[0.08] text-xs sm:text-sm font-medium text-[#171B2E] dark:text-white shadow-xs">
                      &ldquo;{activeCapability.preview.query}&rdquo;
                    </div>
                  </div>

                  {/* Connected Knowledge Source Grounding */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-[#20C5D8]" />
                      Connected Source Document Matched
                    </span>
                    <div className="p-3 rounded-xl bg-[#20C5D8]/8 dark:bg-[#20C5D8]/10 border border-[#20C5D8]/25 text-xs font-mono text-[#0E7A8A] dark:text-[#20C5D8] flex items-center justify-between">
                      <div className="flex items-center gap-2 truncate">
                        <FileText className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{activeCapability.preview.source}</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#20C5D8]/20 font-bold flex-shrink-0">
                        99.4% Match
                      </span>
                    </div>
                  </div>

                  {/* Synthesized Verified Response */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-[#635BFF]" />
                      Grounded AI Assistant Guidance
                    </span>
                    <div className="p-4 rounded-xl bg-gradient-to-tr from-[#635BFF]/5 to-[#3984FF]/5 dark:from-[#635BFF]/10 dark:to-[#3984FF]/10 border border-[#635BFF]/30 text-xs sm:text-sm text-[#171B2E] dark:text-[#F8F7FF] leading-relaxed">
                      {activeCapability.preview.response}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Reassurance Footer */}
              <div className="mt-6 pt-4 border-t border-[#E5E7F0] dark:border-white/[0.08] flex items-center justify-between text-xs text-[#62677D] dark:text-[#A5A1BF]">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zero Hallucinations • Connected Source Citation</span>
                </div>
                <span className="font-mono text-[11px] text-[#635BFF] dark:text-[#A5A0FF]">
                  Context Preserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportCapabilities;

