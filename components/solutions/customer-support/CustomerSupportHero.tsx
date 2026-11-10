"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  Sparkles,
  CheckCircle2,
  Database,
  Search,
  ExternalLink,
  Bot,
  User,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { customerSupportData } from "@/data/customerSupport";

interface SampleInteraction {
  id: string;
  label: string;
  question: string;
  sourceDoc: string;
  sourceSection: string;
  answer: string;
  tag: string;
}

const sampleInteractions: SampleInteraction[] = [
  {
    id: "guest-access",
    label: "Client Permissions",
    question:
      "How do we invite external clients to view project milestones without giving admin access?",
    sourceDoc: "Workspace Roles & Permissions v2.4",
    sourceSection: "Section 3.2 — Guest Viewer Provisioning",
    answer:
      "You can invite external clients as 'Viewer Guests'. Guests have secure, read-only access to assigned milestones and shared reports without viewing internal team notes or billing settings.",
    tag: "Access Control",
  },
  {
    id: "billing-refund",
    label: "Refund Policy",
    question:
      "Can we request a refund if we downgrade from Team to Starter mid-cycle?",
    sourceDoc: "Subscription & Billing Terms 2026",
    sourceSection: "Section 5.1 — Mid-term Adjustments",
    answer:
      "Yes. Mid-cycle downgrades generate automatic prorated credits directly applied to your next billing statement. Full refunds are available within 14 days of initial plan activation.",
    tag: "Billing Terms",
  },
  {
    id: "knowledge-sync",
    label: "Knowledge Sync",
    question:
      "How often does the assistant refresh information when our team updates internal docs?",
    sourceDoc: "Data Synchronization Specs",
    sourceSection: "Real-time Webhook Ingestion",
    answer:
      "Connected knowledge sources sync automatically via real-time webhooks. Document edits or uploads are re-indexed and available for customer queries within seconds.",
    tag: "Live Ingestion",
  },
];

export const CustomerSupportHero: React.FC = () => {
  const { hero } = customerSupportData;
  const [activeSample, setActiveSample] = useState<SampleInteraction>(
    sampleInteractions[0]
  );

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting glows in Pingo brand colors */}
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

          {/* Right Column: Interactive Customer Support Assistant Preview */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            {/* Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/15 via-[#3984FF]/20 to-[#20C5D8]/15 rounded-3xl filter blur-3xl transform scale-90 pointer-events-none" />

            {/* Main Interactive Assistant Mockup Card */}
            <div className="relative w-full max-w-lg rounded-2xl bg-white/95 dark:bg-[#100D1E]/95 border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden transition-all duration-300">
              
              {/* Header Bar */}
              <div className="px-5 py-3.5 border-b border-[#E5E7F0] dark:border-white/[0.08] flex items-center justify-between bg-gradient-to-r from-[#F5F6FF] to-white dark:from-[#171127] dark:to-[#100D1E]">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#3984FF] flex items-center justify-center text-white shadow-sm">
                      <Bot className="w-5 h-5" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#10B981] border-2 border-white dark:border-[#100D1E] rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                        Pingo Support Assistant
                      </span>
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF]">
                        AI
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                      <Database className="w-3 h-3 text-[#20C5D8]" />
                      <span>Connected to 18 verified business docs</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                    Online
                  </span>
                </div>
              </div>

              {/* Chat Conversation Content */}
              <div className="p-5 space-y-4 text-xs sm:text-sm">
                
                {/* Customer Question Bubble */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="max-w-[85%] bg-gradient-to-r from-[#635BFF] to-[#3984FF] text-white p-3.5 rounded-2xl rounded-tr-xs shadow-md">
                    <p className="leading-relaxed font-normal">
                      {activeSample.question}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#EAEBF0] dark:bg-[#1F1C36] flex items-center justify-center text-[#62677D] dark:text-[#A5A1BF] flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* Grounded Retrieval Badge */}
                <div className="flex items-center gap-2 pl-9">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#20C5D8]/10 dark:bg-[#20C5D8]/15 border border-[#20C5D8]/30 text-[11px] text-[#0E7A8A] dark:text-[#20C5D8]">
                    <Search className="w-3 h-3 flex-shrink-0" />
                    <span className="font-mono font-medium truncate max-w-[260px]">
                      Retrieved from: {activeSample.sourceDoc}
                    </span>
                  </div>
                </div>

                {/* AI Assistant Answer Bubble */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#635BFF]/15 text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center flex-shrink-0 mt-1 border border-[#635BFF]/25">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="max-w-[88%] bg-[#F5F6FA] dark:bg-[#171329] border border-[#E5E7F0] dark:border-[#28223D] text-[#171B2E] dark:text-[#F8F7FF] p-3.5 rounded-2xl rounded-tl-xs space-y-2.5">
                    <p className="leading-relaxed font-normal">
                      {activeSample.answer}
                    </p>

                    {/* Source Citation Footer */}
                    <div className="pt-2 border-t border-[#E5E7F0] dark:border-white/[0.08] flex items-center justify-between text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                      <span className="flex items-center gap-1 font-mono">
                        <FileText className="w-3 h-3 text-[#635BFF]" />
                        {activeSample.sourceSection}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#10B981] font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Inquiries Switcher */}
              <div className="px-5 py-3 border-t border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#0D0A1A]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] font-semibold">
                    Test Live Inquiry Scenarios
                  </span>
                  <span className="text-[10px] font-mono text-[#635BFF] dark:text-[#A5A0FF]">
                    Click to switch:
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {sampleInteractions.map((item) => {
                    const isSelected = activeSample.id === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveSample(item)}
                        className={`px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200 text-center truncate cursor-pointer ${
                          isSelected
                            ? "bg-[#635BFF] text-white shadow-sm"
                            : "bg-white dark:bg-[#17122A] text-[#171B2E] dark:text-[#A5A1BF] border border-[#E5E7F0] dark:border-[#28223D] hover:border-[#635BFF]/40"
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

export default CustomerSupportHero;

