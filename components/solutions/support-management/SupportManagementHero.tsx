"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  SlidersHorizontal,
  Sparkles,
  CheckCircle2,
  Database,
  FileText,
  ShieldCheck,
  Bot,
  User,
  ArrowDown,
  Layers,
  Search,
  Send,
} from "lucide-react";
import { supportManagementData } from "@/data/supportManagement";

interface SupportResolutionScenario {
  id: string;
  tabLabel: string;
  customerName: string;
  inquiryCategory: string;
  customerQuestion: string;
  sourceDoc: string;
  sourceSection: string;
  supportAnswer: string;
}

const supportResolutionScenarios: SupportResolutionScenario[] = [
  {
    id: "tier-upgrade",
    tabLabel: "Tier Upgrade",
    customerName: "Alex M. (Enterprise Client)",
    inquiryCategory: "Billing & Workspace Transfer",
    customerQuestion:
      "Can we upgrade our workspace tier mid-billing cycle, and will our existing knowledge bases transfer?",
    sourceDoc: "Subscription_Terms_2026.pdf",
    sourceSection: "Section 3.2 — Mid-term Upgrades & Data Retention",
    supportAnswer:
      "Yes! Mid-cycle tier upgrades are automatically prorated on your invoice. All connected knowledge bases, vector embeddings, and conversation histories transfer instantly with zero downtime.",
  },
  {
    id: "refund-auth",
    tabLabel: "Refund Terms",
    customerName: "Sarah K. (Starter Plan)",
    inquiryCategory: "Cancellation & Refund Policy",
    customerQuestion:
      "What is the refund eligibility window if our team cancels within the first month?",
    sourceDoc: "Customer_Agreement_Billing_v4.pdf",
    sourceSection: "Section 5.1 — 14-Day Money-Back Guarantee",
    supportAnswer:
      "Full refunds are available within 14 calendar days of your initial subscription purchase. Beyond 14 days, prorated credits are automatically issued to your workspace account.",
  },
  {
    id: "api-limits",
    tabLabel: "API Rate Limits",
    customerName: "David L. (DevOps Lead)",
    inquiryCategory: "Technical Integration",
    customerQuestion:
      "What is the maximum query rate supported per second for custom API webhooks?",
    sourceDoc: "Platform_Architecture_API_Specs.md",
    sourceSection: "Section 8.4 — Rate Limiting & Burst Headers",
    supportAnswer:
      "Standard accounts support up to 25 queries per second with a burst buffer of 50 requests. Enterprise accounts feature dedicated throughput with custom SLA limits.",
  },
];

export const SupportManagementHero: React.FC = () => {
  const { hero } = supportManagementData;
  const [activeScenario, setActiveScenario] =
    useState<SupportResolutionScenario>(supportResolutionScenarios[0]);

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
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
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

          {/* Right Column: Support-Workflow Visual Concept (Question ➔ Retrieval ➔ Helpful Answer) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            {/* Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/15 via-[#3984FF]/20 to-[#20C5D8]/15 rounded-3xl filter blur-3xl transform scale-90 pointer-events-none" />

            {/* Main Visual Composition Container */}
            <div className="relative w-full max-w-lg rounded-2xl bg-white/95 dark:bg-[#100D1E]/95 border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden transition-all duration-300">
              
              {/* Header: Support Workflow Console */}
              <div className="px-5 pt-3.5 pb-2.5 border-b border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#15102A]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#171B2E] dark:text-white font-bold">
                      Support Knowledge Workflow Engine
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
                    Live Resolution
                  </span>
                </div>

                {/* Scenario Switcher Tabs */}
                <div className="grid grid-cols-3 gap-1.5">
                  {supportResolutionScenarios.map((item) => {
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

              {/* Three-Stage Workflow Content */}
              <div className="p-5 space-y-3.5 text-xs">
                
                {/* 1. Customer Question Intake */}
                <div className="p-3.5 rounded-xl bg-[#F5F6FA] dark:bg-[#16122C] border border-[#E5E7F0] dark:border-white/[0.06] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] font-semibold flex items-center gap-1.5">
                      <User className="w-3 h-3 text-[#3984FF]" />
                      Customer Question Intake: {activeScenario.customerName}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
                      {activeScenario.inquiryCategory}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#171B2E] dark:text-white italic leading-relaxed">
                    &ldquo;{activeScenario.customerQuestion}&rdquo;
                  </p>
                </div>

                {/* Arrow connector */}
                <div className="flex justify-center -my-1 text-[#635BFF] dark:text-[#A5A0FF]">
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </div>

                {/* 2. Semantic Knowledge Retrieval Bridge */}
                <div className="p-3 rounded-xl bg-[#20C5D8]/8 dark:bg-[#20C5D8]/10 border border-[#20C5D8]/25 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0E7A8A] dark:text-[#20C5D8] font-semibold flex items-center gap-1.5">
                      <Search className="w-3 h-3" />
                      Relevant Knowledge Retrieved
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                      99.8% Grounded
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#171B2E] dark:text-[#E2E0F4] truncate">
                    <FileText className="w-3.5 h-3.5 text-[#20C5D8] flex-shrink-0" />
                    <span className="truncate">{activeScenario.sourceDoc}</span>
                    <span className="text-gray-400 dark:text-gray-600 text-[10px]">({activeScenario.sourceSection})</span>
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="flex justify-center -my-1 text-[#20C5D8]">
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </div>

                {/* 3. Helpful Grounded Answer Output */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#635BFF]/10 via-[#3984FF]/10 to-[#20C5D8]/10 border border-[#635BFF]/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#635BFF] dark:text-[#A5A0FF] font-semibold flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5" />
                      Contextual Resolution Ready to Send
                    </span>
                    <span className="text-[10px] font-mono text-[#10B981] font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  <p className="text-xs text-[#171B2E] dark:text-[#F8F7FF] leading-relaxed">
                    {activeScenario.supportAnswer}
                  </p>

                  <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#62677D] dark:text-[#A5A1BF]">
                    <span>Citation: {activeScenario.sourceSection}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      Consistent Standard
                    </span>
                  </div>
                </div>

              </div>

              {/* Bottom Reassurance Footer */}
              <div className="px-5 py-2.5 border-t border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#130E26] flex items-center justify-between text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  Support teams get instant answers without digging through multiple files
                </span>
                <span className="font-mono text-[10px] text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
                  Zero Inconsistency
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportManagementHero;

