"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Sparkles,
  CheckCircle2,
  FileText,
  User,
  ExternalLink,
} from "lucide-react";
import { aiAutomationData } from "@/data/aiAutomation";

export const AiAutomationHero: React.FC = () => {
  const { hero } = aiAutomationData;

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Ambient background lighting glows in Pingo brand colors */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#635BFF]/10 dark:bg-[#635BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#3984FF]/10 dark:bg-[#3984FF]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Small Label Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Bot className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
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

            {/* CTA Buttons Row */}
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

            {/* Trust Note */}
            <div className="flex items-center gap-4 pt-2 text-xs text-[#62677D] dark:text-[#8E95AF]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Zero Hallucinations
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3984FF]" />
                Instant Retrieval
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#20C5D8]" />
                Human Handover
              </span>
            </div>
          </div>

          {/* Right Column: Premium AI Conversation Interface Preview */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center w-full">
            {/* Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/20 via-[#3984FF]/25 to-[#20C5D8]/20 rounded-full filter blur-3xl transform scale-90 pointer-events-none" />

            {/* Conversation Window Showcase */}
            <div className="relative w-full max-w-[520px] rounded-3xl bg-[#FFFFFF] dark:bg-[#14172B] border border-[#E5E7F0] dark:border-[#282C48] shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300">
              
              {/* Top Window Bar */}
              <div className="px-5 py-4 border-b border-[#F0F2F8] dark:border-[#232742] bg-[#F7F8FE]/80 dark:bg-[#111324] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Pingo brand avatar */}
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center font-extrabold text-base shadow-sm">
                    P
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                        Pingo AI Assistant
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        Online
                      </span>
                    </div>
                    <p className="text-[11px] text-[#62677D] dark:text-[#B5BAD0]">
                      Grounded in Acme Knowledge Center
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#1A1D36] border border-[#E5E7F0] dark:border-[#282C48] text-[11px] font-medium text-[#62677D] dark:text-[#B5BAD0]">
                  <Sparkles className="w-3 h-3 text-[#20C5D8]" />
                  <span>AI Grounded</span>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="p-5 sm:p-6 space-y-5">
                
                {/* 1. Customer Message */}
                <div className="flex items-start justify-end gap-2.5">
                  <div className="max-w-[85%] p-3.5 rounded-2xl rounded-tr-xs bg-[#635BFF] text-white text-xs sm:text-sm leading-relaxed shadow-sm">
                    How do I connect our custom API documentation into Pingo AI?
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#E5E7F0] dark:bg-[#242845] flex items-center justify-center flex-shrink-0 text-[#62677D] dark:text-[#B5BAD0] text-xs">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* 2. AI Response */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#3984FF] flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">
                    P
                  </div>
                  <div className="max-w-[88%] space-y-3">
                    <div className="p-4 rounded-2xl rounded-tl-xs bg-[#F5F6FA] dark:bg-[#1A1E36] border border-[#E5E7F0] dark:border-[#282C48] text-[#171B2E] dark:text-[#FFFFFF] text-xs sm:text-sm leading-relaxed">
                      You can connect your documentation in two clicks! Either upload your OpenAPI schema / markdown files or link your live documentation URL. Pingo automatically vectors and isolates it inside your dedicated product Knowledge Base.
                    </div>

                    {/* Source citation pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#121428] border border-[#635BFF]/30 dark:border-[#635BFF]/40 text-[11px] text-[#635BFF] dark:text-[#A5A0FF] font-medium shadow-2xs">
                      <FileText className="w-3 h-3 text-[#20C5D8]" />
                      <span>Source: API Integrations &gt; Quickstart Guide</span>
                    </div>

                    {/* Action recommendations */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#FFFFFF] dark:bg-[#1A1E36] border border-[#E5E7F0] dark:border-[#282C48] text-xs font-semibold text-[#171B2E] dark:text-[#FFFFFF] hover:border-[#635BFF]/40 transition-colors"
                      >
                        <span>View Documentation</span>
                        <ExternalLink className="w-3 h-3 text-[#62677D]" />
                      </button>
                      <button
                        type="button"
                        className="px-3 py-1.5 rounded-xl bg-[#FFFFFF] dark:bg-[#1A1E36] border border-[#E5E7F0] dark:border-[#282C48] text-xs font-semibold text-[#635BFF] dark:text-[#A5A0FF] hover:border-[#635BFF]/40 transition-colors"
                      >
                        Connect via Webhook
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Chat Input Bar Preview */}
              <div className="px-5 py-3.5 border-t border-[#F0F2F8] dark:border-[#232742] bg-[#F7F8FE]/60 dark:bg-[#111324] flex items-center justify-between text-xs text-[#62677D] dark:text-[#8E95AF]">
                <span>Ask anything about your business knowledge...</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#635BFF] text-white font-semibold text-[11px]">
                  Send
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiAutomationHero;

