"use client";

import React from "react";
import {
  MessageSquare,
  Sparkles,
  BrainCircuit,
  Database,
  ArrowRight,
  CheckCircle2,
  GitMerge,
  Layers,
  Bot,
  Zap,
} from "lucide-react";
import { conversationManagementData } from "@/data/conversationManagement";

export const ConversationOverview: React.FC = () => {
  const { overview } = conversationManagementData;

  return (
    <section
      id="overview"
      aria-label="Conversation Management Overview"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FAFBFE] dark:bg-[#0E1022] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#20C5D8]/6 dark:bg-[#20C5D8]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#20C5D8]" />
            <span>{overview.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {overview.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {overview.description}
          </p>
        </div>

        {/* Interactive Visual Synthesis: Customer Question + Knowledge + Context Convergence */}
        <div className="max-w-5xl mx-auto mb-16 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#15182C] border border-[#E2E6EF] dark:border-[#272B43] shadow-xl relative overflow-hidden">
          
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#635BFF] dark:text-[#A5A0FF]">
              Conversational Synthesis Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#171B2E] dark:text-[#FFFFFF] mt-1">
              How Questions and Knowledge Connect
            </h3>
          </div>

          {/* 3-Way Convergence Grid into Center Synthesis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            
            {/* Input 1: Question */}
            <div className="p-5 rounded-2xl bg-[#F8F9FD] dark:bg-[#1A1E35] border border-[#E5E9F3] dark:border-[#2C314E] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold font-mono text-[#635BFF] dark:text-[#A5A0FF] bg-[#635BFF]/10 px-2 py-0.5 rounded">
                    SOURCE 01
                  </span>
                  <MessageSquare className="w-4 h-4 text-[#635BFF]" />
                </div>
                <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2">
                  Customer Question
                </h4>
                <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                  Everyday phrasing, colloquial terms, and intent recognition without keyword restrictions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8ECF5] dark:border-[#252945] flex items-center gap-2 text-xs text-[#635BFF] dark:text-[#A5A0FF] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Intent Analyzed</span>
              </div>
            </div>

            {/* Input 2: Context Window */}
            <div className="p-5 rounded-2xl bg-[#F8F9FD] dark:bg-[#1A1E35] border border-[#E5E9F3] dark:border-[#2C314E] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold font-mono text-[#3984FF] dark:text-[#7EB3FF] bg-[#3984FF]/10 px-2 py-0.5 rounded">
                    SOURCE 02
                  </span>
                  <BrainCircuit className="w-4 h-4 text-[#3984FF]" />
                </div>
                <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2">
                  Active Context Window
                </h4>
                <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                  Active conversation thread memory, earlier user selections, and preceding entities.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8ECF5] dark:border-[#252945] flex items-center gap-2 text-xs text-[#3984FF] dark:text-[#7EB3FF] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Multi-turn Memory</span>
              </div>
            </div>

            {/* Input 3: Grounded Knowledge */}
            <div className="p-5 rounded-2xl bg-[#F8F9FD] dark:bg-[#1A1E35] border border-[#E5E9F3] dark:border-[#2C314E] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold font-mono text-[#20C5D8] dark:text-[#4FE3F4] bg-[#20C5D8]/10 px-2 py-0.5 rounded">
                    SOURCE 03
                  </span>
                  <Database className="w-4 h-4 text-[#20C5D8]" />
                </div>
                <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2">
                  Product Knowledge Hub
                </h4>
                <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                  Verified product documentation, FAQs, and guides quarantined by product domain.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8ECF5] dark:border-[#252945] flex items-center gap-2 text-xs text-[#20C5D8] dark:text-[#4FE3F4] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Grounded Citations</span>
              </div>
            </div>

          </div>

          {/* Convergence Result Bar */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#635BFF]/10 via-[#3984FF]/10 to-[#20C5D8]/10 border border-[#635BFF]/30 dark:border-[#635BFF]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#20C5D8] flex items-center justify-center text-white flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#171B2E] dark:text-[#FFFFFF] block">
                  Pingo Synthesis Engine
                </span>
                <span className="text-[11px] text-[#62677D] dark:text-[#B5BAD0]">
                  Evaluates question + context + knowledge to compose a precise answer
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#1D213D] border border-[#E2E6EF] dark:border-[#2F3458] text-xs font-semibold text-[#10B981]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Contextually Accurate Output</span>
            </div>
          </div>

        </div>

        {/* 3 Detail Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {overview.pillars.map((pillar) => {
            const isViolet = pillar.color === "violet";
            const isBlue = pillar.color === "blue";

            return (
              <div
                key={pillar.step}
                className="group p-6 rounded-2xl bg-white dark:bg-[#15182C] border border-[#E2E6EF] dark:border-[#252945] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#8F94A8] dark:text-[#6A708A]">
                    STEP {pillar.step}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      isViolet
                        ? "bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] border-[#635BFF]/25"
                        : isBlue
                        ? "bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB3FF] border-[#3984FF]/25"
                        : "bg-[#20C5D8]/10 text-[#0E8A99] dark:text-[#4FE3F4] border-[#20C5D8]/25"
                    }`}
                  >
                    {pillar.tag}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 group-hover:text-[#635BFF] dark:group-hover:text-[#A5A0FF] transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ConversationOverview;

