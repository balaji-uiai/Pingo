"use client";

import React, { useState } from "react";
import {
  Users,
  TrendingUp,
  Briefcase,
  Code2,
  Sparkles,
  Layers,
  Bot,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { teamAssistanceData } from "@/data/teamAssistance";

const iconMap: Record<string, React.ElementType> = {
  Users,
  TrendingUp,
  Briefcase,
  Code2,
  Sparkles,
};

export const TeamAssistanceUseCases: React.FC = () => {
  const { useCases } = teamAssistanceData;
  const [selectedId, setSelectedId] = useState<string>(useCases.items[0].id);

  const selectedItem =
    useCases.items.find((item) => item.id === selectedId) || useCases.items[0];

  const SelectedIcon = iconMap[selectedItem.iconName] || Layers;

  return (
    <section
      id="use-cases"
      aria-label="Everyday Team Use Cases"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#F7F8FD] dark:bg-[#0B0918] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[480px] h-[480px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3984FF]/30 dark:border-[#3984FF]/50 bg-[#EEF4FF] dark:bg-[#152238] text-[#3984FF] dark:text-[#7EB5FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>{useCases.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {useCases.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {useCases.subheading}
          </p>
        </div>

        {/* Top Department Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {useCases.items.map((item) => {
            const IconComponent = iconMap[item.iconName] || Layers;
            const isSelected = item.id === selectedId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#3984FF] text-white shadow-md shadow-[#3984FF]/30 scale-102"
                    : "bg-white dark:bg-[#141026] text-[#62677D] dark:text-[#A5A1BF] border border-[#E5E7F0] dark:border-[#28223D] hover:border-[#3984FF]/40 hover:text-[#171B2E] dark:hover:text-white"
                }`}
              >
                <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{item.department}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Use Case Detailed Display Card */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Department Context & Description */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB5FF] font-mono text-xs font-semibold">
                <span>Department: {selectedItem.department}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171B2E] dark:text-[#FFFFFF] leading-tight">
                {selectedItem.title}
              </h3>

              <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="p-4 rounded-xl bg-[#FAFBFE] dark:bg-[#181432] border border-[#E5E7F0] dark:border-white/[0.08] space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-[#3984FF] dark:text-[#7EB5FF] font-bold block">
                  Authoritative Knowledge Base:
                </span>
                <p className="text-xs font-mono text-[#171B2E] dark:text-[#E2E0F4]">
                  {selectedItem.sourceDoc}
                </p>
              </div>
            </div>

            {/* Right Column: Simulated Pingo Query Retrieval Box */}
            <div className="lg:col-span-7 bg-[#FAFBFE] dark:bg-[#181432] border border-[#E5E7F0] dark:border-[#28223D] rounded-2xl p-6 sm:p-7 shadow-inner space-y-4">
              
              {/* Question Header */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#62677D] dark:text-[#A5A1BF]">
                  <User className="w-3.5 h-3.5 text-[#3984FF]" />
                  <span>Employee Natural-Language Query:</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-white/[0.08] text-sm font-semibold text-[#171B2E] dark:text-[#FFFFFF]">
                  &ldquo;{selectedItem.sampleQuestion}&rdquo;
                </div>
              </div>

              {/* Source Verification Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB5FF] text-xs font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>Grounded from: {selectedItem.sourceDoc}</span>
              </div>

              {/* Verified Answer Response */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-[#62677D] dark:text-[#A5A1BF]">
                  <span className="flex items-center gap-1.5 text-[#10B981]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Pingo Verified Answer:
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    Direct Policy Citation
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#120E24] border border-[#10B981]/30 text-xs sm:text-sm text-[#171B2E] dark:text-[#E2E0F4] leading-relaxed shadow-xs">
                  {selectedItem.groundedAnswer}
                </div>
              </div>

              {/* Security & Verification Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-[#E5E7F0] dark:border-white/[0.06] text-[11px] font-mono text-[#62677D] dark:text-[#A5A1BF]">
                <span className="flex items-center gap-1 text-[#10B981]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Sourced from connected internal docs
                </span>
                <span>Zero guesswork</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamAssistanceUseCases;
