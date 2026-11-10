"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Sparkles,
  CheckCircle2,
  FolderTree,
  FileText,
  Search,
  Bot,
  User,
  ShieldCheck,
  Layers,
  ArrowDown,
  Workflow,
  Share2,
} from "lucide-react";
import { businessKnowledgeData } from "@/data/businessKnowledgeAccess";

interface KnowledgeFlowScenario {
  id: string;
  tabLabel: string;
  sourceDoc: string;
  docFormat: string;
  knowledgeBase: string;
  userQuestion: string;
  aiAnswer: string;
  sourceCitation: string;
}

const knowledgeFlowScenarios: KnowledgeFlowScenario[] = [
  {
    id: "remote-policy",
    tabLabel: "Operations Policy",
    sourceDoc: "Internal_Operations_Manual_2026.pdf",
    docFormat: "PDF",
    knowledgeBase: "Operations & HR Knowledge Base",
    userQuestion: "What is the policy for remote workspace equipment reimbursement?",
    aiAnswer:
      "Employees receive a one-time $500 home office stipend upon joining, plus up to $75 monthly reimbursement for high-speed home internet submitted via the payroll portal.",
    sourceCitation: "Section 4.1 — Remote Work & Home Equipment",
  },
  {
    id: "api-specs",
    tabLabel: "Engineering Docs",
    sourceDoc: "Platform_Architecture_API_v3.md",
    docFormat: "Markdown",
    knowledgeBase: "Engineering & Technical Base",
    userQuestion: "What is the retry timeout configured for our webhook delivery pipeline?",
    aiAnswer:
      "Webhooks automatically retry up to 5 times using exponential backoff intervals with a maximum hard timeout of 10 seconds per delivery attempt.",
    sourceCitation: "Section 7.3 — Webhook Architecture & Resilience",
  },
  {
    id: "compliance-audit",
    tabLabel: "Security & SOC 2",
    sourceDoc: "Data_Governance_SOC2_Summary.docx",
    docFormat: "DOCX",
    knowledgeBase: "Compliance & Security Base",
    userQuestion: "How frequently do we conduct access reviews for privileged team accounts?",
    aiAnswer:
      "Privileged system access reviews are conducted quarterly by team leads, with automated de-provisioning triggered immediately upon employee role transitions.",
    sourceCitation: "Section 2.4 — Identity & Access Governance",
  },
];

