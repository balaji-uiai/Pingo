"use client";

import React from "react";
import {
  FolderGit2,
  Layers,
  MessageSquareText,
  CheckCircle2,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { aiAutomationData } from "@/data/aiAutomation";
import { Icon3D } from "@/components/common/Icon3D";

const iconMap = {
  FolderGit2,
  Layers,
  MessageSquareText,
  CheckCircle2,
};

export const AiAutomationWorkflow: React.FC = () => {
  const { workflow } = aiAutomationData;

  return (
    <section
      id="how-it-works"
      aria-label="How AI Automation Works"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FAFAFE] dark:bg-[#0E1022] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
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

        {/* 4-Step Connected Workflow Visual */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Connecting Line across desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] opacity-30 dark:opacity-40 -z-0" />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative z-10">
            {workflow.steps.map((stepItem, index) => {
              const Icon = iconMap[stepItem.iconName] || CheckCircle2;

              return (
                <div
                  key={stepItem.step}
                  className="group relative p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] dark:bg-[#14172B] border border-[#E5E7F0] dark:border-[#252945] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/50 shadow-sm hover:shadow-xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  {/* Top highlight bar */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#635BFF]/30 to-transparent rounded-t-3xl pointer-events-none" />

                  <div className="space-y-4">
                    {/* Header: 3D Icon & Step Number */}
                    <div className="flex items-center justify-between">
                      <Icon3D icon={Icon} color={stepItem.color} size="md" />

                      <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-[#F5F6FF] dark:bg-[#1A1E36] text-[#635BFF] dark:text-[#20C5D8] border border-[#E5E7F0] dark:border-[#2C3154]">
                        Step {stepItem.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-snug group-hover:text-[#635BFF] dark:group-hover:text-[#20C5D8] transition-colors">
                      {stepItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Micro Detail Pill */}
                  <div className="pt-4 mt-4 border-t border-[#F0F2F8] dark:border-[#232742]">
                    <p className="text-[11px] text-[#62677D] dark:text-[#8E95AF] leading-snug">
                      {stepItem.detail}
                    </p>
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

export default AiAutomationWorkflow;

