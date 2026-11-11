"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Search,
  Globe,
  FileText,
  HelpCircle,
  Table,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { knowledgeManagementData } from "@/data/knowledgeManagement";

export const KnowledgeHero: React.FC = () => {
  const { hero } = knowledgeManagementData;
  const [activeTab, setActiveTab] = useState<"crawler" | "docs" | "vector">("crawler");

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

            {/* Description & Supporting Detail */}
            <div className="space-y-3 max-w-xl">
              <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed font-normal">
                {hero.description}
              </p>
              <p className="text-xs sm:text-sm text-[#787E99] dark:text-[#8E95AF] leading-relaxed font-mono">
                {hero.supportingDescription}
              </p>
            </div>

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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 text-xs text-[#62677D] dark:text-[#8E95AF]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                5 Knowledge Sources
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3984FF]" />
                Crawler &amp; Indexer
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#20C5D8]" />
                Product Isolation
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Knowledge Centers & Crawler Dashboard Preview */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center w-full">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/20 via-[#3984FF]/25 to-[#20C5D8]/20 rounded-full filter blur-3xl transform scale-90 pointer-events-none" />

            {/* Knowledge Centers & Crawler Workspace Window */}
            <div className="relative w-full max-w-[540px] rounded-3xl bg-[#FFFFFF] dark:bg-[#14172B] border border-[#E5E7F0] dark:border-[#282C48] shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300">
              
              {/* Window Header */}
              <div className="p-4 sm:p-5 border-b border-[#F0F2F8] dark:border-[#232742] bg-[#F7F8FE]/80 dark:bg-[#111324] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-tight">
                      {hero.crawlerDashboard.title}
                    </h2>
                    <span className="text-[11px] font-mono text-[#62677D] dark:text-[#8E95AF]">
                      Product Hub: Cloud Suite (Dedicated Center)
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25 text-[11px] font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>{hero.crawlerDashboard.kbStatus}</span>
                </div>
              </div>

              {/* View Switcher Tabs inside Preview */}
              <div className="px-5 pt-3 border-b border-[#F0F2F8] dark:border-[#232742] flex items-center gap-2 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveTab("crawler")}
                  className={`pb-2.5 px-2.5 transition-colors border-b-2 font-semibold ${
                    activeTab === "crawler"
                      ? "text-[#635BFF] dark:text-[#A5A0FF] border-[#635BFF] dark:border-[#A5A0FF]"
                      : "text-[#62677D] dark:text-[#8E95AF] border-transparent hover:text-[#171B2E] dark:hover:text-white"
                  }`}
                >
                  Crawler &amp; Documents
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("docs")}
                  className={`pb-2.5 px-2.5 transition-colors border-b-2 font-semibold ${
                    activeTab === "docs"
                      ? "text-[#3984FF] border-[#3984FF]"
                      : "text-[#62677D] dark:text-[#8E95AF] border-transparent hover:text-[#171B2E] dark:hover:text-white"
                  }`}
                >
                  Manual FAQ &amp; Tables
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("vector")}
                  className={`pb-2.5 px-2.5 transition-colors border-b-2 font-semibold ${
                    activeTab === "vector"
                      ? "text-[#20C5D8] border-[#20C5D8]"
                      : "text-[#62677D] dark:text-[#8E95AF] border-transparent hover:text-[#171B2E] dark:hover:text-white"
                  }`}
                >
                  Vector Search Preview
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-5 space-y-4">
                {activeTab === "crawler" && (
                  <div className="space-y-3.5">
                    {/* Website Crawler Card */}
                    <div className="p-4 rounded-2xl bg-[#F8F9FE] dark:bg-[#181C33] border border-[#E5E7F0] dark:border-[#2D3354] space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#171B2E] dark:text-[#FFFFFF] flex items-center gap-2">
                          <Globe className="w-4 h-4 text-[#635BFF]" />
                          Website Crawler
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] font-mono text-[10px] font-semibold">
                          Health: 100% (sample)
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono bg-white dark:bg-[#101324] px-3 py-2 rounded-xl border border-[#E5E7F0] dark:border-white/5">
                        <span className="text-[#62677D] dark:text-[#B5BAD0] truncate max-w-[200px]">
                          https://{hero.crawlerDashboard.websiteCrawler.source}
                        </span>
                        <span className="text-[#10B981] font-semibold">
                          {hero.crawlerDashboard.websiteCrawler.pagesIndexed}
                        </span>
                      </div>
                    </div>

                    {/* Document Processing Card */}
                    <div className="p-4 rounded-2xl bg-[#F8F9FE] dark:bg-[#181C33] border border-[#E5E7F0] dark:border-[#2D3354] space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#171B2E] dark:text-[#FFFFFF] flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#3984FF]" />
                          Document Processing
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#10B981]/15 text-[#10B981] font-mono text-[10px] font-semibold">
                          Status: {hero.crawlerDashboard.docProcessing.status} ✓
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono bg-white dark:bg-[#101324] px-3 py-2 rounded-xl border border-[#E5E7F0] dark:border-white/5">
                        <span className="text-[#171B2E] dark:text-[#FFFFFF] font-medium truncate max-w-[200px]">
                          {hero.crawlerDashboard.docProcessing.fileName}
                        </span>
                        <span className="text-[#3984FF] text-[11px]">
                          {hero.crawlerDashboard.docProcessing.pagesParsed} • {hero.crawlerDashboard.docProcessing.chunksBuilt}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "docs" && (
                  <div className="space-y-3.5">
                    {/* Manual FAQ Source Card */}
                    <div className="p-4 rounded-2xl bg-[#F8F9FE] dark:bg-[#181C33] border border-[#E5E7F0] dark:border-[#2D3354] space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#171B2E] dark:text-[#FFFFFF] flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#635BFF]" />
                          Manual FAQ Management
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#10B981]/15 text-[#10B981] font-mono text-[10px] font-semibold">
                          Status: {hero.crawlerDashboard.manualFaq.status} ✓
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono bg-white dark:bg-[#101324] px-3 py-2 rounded-xl border border-[#E5E7F0] dark:border-white/5">
                        <span className="text-[#171B2E] dark:text-[#FFFFFF]">
                          {hero.crawlerDashboard.manualFaq.sourceName}
                        </span>
                        <span className="text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
                          {hero.crawlerDashboard.manualFaq.faqCount}
                        </span>
                      </div>
                    </div>

                    {/* Custom Table Ingestion Card */}
                    <div className="p-4 rounded-2xl bg-[#F8F9FE] dark:bg-[#181C33] border border-[#E5E7F0] dark:border-[#2D3354] space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#171B2E] dark:text-[#FFFFFF] flex items-center gap-2">
                          <Table className="w-4 h-4 text-[#20C5D8]" />
                          Structured Custom Tables
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#20C5D8]/15 text-[#0EA5B7] dark:text-[#20C5D8] font-mono text-[10px] font-semibold">
                          3 Tables Indexed
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-center">
                        <div className="p-2 rounded-lg bg-white dark:bg-[#101324] border border-[#E5E7F0] dark:border-white/5">
                          <div className="text-[10px] text-[#62677D] dark:text-[#8E95AF]">Pricing_Tiers</div>
                          <div className="text-[#171B2E] dark:text-white font-bold mt-0.5">4 Plans</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white dark:bg-[#101324] border border-[#E5E7F0] dark:border-white/5">
                          <div className="text-[10px] text-[#62677D] dark:text-[#8E95AF]">Feature_Matrix</div>
                          <div className="text-[#171B2E] dark:text-white font-bold mt-0.5">24 Items</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white dark:bg-[#101324] border border-[#E5E7F0] dark:border-white/5">
                          <div className="text-[10px] text-[#62677D] dark:text-[#8E95AF]">SKU_Directory</div>
                          <div className="text-[#171B2E] dark:text-white font-bold mt-0.5">85 SKUs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "vector" && (
                  <div className="space-y-3.5">
                    {/* Vector Search Live Query Preview */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#635BFF]/5 via-[#3984FF]/5 to-transparent dark:from-[#635BFF]/10 dark:via-[#3984FF]/10 border border-[#635BFF]/25 dark:border-[#635BFF]/40 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 font-semibold text-[#171B2E] dark:text-white">
                          <Search className="w-4 h-4 text-[#635BFF]" />
                          <span>Vector Search Retrieval</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] font-mono text-[10px] font-bold">
                          {hero.crawlerDashboard.vectorSearchPreview.similarityScore}
                        </span>
                      </div>

                      {/* Query bar */}
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#101324] border border-[#E5E7F0] dark:border-white/10 text-xs font-mono flex items-center justify-between">
                        <span className="text-[#62677D] dark:text-[#8E95AF]">
                          Query: <strong className="text-[#171B2E] dark:text-white">&quot;{hero.crawlerDashboard.vectorSearchPreview.query}&quot;</strong>
                        </span>
                        <span className="text-[10px] text-[#3984FF] font-semibold">Semantic Match</span>
                      </div>

                      {/* Matching knowledge snippet */}
                      <div className="p-3 rounded-xl bg-white/80 dark:bg-[#111326] border border-[#E5E7F0] dark:border-white/5 text-xs space-y-1.5">
                        <p className="text-[#171B2E] dark:text-[#E2E8F0] leading-relaxed italic text-[11px]">
                          &quot;{hero.crawlerDashboard.vectorSearchPreview.resultSnippet}&quot;
                        </p>
                        <div className="text-[10px] font-mono text-[#62677D] dark:text-[#8E95AF] flex items-center justify-between pt-1 border-t border-[#F0F2F8] dark:border-white/5">
                          <span>Source: {hero.crawlerDashboard.vectorSearchPreview.sourceDoc}</span>
                          <span className="text-[#10B981] font-medium">Grounding Verified ✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Status Summary */}
                <div className="pt-2 flex items-center justify-between text-xs text-[#62677D] dark:text-[#8E95AF] border-t border-[#F0F2F8] dark:border-[#232742]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#3984FF]" />
                    <span>{hero.crawlerDashboard.activeArticles}</span>
                  </span>
                  <span className="font-mono text-[11px] text-[#10B981]">
                    Zero Data Hallucinations
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KnowledgeHero;
