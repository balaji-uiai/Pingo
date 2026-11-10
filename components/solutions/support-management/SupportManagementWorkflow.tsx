"use client";

import React from "react";
import {
  FolderPlus,
  Layers,
  MessageSquare,
  CheckCircle,
  Workflow,
  ArrowRight,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { supportManagementData, WorkflowStep } from "@/data/supportManagement";

const iconMap: Record<string, React.ElementType> = {
  FolderPlus,
  Layers,
  MessageSquare,
  CheckCircle,
};

export const SupportManagementWorkflow: React.FC = () => {
  const { workflow } = supportManagementData;

  return (
    <section
      id="how-it-works"
      aria-label="How Support Knowledge Management Works"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080710] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Workflow className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{workflow.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {workflow.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {workflow.subheading}
          </p>
        </div>

        {/* 4-Step Pipeline Flow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Continuous connection track across desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] opacity-30 dark:opacity-45 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {workflow.steps.map((step, index) => {
              const IconComponent = iconMap[step.iconName] || SlidersHorizontal;

              return (
                <div
                  key={step.step}
                  className="rounded-2xl p-6 bg-[#FAFBFE] dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#635BFF]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Step Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>

                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-white dark:bg-[#1C1635] border border-[#E5E7F0] dark:border-white/[0.08] text-[#635BFF] dark:text-[#A5A0FF]">
                        {step.step}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#635BFF] dark:text-[#A5A0FF] font-semibold block mb-1">
                      {step.number}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[#3984FF] dark:text-[#7EB5FF] mb-3">
                      {step.description}
                    </p>

                    <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="pt-4 mt-5 border-t border-[#E5E7F0] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#62677D] dark:text-[#A5A1BF]">
                    <span>Stage 0{index + 1} of 04</span>
                    <span className="text-[#635BFF] dark:text-[#A5A0FF] font-semibold flex items-center gap-1">
                      Ready <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Quality Guarantee */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F6FA] dark:bg-[#15102A] border border-[#E5E7F0] dark:border-[#28223D] text-xs text-[#62677D] dark:text-[#A5A1BF]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#635BFF]" />
              <span>Connect internal resolution guides and deliver factual, verified answers 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportManagementWorkflow;