export const BusinessKnowledgeHero: React.FC = () => {
  const { hero } = businessKnowledgeData;
  const [activeScenario, setActiveScenario] = useState<KnowledgeFlowScenario>(
    knowledgeFlowScenarios[0]
  );

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting in Pingo brand colors */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#635BFF]/10 dark:bg-[#635BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#3984FF]/10 dark:bg-[#3984FF]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Database className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.12]">
              {hero.headingPart1}{" "}
              <span className="block sm:inline bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
                {hero.headingPart2}
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed font-normal">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2E74E6] border border-white/20 shadow-[0_0_25px_rgba(99,91,255,0.4)] hover:shadow-[0_0_35px_rgba(99,91,255,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>{hero.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#171B2E] dark:text-[#FFFFFF] bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:bg-[#EAEBF0] dark:hover:bg-[#202440] transition-all duration-200 cursor-pointer"
              >
                <span>{hero.secondaryCta.text}</span>
              </Link>
            </div>

            {/* Reassurance Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 pt-2 text-xs text-[#62677D] dark:text-[#A5A1BF]">
              {hero.highlights.map((item, idx) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle2
                    className={`w-3.5 h-3.5 ${
                      idx === 0
                        ? "text-[#635BFF]"
                        : idx === 1
                        ? "text-[#3984FF]"
                        : "text-[#20C5D8]"
                    }`}
                  />
                  <span>{item}</span>
                  {idx < hero.highlights.length - 1 && (
                    <span className="text-gray-300 dark:text-gray-700 ml-2">
                      •
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Knowledge Architecture Diagram */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            {/* Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/15 via-[#3984FF]/20 to-[#20C5D8]/15 rounded-3xl filter blur-3xl transform scale-90 pointer-events-none" />

            {/* Main Architecture Diagram Container */}
            <div className="relative w-full max-w-lg rounded-2xl bg-white/95 dark:bg-[#100D1E]/95 border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden transition-all duration-300">
              
              {/* Header Bar with Architecture Topic Switcher */}
              <div className="px-5 pt-3 pb-2.5 border-b border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#15102A]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] font-semibold">
                    Information Architecture & Retrieval
                  </span>
                  <span className="text-[10px] font-mono text-[#635BFF] dark:text-[#A5A0FF]">
                    Pingo Hierarchy
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {knowledgeFlowScenarios.map((item) => {
                    const isSelected = activeScenario.id === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveScenario(item)}
                        className={`px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200 text-center truncate cursor-pointer ${
                          isSelected
                            ? "bg-[#635BFF] text-white shadow-sm"
                            : "bg-white dark:bg-[#1A1435] text-[#171B2E] dark:text-[#A5A1BF] border border-[#E5E7F0] dark:border-[#28223D] hover:border-[#635BFF]/40"
                        }`}
                      >
                        {item.tabLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Architectural Stages View */}
              <div className="p-5 space-y-3.5 text-xs">
                
                {/* Stage 1: Connected Business Sources */}
                <div className="p-3 rounded-xl bg-[#F5F6FA] dark:bg-[#16122C] border border-[#E5E7F0] dark:border-white/[0.06] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#635BFF] dark:text-[#A5A0FF] font-semibold flex items-center gap-1.5">
                      <Share2 className="w-3 h-3" />
                      1. Connected Business Information Sources
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
                      {activeScenario.docFormat}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#171B2E] dark:text-white font-mono text-xs truncate">
                    <FileText className="w-3.5 h-3.5 text-[#3984FF] flex-shrink-0" />
                    <span className="truncate">{activeScenario.sourceDoc}</span>
                  </div>
                </div>

                {/* Connecting Arrow */}
                <div className="flex justify-center -my-1 text-[#635BFF] dark:text-[#A5A0FF]">
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </div>

                {/* Stage 2: Structured Dedicated Knowledge Base */}
                <div className="p-3 rounded-xl bg-[#20C5D8]/8 dark:bg-[#20C5D8]/10 border border-[#20C5D8]/25 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0E7A8A] dark:text-[#20C5D8] font-semibold flex items-center gap-1.5">
                      <FolderTree className="w-3 h-3" />
                      2. Structured Knowledge Center & Dedicated Base
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                      Indexed
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#171B2E] dark:text-white">
                    <Database className="w-3.5 h-3.5 text-[#20C5D8]" />
                    <span>{activeScenario.knowledgeBase}</span>
                  </div>
                </div>

                {/* Connecting Arrow */}
                <div className="flex justify-center -my-1 text-[#20C5D8]">
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </div>

                {/* Stage 3: Natural Language Query & Instant Grounded Answer */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#635BFF]/10 via-[#3984FF]/10 to-[#20C5D8]/10 border border-[#635BFF]/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#3984FF] dark:text-[#7EB5FF] font-semibold flex items-center gap-1.5">
                      <Bot className="w-3 h-3" />
                      3. Natural Language Retrieval & Response
                    </span>
                    <span className="text-[10px] font-mono text-[#10B981] font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      100% Grounded
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white dark:bg-[#1A1435] border border-black/[0.06] dark:border-white/[0.08] text-xs font-medium text-[#171B2E] dark:text-white italic">
                    &ldquo;{activeScenario.userQuestion}&rdquo;
                  </div>

                  <p className="text-xs text-[#171B2E] dark:text-[#F8F7FF] leading-relaxed pt-1">
                    {activeScenario.aiAnswer}
                  </p>

                  <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#62677D] dark:text-[#A5A1BF]">
                    <span>Citation: {activeScenario.sourceCitation}</span>
                    <span className="text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
                      Instant Access
                    </span>
                  </div>
                </div>

              </div>

              {/* Bottom Hierarchy Notice */}
              <div className="px-5 py-2.5 border-t border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#130E26] flex items-center justify-between text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                <span className="font-mono text-[10px]">
                  Hierarchy: Product → Knowledge Center → Dedicated Base
                </span>
                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Synced
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessKnowledgeHero;

