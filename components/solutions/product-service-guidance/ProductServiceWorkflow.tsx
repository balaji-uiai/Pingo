"use client";

import React from "react";
import {
  Compass,
  HelpCircle,
  Search,
  CheckCircle,
  Award,
  Workflow,
  Sparkles,
} from "lucide-react";
import { productServiceData } from "@/data/productServiceGuidance";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  HelpCircle,
  Search,
  CheckCircle,
  Award,
};

export const ProductServiceWorkflow: React.FC = () => {
  const { workflow } = productServiceData;

  return (
    <section
      id="workflow"
      aria-label="Product Discovery Journey"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FAFBFE] dark:bg-[#0A0815] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 lg:mb-20 space-y-4">
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

        {/* 5-Step Connected Product Discovery Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Continuous connection track across desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#3984FF] via-[#20C5D8] to-[#10B981] opacity-35 dark:opacity-45 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {workflow.steps.map((step, index) => {
              const IconComponent = iconMap[step.iconName] || Sparkles;

              return (
                <div
                  key={step.step}
                  className="flex flex-col rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#131526] border border-[#E5E7F0] dark:border-[#252844] shadow-sm hover:border-[#3984FF]/40 transition-all duration-300 hover:-translate-y-1 group justify-between"
                >
                  <div>
                    {/* Step Header Badge with Node Indicator */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3984FF] to-[#20C5D8] text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:scale-105 transition-transform duration-200">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>

                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#F0F2F9] dark:bg-[#1C1F36] text-[#3984FF] dark:text-[#7EB5FF] border border-[#E5E7F0] dark:border-[#2A2E4E]">
                        {step.step}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-sm sm:text-base font-bold text-[#171B2E] dark:text-white leading-snug mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-3">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Detail Text */}
                  <p className="text-[11px] text-[#8F94A8] dark:text-[#8D93AF] leading-relaxed pt-2.5 border-t border-[#EEF1F7] dark:border-[#22253E] italic">
                    "{step.detail}"
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductServiceWorkflow;
