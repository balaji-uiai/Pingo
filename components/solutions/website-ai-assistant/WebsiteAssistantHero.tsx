"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Sparkles,
  CheckCircle2,
  Lock,
  Search,
  Bot,
  User,
  ShieldCheck,
  FileText,
  MessageCircle,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { websiteAiAssistantData } from "@/data/websiteAiAssistant";

interface BrowserScenario {
  id: string;
  label: string;
  urlPath: string;
  visitorQuery: string;
  assistantAnswer: string;
  citationDoc: string;
  quickAction: string;
}

const browserScenarios: BrowserScenario[] = [
  {
    id: "sla-guarantee",
    label: "Service SLA",
    urlPath: "/services/cloud-infrastructure",
    visitorQuery: "What uptime SLA guarantee comes with the Enterprise Cloud tier?",
    assistantAnswer:
      "The Enterprise Cloud tier includes a 99.95% uptime SLA guarantee, backed by 24/7 continuous monitoring and a 1-hour priority escalation response.",
    citationDoc: "Service Level Agreement v3.2 / Section 4",
    quickAction: "View Full SLA Terms",
  },
  {
    id: "data-migration",
    label: "Data Migration",
    urlPath: "/onboarding/migration-process",
    visitorQuery: "Can we migrate our existing documentation without downtime?",
    assistantAnswer:
      "Yes. Ingestion runs asynchronously in parallel with your live site. All existing links and documents remain accessible throughout the indexing process.",
    citationDoc: "Migration Guide / Zero-Downtime Pipeline",
    quickAction: "Read Migration Specs",
  },
  {
    id: "pricing-seats",
    label: "Team Seats",
    urlPath: "/pricing/enterprise-plans",
    visitorQuery: "How do additional agent seats work if our support team grows?",
    assistantAnswer:
      "You can add or reassign agent seats anytime from your workspace admin portal with automated prorated billing applied to your existing cycle.",
    citationDoc: "Commercial Terms / Seat Administration",
    quickAction: "Explore Pricing Tiers",
  },
];

export const WebsiteAssistantHero: React.FC = () => {
  const { hero } = websiteAiAssistantData;
  const [activeScenario, setActiveScenario] = useState<BrowserScenario>(
    browserScenarios[0]
  );

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting in Pingo brand colors */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#20C5D8]/10 dark:bg-[#20C5D8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#635BFF]/10 dark:bg-[#635BFF]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#20C5D8]/30 dark:border-[#20C5D8]/50 bg-[#E6FAFC] dark:bg-[#122A2F] text-[#0E7A8A] dark:text-[#20C5D8] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Globe className="w-3.5 h-3.5 text-[#0E7A8A] dark:text-[#20C5D8] flex-shrink-0" />
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

          {/* Right Column: Browser Window Mockup with Embedded Pingo Assistant */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            {/* Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#20C5D8]/15 via-[#635BFF]/20 to-[#3984FF]/15 rounded-3xl filter blur-3xl transform scale-90 pointer-events-none" />

            {/* Main Browser Window Mockup Container */}
            <div className="relative w-full max-w-lg rounded-2xl bg-white/95 dark:bg-[#100D1E]/95 border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden transition-all duration-300">
              
              {/* Browser Chrome Header (Address Bar & Controls) */}
              <div className="px-4 py-3 border-b border-[#E5E7F0] dark:border-white/[0.08] bg-[#F5F6FA] dark:bg-[#15102A] flex items-center gap-3">
                {/* Traffic light dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>

                {/* Simulated URL bar */}
                <div className="flex-1 flex items-center gap-2 px-3 py-1 rounded-lg bg-white dark:bg-[#1B1536] border border-[#E5E7F0] dark:border-white/[0.06] text-[11px] font-mono text-[#62677D] dark:text-[#A5A1BF] truncate">
                  <Lock className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                  <span className="text-[#171B2E] dark:text-white font-medium">yourcompany.com</span>
                  <span className="text-gray-400 dark:text-gray-600 truncate">{activeScenario.urlPath}</span>
                </div>
              </div>

              {/* Inside Browser: Interactive Assistant Overlay */}
              <div className="p-5 space-y-4 text-xs sm:text-sm">
                
                {/* Embedded Widget Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7F0] dark:border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#635BFF] via-[#3984FF] to-[#20C5D8] flex items-center justify-center text-white shadow-sm">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#171B2E] dark:text-white leading-tight">
                          Website AI Assistant
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                      </div>
                      <span className="text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                        Active on yourcompany.com
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#20C5D8]/10 text-[#0E7A8A] dark:text-[#20C5D8] font-semibold border border-[#20C5D8]/20">
                    Live Widget
                  </span>
                </div>

                {/* Visitor Bubble */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="max-w-[85%] bg-gradient-to-r from-[#635BFF] to-[#3984FF] text-white p-3.5 rounded-2xl rounded-tr-xs shadow-md">
                    <p className="leading-relaxed font-normal">
                      {activeScenario.visitorQuery}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#EAEBF0] dark:bg-[#1F1C36] flex items-center justify-center text-[#62677D] dark:text-[#A5A1BF] flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* Grounded AI Guidance Bubble */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#20C5D8]/15 text-[#0E7A8A] dark:text-[#20C5D8] flex items-center justify-center flex-shrink-0 mt-1 border border-[#20C5D8]/25">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="max-w-[88%] bg-[#F5F6FA] dark:bg-[#16122C] border border-[#E5E7F0] dark:border-[#28223D] text-[#171B2E] dark:text-[#F8F7FF] p-3.5 rounded-2xl rounded-tl-xs space-y-2.5 shadow-sm">
                    <p className="leading-relaxed font-normal">
                      {activeScenario.assistantAnswer}
                    </p>

                    {/* Source citation & Quick Action Button */}
                    <div className="pt-2 border-t border-[#E5E7F0] dark:border-white/[0.08] flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1 font-mono text-[#62677D] dark:text-[#A5A1BF] truncate max-w-[200px]">
                        <FileText className="w-3 h-3 text-[#20C5D8]" />
                        {activeScenario.citationDoc}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#3984FF] dark:text-[#7EB5FF] font-semibold cursor-pointer hover:underline">
                        {activeScenario.quickAction} <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Grounding Reassurance Chip */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Answers retrieved directly from connected business sources
                  </span>
                  <span className="font-mono text-[#635BFF] dark:text-[#A5A0FF]">
                    24/7 Available
                  </span>
                </div>
              </div>

              {/* Scenario Switcher Footer */}
              <div className="px-5 py-3 border-t border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#130E26]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] font-semibold">
                    Simulate Visitor Inquiries:
                  </span>
                  <span className="text-[10px] font-mono text-[#20C5D8]">
                    Click to test
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {browserScenarios.map((item) => {
                    const isSelected = activeScenario.id === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveScenario(item)}
                        className={`px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200 text-center truncate cursor-pointer ${
                          isSelected
                            ? "bg-[#20C5D8] text-white shadow-sm font-semibold"
                            : "bg-white dark:bg-[#1A1435] text-[#171B2E] dark:text-[#A5A1BF] border border-[#E5E7F0] dark:border-[#28223D] hover:border-[#20C5D8]/40"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
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

