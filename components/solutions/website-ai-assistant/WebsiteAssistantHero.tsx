"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  CheckCircle2,
  Sparkles,
  Lock,
  RotateCw,
  Search,
  Bot,
  ExternalLink,
  MessageSquare,
  Compass,
} from "lucide-react";
import { websiteAiAssistantData } from "@/data/websiteAiAssistant";

export const WebsiteAssistantHero: React.FC = () => {
  const { hero } = websiteAiAssistantData;
  const demo = hero.browserDemo;

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#20C5D8]/30 dark:border-[#20C5D8]/50 bg-[#E6FAFC] dark:bg-[#122A2F] text-[#0E7A8A] dark:text-[#20C5D8] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Globe className="w-3.5 h-3.5 text-[#20C5D8] flex-shrink-0" />
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

          {/* Right Column: Website Browser Preview With Interactive Assistant Widget */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#121426] border border-[#E2E6EF] dark:border-[#272B43] shadow-2xl overflow-hidden">
              
              {/* Browser Chrome Header */}
              <div className="px-4 py-3 bg-[#F0F2F9] dark:bg-[#181B34] border-b border-[#E2E6EF] dark:border-[#252844] flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>

                {/* URL Bar */}
                <div className="flex-1 flex items-center gap-2 px-3 py-1 rounded-lg bg-white dark:bg-[#121424] border border-[#E2E6EF] dark:border-[#272B43] text-xs font-mono text-[#62677D] dark:text-[#A6ACCD]">
                  <Lock className="w-3 h-3 text-[#10B981] flex-shrink-0" />
                  <span className="truncate">{demo.url}</span>
                  <RotateCw className="w-2.5 h-2.5 ml-auto text-[#8F94A8] cursor-pointer" />
                </div>
              </div>

              {/* Webpage Content Simulation */}
              <div className="p-5 space-y-4 relative min-h-[300px] bg-gradient-to-b from-[#FAFAFE] to-white dark:from-[#131528] dark:to-[#101222]">
                {/* Mockup Page Content */}
                <div className="space-y-2 pb-2">
                  <span className="text-[10px] uppercase font-bold text-[#635BFF] dark:text-[#A5A0FF] tracking-wider">
                    Official Corporate Webpage
                  </span>
                  <h3 className="text-base font-bold text-[#171B2E] dark:text-white">
                    {demo.pageTitle}
                  </h3>
                  <div className="flex gap-2">
                    <div className="h-1.5 w-16 bg-[#E2E6EF] dark:bg-[#252A47] rounded-full" />
                    <div className="h-1.5 w-24 bg-[#E2E6EF] dark:bg-[#252A47] rounded-full" />
                    <div className="h-1.5 w-10 bg-[#E2E6EF] dark:bg-[#252A47] rounded-full" />
                  </div>
                </div>

                {/* Floating Interactive Assistant Widget */}
                <div className="rounded-2xl p-4 bg-white dark:bg-[#1A1D38] border border-[#635BFF]/30 dark:border-[#635BFF]/40 shadow-xl space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#EEF1F7] dark:border-[#252A47]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#635BFF] to-[#20C5D8] text-white flex items-center justify-center">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-[#171B2E] dark:text-white">
                        Pingo Website Assistant
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#059669] dark:text-[#34D399] font-medium">
                      On-Page
                    </span>
                  </div>

                  {/* Visitor Query Bubble */}
                  <div className="p-2.5 rounded-xl bg-[#F0F2F9] dark:bg-[#121426] text-xs text-[#464B63] dark:text-[#CBD1E8]">
                    <p className="italic font-medium">
                      "{demo.visitorQuery}"
                    </p>
                  </div>

                  {/* Assistant Contextual Answer */}
                  <div className="text-xs text-[#171B2E] dark:text-[#E2E6EF] leading-relaxed">
                    <p>{demo.assistantAnswer}</p>
                  </div>

                  {/* Deep-Link Suggestion Pill */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#635BFF]/10 to-[#3984FF]/10 border border-[#635BFF]/30 text-xs font-semibold text-[#635BFF] dark:text-[#A5A0FF] hover:bg-[#635BFF]/15 transition-colors cursor-pointer">
                      <span>{demo.suggestedPill}</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#8F94A8] pt-1">
                  <span>Assisted Navigation Active</span>
                  <span className="text-[#20C5D8] font-semibold">Zero Visitor Friction</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebsiteAssistantHero;
