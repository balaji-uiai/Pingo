"use client";

import React, { useState } from "react";
import {
  Package,
  Briefcase,
  Route,
  FileSearch,
  HelpCircle,
  Sparkles,
  Bot,
  User,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { customerSupportData, UseCaseItem } from "@/data/customerSupport";

const iconMap: Record<string, React.ElementType> = {
  Package,
  Briefcase,
  Route,
  FileSearch,
  HelpCircle,
};

export const CustomerSupportUseCases: React.FC = () => {
  const { useCases } = customerSupportData;
  const [activeUseCase, setActiveUseCase] = useState<UseCaseItem>(
    useCases.items[0]
  );

  return (
    <section
      id="use-cases"
      aria-label="Customer Support Use Cases"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#F7F8FD] dark:bg-[#0B0918] transition-colors duration-200"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[480px] h-[480px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3984FF]/30 dark:border-[#3984FF]/50 bg-[#EEF4FF] dark:bg-[#152238] text-[#3984FF] dark:text-[#7EB5FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Package className="w-3.5 h-3.5 text-[#3984FF] dark:text-[#7EB5FF]" />
            <span>{useCases.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {useCases.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {useCases.subheading}
          </p>
        </div>

        {/* Top Scenario Category Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {useCases.items.map((item) => {
            const IconComponent = iconMap[item.iconName] || Package;
            const isSelected = activeUseCase.id === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveUseCase(item)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#635BFF] text-white shadow-md shadow-[#635BFF]/30 scale-102"
                    : "bg-white dark:bg-[#141026] text-[#62677D] dark:text-[#A5A1BF] border border-[#E5E7F0] dark:border-[#28223D] hover:border-[#635BFF]/40 hover:text-[#171B2E] dark:hover:text-white"
                }`}
              >
                <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Showcase (Split Canvas) */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Context, Scope & Description */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] font-mono text-xs font-semibold">
                <span>Scenario Category: {activeUseCase.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171B2E] dark:text-[#FFFFFF] leading-tight">
                {activeUseCase.title}
              </h3>

              <p className="text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                {activeUseCase.description}
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#171B2E] dark:text-[#E2E0F4]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Reduces back-and-forth email inquiries</span>
                </div>
                <div className="flex items-center gap-2 text-[#171B2E] dark:text-[#E2E0F4]">
                  <CheckCircle2 className="w-4 h-4 text-[#3984FF] flex-shrink-0" />
                  <span>Answers grounded strictly in verified files</span>
                </div>
                <div className="flex items-center gap-2 text-[#171B2E] dark:text-[#E2E0F4]">
                  <CheckCircle2 className="w-4 h-4 text-[#20C5D8] flex-shrink-0" />
                  <span>Instant handoff to human agents when required</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Conversation Simulation */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl p-5 sm:p-7 bg-[#F7F8FD] dark:bg-[#0D0A1B] border border-[#E5E7F0] dark:border-white/[0.08] space-y-4">
                
                {/* Header status bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7F0] dark:border-white/[0.08] text-xs text-[#62677D] dark:text-[#A5A1BF]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span className="font-semibold text-[#171B2E] dark:text-white">
                      Live Interaction Preview
                    </span>
                  </div>
                  <span className="font-mono text-[11px]">Direct Answer Mode</span>
                </div>

                {/* Customer Question Bubble */}
                <div className="flex items-start gap-3 justify-end pt-2">
                  <div className="max-w-[85%] bg-gradient-to-r from-[#635BFF] to-[#3984FF] text-white p-3.5 rounded-2xl rounded-tr-xs text-xs sm:text-sm shadow-md">
                    <p className="leading-relaxed">{activeUseCase.sampleQuestion}</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#EAEBF0] dark:bg-[#1F1C36] flex items-center justify-center text-[#62677D] dark:text-[#A5A1BF] flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* AI Grounded Response Bubble */}
                <div className="flex items-start gap-3 pt-1">
                  <div className="w-7 h-7 rounded-full bg-[#635BFF]/15 text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center flex-shrink-0 mt-1 border border-[#635BFF]/25">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="max-w-[88%] bg-white dark:bg-[#16122C] border border-[#E5E7F0] dark:border-[#28223D] text-[#171B2E] dark:text-[#F8F7FF] p-4 rounded-2xl rounded-tl-xs space-y-2 text-xs sm:text-sm shadow-sm">
                    <p className="leading-relaxed font-normal">
                      {activeUseCase.sampleAnswer}
                    </p>
                    <div className="pt-2 border-t border-[#E5E7F0] dark:border-white/[0.08] flex items-center justify-between text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                      <span className="font-mono text-[#635BFF] dark:text-[#A5A0FF]">
                        Source: Verified Business Documentation
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#10B981] font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Accurate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportUseCases;

