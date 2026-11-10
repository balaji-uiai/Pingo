"use client";

import React, { useState } from "react";
import {
  Cpu,
  Compass,
  GitMerge,
  BookOpen,
  Columns,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  FileText,
} from "lucide-react";
import { productServiceData, UseCaseItem } from "@/data/productServiceGuidance";

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Compass,
  GitMerge,
  BookOpen,
  Columns,
};

export const ProductServiceUseCases: React.FC = () => {
  const { useCases } = productServiceData;
  const [activeId, setActiveId] = useState<string>(useCases.items[0].id);

  const activeItem =
    useCases.items.find((item) => item.id === activeId) || useCases.items[0];

  const ActiveIcon = iconMap[activeItem.iconName] || Cpu;

  return (
    <section
      id="use-cases"
      aria-label="Product and Service Use Cases"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#F7F8FD] dark:bg-[#0B0918] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[480px] h-[480px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#20C5D8]/30 dark:border-[#20C5D8]/50 bg-[#E6FAFC] dark:bg-[#122A2F] text-[#0E7A8A] dark:text-[#20C5D8] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>{useCases.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {useCases.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {useCases.subheading}
          </p>
        </div>

        {/* Master-Detail Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: 5 Selectable Use Case Tabs */}
          <div className="lg:col-span-5 space-y-2.5">
            {useCases.items.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || Cpu;
              const isSelected = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border flex items-center gap-3.5 ${
                    isSelected
                      ? "bg-white dark:bg-[#15102A] border-[#3984FF] dark:border-[#3984FF] shadow-md shadow-[#3984FF]/10 text-[#171B2E] dark:text-white"
                      : "bg-white/70 dark:bg-[#120E24]/60 border-[#E5E7F0] dark:border-[#28223D] hover:bg-white dark:hover:bg-[#15102A] text-[#62677D] dark:text-[#A5A1BF]"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                      isSelected
                        ? "bg-[#3984FF] text-white"
                        : "bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB5FF]"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-mono font-medium text-[#3984FF] dark:text-[#7EB5FF] block">
                      {item.type}
                    </span>
                    <h4 className="text-sm font-bold truncate">
                      {item.title}
                    </h4>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      isSelected
                        ? "bg-[#3984FF]/15 text-[#3984FF] dark:text-[#7EB5FF]"
                        : "bg-gray-100 dark:bg-white/[0.05]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Use Case Live Inspector */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E7F0] dark:border-white/[0.08] mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3984FF] to-[#20C5D8] text-white flex items-center justify-center shadow-sm">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase text-[#3984FF] dark:text-[#7EB5FF] block">
                        Scenario Type: {activeItem.type}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#171B2E] dark:text-white leading-tight">
                        {activeItem.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-semibold">
                    Document Grounded
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-5">
                  {activeItem.description}
                </p>

                {/* Sample Customer Query */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] block">
                    Typical Customer Question:
                  </span>
                  <div className="p-3.5 rounded-xl bg-[#F7F8FD] dark:bg-[#181330] border border-[#E5E7F0] dark:border-white/[0.08] text-xs sm:text-sm font-medium text-[#171B2E] dark:text-white italic">
                    &ldquo;{activeItem.sampleQuestion}&rdquo;
                  </div>
                </div>

                {/* Grounded Guidance Points */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3984FF] dark:text-[#7EB5FF] block">
                    Grounded AI Guidance Points:
                  </span>
                  <div className="space-y-2">
                    {activeItem.guidancePoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#FAFBFE] dark:bg-[#16122C] border border-[#E5E7F0] dark:border-white/[0.04] text-xs text-[#171B2E] dark:text-[#D5D0E5]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-[#E5E7F0] dark:border-white/[0.08] flex items-center justify-between text-xs text-[#62677D] dark:text-[#A5A1BF]">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#3984FF]" />
                  Answers derived strictly from connected catalogs & docs
                </span>
                <span className="font-mono text-[11px] text-[#20C5D8]">
                  Zero Spec Hallucination
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductServiceUseCases;

