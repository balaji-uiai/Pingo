"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  FileSpreadsheet,
  Code2,
  CheckSquare,
  BookOpen,
  Database,
  Building2,
  Search,
  User,
  Sparkles,
  FileText,
} from "lucide-react";
import { businessKnowledgeData } from "@/data/businessKnowledgeAccess";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  FileSpreadsheet,
  Code2,
  CheckSquare,
  BookOpen,
};

export const BusinessKnowledgeUseCases: React.FC = () => {
  const { useCases } = businessKnowledgeData;
  const [selectedId, setSelectedId] = useState<string>(useCases.items[0].id);

  const selectedItem =
    useCases.items.find((item) => item.id === selectedId) || useCases.items[0];

  const SelectedIcon = iconMap[selectedItem.iconName] || Database;

  return (
    <section
      id="use-cases"
      aria-label="Everyday Business Knowledge Use Cases"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#F7F8FD] dark:bg-[#0B0918] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[480px] h-[480px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Building2 className="w-3.5 h-3.5" />
            <span>{useCases.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {useCases.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {useCases.subheading}
          </p>
        </div>

        {/* Domain Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {useCases.items.map((item) => {
            const IconComponent = iconMap[item.iconName] || Database;
            const isSelected = item.id === selectedId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
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

        {/* Selected Domain Detailed Showcase Card */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Domain Scope & Knowledge Base Context */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] font-mono text-xs font-semibold">
                <span>Domain: {selectedItem.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171B2E] dark:text-[#FFFFFF] leading-tight">
                {selectedItem.title}
              </h3>

              <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="p-4 rounded-xl bg-[#FAFBFE] dark:bg-[#181432] border border-[#E5E7F0] dark:border-white/[0.08] space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#635BFF] dark:text-[#A5A0FF] font-bold block">
                  Authoritative Partition:
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-[#171B2E] dark:text-[#E2E0F4]">
                  <Database className="w-3.5 h-3.5 text-[#3984FF]" />
                  <span>{selectedItem.sourceBase}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Simulated Pingo Query Retrieval Box */}
            <div className="lg:col-span-7 bg-[#FAFBFE] dark:bg-[#181432] border border-[#E5E7F0] dark:border-[#28223D] rounded-2xl p-6 sm:p-7 shadow-inner space-y-5">
              
              {/* Question Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#62677D] dark:text-[#A5A1BF]">
                  <User className="w-3.5 h-3.5 text-[#635BFF]" />
                  <span>Employee Natural-Language Query:</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-white/[0.08] text-sm font-semibold text-[#171B2E] dark:text-[#FFFFFF]">
                  {selectedItem.userPrompt}
                </div>
              </div>

              {/* Source Verification Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB5FF] text-xs font-mono">
                <Search className="w-3.5 h-3.5" />
                <span>Found in: {selectedItem.sourceBase}</span>
              </div>

              {/* Verified Answer Response */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-[#62677D] dark:text-[#A5A1BF]">
                  <span className="flex items-center gap-1.5 text-[#10B981]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Pingo Verified Answer:
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    100% Sourced
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#120E24] border border-[#10B981]/30 text-xs sm:text-sm text-[#171B2E] dark:text-[#E2E0F4] leading-relaxed shadow-xs">
                  {selectedItem.retrievedSnippet}
                </div>
              </div>

              {/* Citation Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-[#E5E7F0] dark:border-white/[0.06] text-[11px] font-mono text-[#62677D] dark:text-[#A5A1BF]">
                <span className="flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-[#635BFF]" />
                  Direct paragraph citation verified
                </span>
                <span className="text-emerald-600 dark:text-emerald-400">0 hallucination</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessKnowledgeUseCases;
