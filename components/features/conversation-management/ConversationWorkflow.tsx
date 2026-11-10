"use client";

import React from "react";
import {
  MessageCircle,
  BrainCircuit,
  Database,
  CheckCheck,
  Workflow,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { conversationManagementData } from "@/data/conversationManagement";
import { Icon3D } from "@/components/common/Icon3D";

const iconMap = {
  MessageCircle,
  BrainCircuit,
  Database,
  CheckCheck,
};

export const ConversationWorkflow: React.FC = () => {
  const { workflow } = conversationManagementData;

  return (
    <section
      id="workflow"
      aria-label="How Conversations Work"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#F6F8FC] dark:bg-[#0E1022] transition-colors duration-200"
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

        {/* 4-Step Connected Flow Cards */}
        <div className="relative max-w-6xl mx-auto">
          {/* Continuous connection track across desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] opacity-30 dark:opacity-45 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {workflow.steps.map((step, idx) => {
              const Icon = iconMap[step.iconName] || MessageCircle;

              return (
                <div
                  key={step.step}
                  className="group relative rounded-2xl p-6 sm:p-7 border border-[#E2E6EF] dark:border-[#272B43] bg-[#FFFFFF] dark:bg-[#16182C] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Step Number & 3D Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <Icon3D
                          icon={Icon}
                          color={step.color}
                          size="md"
                          className="group-hover:scale-110 transition-transform duration-300 shadow-sm"
                        />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#F0F2F9] dark:bg-[#1F233D] text-[#635BFF] dark:text-[#A5A0FF] border border-[#E2E6EF] dark:border-[#2D3356]">
                        STEP {step.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-3 group-hover:text-[#635BFF] dark:group-hover:text-[#A5A0FF] transition-colors">
                      {step.title}
                    </h3>

                    {/* Primary Description */}
                    <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Micro Detail Pill at the bottom */}
                  <div className="pt-4 border-t border-[#EEF1F7] dark:border-[#242842] mt-2">
                    <p className="text-xs text-[#8288A0] dark:text-[#8D93AF] leading-normal italic">
                      "{step.detail}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real-time conversational assurance banner */}
        <div className="mt-12 max-w-3xl mx-auto rounded-xl p-4 sm:p-5 border border-[#3984FF]/20 dark:border-[#3984FF]/30 bg-[#3984FF]/5 dark:bg-[#3984FF]/10 text-center">
          <p className="text-xs sm:text-sm text-[#464B63] dark:text-[#C5CAF0] leading-relaxed">
            <span className="font-semibold text-[#3984FF] dark:text-[#7EB3FF]">Instant Multiturn Memory: </span>
            Every step preserves conversational context so customers can ask follow-up questions naturally without starting over.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ConversationWorkflow;

