"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  CheckCircle2,
  FolderTree,
  ShieldCheck,
  FileSpreadsheet,
  Code2,
  BookOpen,
  Search,
  Sparkles,
  Lock,
} from "lucide-react";
import { businessKnowledgeData } from "@/data/businessKnowledgeAccess";

const domainIconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  FileSpreadsheet,
  Code2,
  BookOpen,
};

export const BusinessKnowledgeHero: React.FC = () => {
  const { hero } = businessKnowledgeData;
  const demo = hero.architectureDemo;

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#635BFF]/10 dark:bg-[#635BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#3984FF]/10 dark:bg-[#3984FF]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Small Label Pill */}
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

            {/* CTA Buttons Row */}
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

          {/* Right Column: Organizational Knowledge Architecture Visualization */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#121426] border border-[#E2E6EF] dark:border-[#272B43] shadow-2xl p-5 sm:p-6 space-y-4">
              
              {/* Architecture Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#EEF1F7] dark:border-[#22263E]">
                <div className="flex items-center gap-2">
                  <FolderTree className="w-4 h-4 text-[#635BFF] dark:text-[#A5A0FF]" />
                  <span className="text-xs font-bold text-[#171B2E] dark:text-white uppercase tracking-wider">
                    Enterprise Knowledge Hierarchy
                  </span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#059669] dark:text-[#34D399]">
                  4 Isolated Hubs
                </span>
              </div>

              {/* 4 Partitioned Knowledge Domains Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {demo.domains.map((d, idx) => {
                  const Icon = domainIconMap[d.iconName] || ShieldCheck;
                  return (
                    <div
                      key={d.name}
                      className="p-3 rounded-2xl bg-[#F8FAFD] dark:bg-[#1A1D36] border border-[#E5E9F2] dark:border-[#282D4F] space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[9px] font-mono text-[#10B981] font-semibold">
                          {d.status}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-[#171B2E] dark:text-white truncate">
                        {d.name}
                      </h4>
                      <p className="text-[10px] text-[#8F94A8]">
                        {d.docCount}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Semantic Natural-Language Query Simulation */}
              <div className="p-3.5 rounded-2xl bg-[#F4F6FC] dark:bg-[#181B34] border border-[#E5E9F2] dark:border-[#272C4C] space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#635BFF] dark:text-[#A5A0FF]">
                  <Search className="w-3 h-3" />
                  <span>Natural-Language Retrieval Sample</span>
                </div>
                <p className="text-xs font-medium text-[#171B2E] dark:text-white italic">
                  "{demo.sampleQuery.question}"
                </p>
                <div className="pt-2 border-t border-[#E8ECF4] dark:border-[#252A47] space-y-1">
                  <div className="text-[10px] text-[#8F94A8] font-mono">
                    Source: {demo.sampleQuery.sourceMatch}
                  </div>
                  <p className="text-[11px] text-[#059669] dark:text-[#34D399] leading-relaxed font-medium">
                    {demo.sampleQuery.answer}
                  </p>
                </div>
              </div>

              {/* Architecture footnote */}
              <div className="pt-2 border-t border-[#EEF1F7] dark:border-[#22263E] flex items-center justify-between text-[11px] text-[#8F94A8]">
                <span>Vector embeddings index authoritative text only</span>
                <span className="text-[#635BFF] font-semibold">Single Source of Truth</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessKnowledgeHero;
