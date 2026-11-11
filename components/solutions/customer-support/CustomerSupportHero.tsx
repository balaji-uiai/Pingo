"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  CheckCircle2,
  Bot,
  User,
  ShieldCheck,
  Sparkles,
  ArrowDownRight,
  UserCheck,
  MessageSquare,
  Clock,
  Database,
  ArrowRightLeft,
} from "lucide-react";
import { customerSupportData } from "@/data/customerSupport";

export const CustomerSupportHero: React.FC = () => {
  const { hero } = customerSupportData;
  const demo = hero.handoverDemo;

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
              <Headphones className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
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

          {/* Right Column: AI Assistant + Human Agent Handover Visual Direction */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#121426] border border-[#E2E6EF] dark:border-[#272B43] shadow-2xl p-5 sm:p-6 space-y-4">
              
              {/* Header Bar: Status */}
              <div className="flex items-center justify-between pb-3 border-b border-[#EEF1F7] dark:border-[#22263E]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#171B2E] dark:text-white">
                      Support Session • {demo.customerCompany}
                    </h3>
                    <p className="text-[11px] text-[#8F94A8]">
                      Tier-1 AI triage → Human Specialist Handover
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 text-[#059669] dark:text-[#34D399] text-[11px] font-semibold border border-[#10B981]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Active Handover
                </span>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 text-xs">
                {/* 1. Customer Initial Message */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-xs bg-[#635BFF] text-white p-3 shadow-xs">
                    <p className="leading-relaxed font-normal">
                      "{demo.initialQuery}"
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#E5E9F2] dark:bg-[#252945] flex items-center justify-center text-[10px] font-bold text-[#464B63] dark:text-white flex-shrink-0 mt-1">
                    DM
                  </div>
                </div>

                {/* 2. AI Assistant Response */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-1 shadow-xs">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-xs bg-[#F4F6FB] dark:bg-[#1A1D36] border border-[#E5E9F2] dark:border-[#272C4C] p-3 text-[#171B2E] dark:text-[#E2E6EF]">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#635BFF] dark:text-[#A5A0FF] mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Pingo AI Assistant</span>
                    </div>
                    <p className="leading-relaxed">
                      {demo.aiResponse}
                    </p>
                  </div>
                </div>

                {/* 3. Handover Notification Banner */}
                <div className="my-2 p-2.5 rounded-xl bg-gradient-to-r from-[#635BFF]/10 via-[#3984FF]/10 to-[#20C5D8]/10 border border-[#635BFF]/20 text-center flex items-center justify-center gap-2 text-[11px] font-medium text-[#635BFF] dark:text-[#A5A0FF]">
                  <ArrowRightLeft className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{demo.handoverNotice}</span>
                </div>

                {/* 4. Human Support Agent joins with context */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-1 shadow-xs">
                    SJ
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-xs bg-[#F0FDF4] dark:bg-[#132822] border border-[#BBF7D0] dark:border-[#1E4D3E] p-3 text-[#171B2E] dark:text-[#E2E6EF]">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#059669] dark:text-[#34D399] mb-1">
                      <UserCheck className="w-3 h-3" />
                      <span>{demo.agentName} • {demo.agentRole}</span>
                    </div>
                    <p className="leading-relaxed">
                      {demo.agentResponse}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer reassurance note */}
              <div className="pt-3 border-t border-[#EEF1F7] dark:border-[#22263E] flex items-center justify-between text-[11px] text-[#8F94A8]">
                <span>Customer never repeats their problem</span>
                <span className="text-[#10B981] font-semibold">100% Context Continuity</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomerSupportHero;
