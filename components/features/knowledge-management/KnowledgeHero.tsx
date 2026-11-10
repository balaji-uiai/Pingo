"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Search,
  FolderKanban,
  FileText,
  Sparkles,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { knowledgeManagementData } from "@/data/knowledgeManagement";

export const KnowledgeHero: React.FC = () => {
  const { hero } = knowledgeManagementData;

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#635BFF]/10 dark:bg-[#635BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#3984FF]/10 dark:bg-[#3984FF]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Small Label Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Database className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.14]">
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

              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#171B2E] dark:text-[#FFFFFF] bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:bg-[#EAEBF0] dark:hover:bg-[#202440] transition-all duration-200 cursor-pointer"
              >
                <span>{hero.secondaryCta.text}</span>
              </a>
            </div>

            {/* Feature Highlights */}
            <div className="flex items-center gap-4 pt-2 text-xs text-[#62677D] dark:text-[#8E95AF]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Product Isolation
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3984FF]" />
                Vector Indexed
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#20C5D8]" />
                Granular Control
              </span>
            </div>
          </div>

          {/* Right Column: Polished Knowledge Management Interface Illustration */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center w-full">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/20 via-[#3984FF]/25 to-[#20C5D8]/20 rounded-full filter blur-3xl transform scale-90 pointer-events-none" />

            {/* Knowledge Management Workspace Preview Window */}
            <div className="relative w-full max-w-[520px] rounded-3xl bg-[#FFFFFF] dark:bg-[#14172B] border border-[#E5E7F0] dark:border-[#282C48] shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300">
              
              {/* Top Search & Filter Bar */}
              <div className="p-4 sm:p-5 border-b border-[#F0F2F8] dark:border-[#232742] bg-[#F7F8FE]/80 dark:bg-[#111324] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center font-bold text-xs">
                      P
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      Knowledge Centers
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] text-[10px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    3 Active Hubs
                  </span>
                </div>

                {/* Search Bar Simulation */}
                <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#FFFFFF] dark:bg-[#191D38] border border-[#E5E7F0] dark:border-[#2C3154] text-xs text-[#62677D] dark:text-[#B5BAD0]">
                  <div className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-[#3984FF]" />
                    <span>Search across all product documentation...</span>
                  </div>
                  <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-[#F0EDFF] dark:bg-[#23274A] text-[#635BFF] dark:text-[#A5A0FF] font-mono">
                    ⌘K
                  </kbd>
                </div>
              </div>

              {/* Product Knowledge Center List */}
              <div className="p-4 sm:p-5 space-y-3">
                {hero.products.map((product) => {
                  const colorConfig =
                    product.color === "violet"
                      ? {
                          badge: "bg-[#635BFF]/10 text-[#635BFF] dark:bg-[#635BFF]/20 dark:text-[#A5A0FF]",
                          border: "border-[#635BFF]/25 hover:border-[#635BFF]/50",
                          iconBg: "bg-[#635BFF]",
                        }
                      : product.color === "blue"
                      ? {
                          badge: "bg-[#3984FF]/10 text-[#3984FF] dark:bg-[#3984FF]/20 dark:text-[#38BDF8]",
                          border: "border-[#3984FF]/25 hover:border-[#3984FF]/50",
                          iconBg: "bg-[#3984FF]",
                        }
                      : {
                          badge: "bg-[#20C5D8]/10 text-[#00A3C4] dark:bg-[#20C5D8]/20 dark:text-[#20C5D8]",
                          border: "border-[#20C5D8]/25 hover:border-[#20C5D8]/50",
                          iconBg: "bg-[#20C5D8]",
                        };

                  return (
                    <div
                      key={product.id}
                      className={`p-3.5 rounded-2xl bg-[#F8F9FE] dark:bg-[#181C35] border ${colorConfig.border} transition-all duration-200 hover:scale-[1.01] space-y-2`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-7 h-7 rounded-lg ${colorConfig.iconBg} text-white flex items-center justify-center flex-shrink-0`}
                          >
                            <FolderKanban className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                              {product.name}
                            </h4>
                            <span className="text-[10px] text-[#62677D] dark:text-[#8E95AF]">
                              {product.docsCount} • {product.kbStatus}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colorConfig.badge}`}
                        >
                          {product.tag}
                        </span>
                      </div>

                      {/* Sample Docs Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {product.sampleDocs.map((doc) => (
                          <span
                            key={doc}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FFFFFF] dark:bg-[#121428] border border-[#E5E7F0] dark:border-[#282C48] text-[10px] text-[#62677D] dark:text-[#B5BAD0]"
                          >
                            <FileText className="w-2.5 h-2.5 text-[#3984FF]" />
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer Status Line */}
              <div className="px-5 py-3 border-t border-[#F0F2F8] dark:border-[#232742] bg-[#F7F8FE]/60 dark:bg-[#111324] flex items-center justify-between text-xs text-[#62677D] dark:text-[#8E95AF]">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#10B981]" />
                  Zero Cross-Product Data Bleed
                </span>
                <span className="text-[11px] font-semibold text-[#635BFF] dark:text-[#20C5D8]">
                  Independent Storage Active
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KnowledgeHero;

