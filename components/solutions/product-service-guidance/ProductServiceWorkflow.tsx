"use client";

import React from "react";
import {
  FolderPlus,
  FileSpreadsheet,
  MessageSquare,
  CheckCircle,
  Workflow,
  ArrowRight,
  Database,
  Sparkles,
} from "lucide-react";
import { productServiceData, WorkflowStep } from "@/data/productServiceGuidance";

const iconMap: Record<string, React.ElementType> = {
  FolderPlus,
  FileSpreadsheet,
  MessageSquare,
  CheckCircle,
};

export const ProductServiceWorkflow: React.FC = () => {
  const { workflow } = productServiceData;

  return (
    <section
      id="how-it-works"
      aria-label="How Product and Service Guidance Works"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080710] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3984FF]/30 dark:border-[#3984FF]/50 bg-[#EEF4FF] dark:bg-[#152238] text-[#3984FF] dark:text-[#7EB5FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Workflow className="w-3.5 h-3.5 text-[#3984FF] dark:text-[#7EB5FF]" />
            <span>{workflow.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {workflow.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {workflow.subheading}
          </p>
        </div>

        {/* 4-Step Modular Flow Pipeline (2x2 Connected Grid with Directional Indicators) */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {workflow.steps.map((step, index) => {
              const IconComponent = iconMap[step.iconName] || Sparkles;

              return (
                <div
                  key={step.step}
                  className="rounded-2xl p-6 sm:p-8 bg-[#FAFBFE] dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#3984FF]/40 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Meta */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-[#3984FF] font-semibold block">
                            {step.number}
                          </span>
                          <span className="text-xs text-[#62677D] dark:text-[#A5A1BF] font-mono">
                            Phase {step.step} of 04
                          </span>
                        </div>
                      </div>

                      <span className="text-2xl font-black font-mono text-[#E5E7F0] dark:text-[#28223D] group-hover:text-[#3984FF]/30 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[#635BFF] dark:text-[#A5A0FF] mb-3">
                      {step.description}
                    </p>

                    <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Bottom Pipeline Progress Bar */}
                  <div className="pt-4 mt-6 border-t border-[#E5E7F0] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#62677D] dark:text-[#A5A1BF]">
                    <span>Workflow Stage {index + 1}</span>
                    <span className="text-[#3984FF] dark:text-[#7EB5FF] font-semibold flex items-center gap-1">
                      Ready <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Flow Guarantee Pill */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F6FA] dark:bg-[#15102A] border border-[#E5E7F0] dark:border-[#28223D] text-xs text-[#62677D] dark:text-[#A5A1BF]">
              <Database className="w-3.5 h-3.5 text-[#3984FF]" />
              <span>Automatically stays in sync with your latest catalog and service revisions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductServiceWorkflow;

