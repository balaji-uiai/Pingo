"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Sparkles,
  CheckCircle2,
  Box,
  Briefcase,
  FileText,
  Search,
  ExternalLink,
  ShieldCheck,
  Check,
  Cpu,
} from "lucide-react";
import { productServiceData } from "@/data/productServiceGuidance";

interface SpecExplorerItem {
  id: string;
  badge: string;
  category: "Product Specification" | "Service Inclusions" | "Plan Comparison";
  title: string;
  inquiry: string;
  specDetails: { label: string; value: string }[];
  aiGuidance: string;
  sourceDoc: string;
}

const specExplorerItems: SpecExplorerItem[] = [
  {
    id: "specs-platform",
    badge: "Product Details",
    category: "Product Specification",
    title: "Pingo Core Knowledge Engine",
    inquiry: "What file formats can we connect, and is there a document size limit?",
    specDetails: [
      { label: "Supported Formats", value: "PDF, DOCX, Markdown, CSV, TXT" },
      { label: "Max File Size", value: "100 MB per source document" },
      { label: "Indexing Latency", value: "Real-time (< 3.5s per 100 pages)" },
      { label: "Security Encryption", value: "AES-256 at rest, TLS 1.3 in transit" },
    ],
    aiGuidance:
      "Pingo accepts all major business formats up to 100MB per file. Documents are indexed into vector embeddings in under four seconds, ready for instant customer query retrieval.",
    sourceDoc: "Product Architecture & File Ingestion Specs v2.4",
  },
  {
    id: "service-onboarding",
    badge: "Service Scope",
    category: "Service Inclusions",
    title: "Guided Implementation Service",
    inquiry: "What is covered in the 30-day guided onboarding package?",
    specDetails: [
      { label: "Knowledge Migration", value: "Up to 50 corporate knowledge docs" },
      { label: "Workflow Config", value: "Custom escalation & channel routing" },
      { label: "Live Training", value: "2 dedicated sessions for admin teams" },
      { label: "Dedicated Lead", value: "Direct Slack channel communication" },
    ],
    aiGuidance:
      "Our Guided Implementation service handles end-to-end knowledge ingestion, custom workflow configuration, and staff training with a dedicated solutions engineer.",
    sourceDoc: "Services Directory / Professional Onboarding Scope",
  },
  {
    id: "compare-tiers",
    badge: "Option Compare",
    category: "Plan Comparison",
    title: "Team vs. Enterprise Tier Breakdown",
    inquiry: "What are the main differences between Team and Enterprise plans?",
    specDetails: [
      { label: "Connected Sources", value: "Team: 25 docs | Enterprise: Unlimited" },
      { label: "Agent Seats", value: "Team: 10 seats | Enterprise: Unlimited" },
      { label: "Analytics & Logs", value: "Team: 30-day | Enterprise: 1-year history" },
      { label: "Custom Domain", value: "Team: Optional | Enterprise: Included" },
    ],
    aiGuidance:
      "The Team tier fits growing teams managing up to 25 documents with 10 seats. The Enterprise tier provides unlimited sources, custom branding, and custom security SLAs.",
    sourceDoc: "Commercial Plan Matrix & License Terms 2026",
  },
];

export const ProductServiceHero: React.FC = () => {
  const { hero } = productServiceData;
  const [activeItem, setActiveItem] = useState<SpecExplorerItem>(
    specExplorerItems[0]
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3984FF]/30 dark:border-[#3984FF]/50 bg-[#EEF4FF] dark:bg-[#152238] text-[#3984FF] dark:text-[#7EB5FF] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#3984FF] dark:text-[#7EB5FF] flex-shrink-0" />
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

          {/* Right Column: Interactive Product & Service Specification Explorer */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            {/* Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3984FF]/15 via-[#635BFF]/20 to-[#20C5D8]/15 rounded-3xl filter blur-3xl transform scale-90 pointer-events-none" />

            {/* Main Spec & Guidance Visual Card */}
            <div className="relative w-full max-w-lg rounded-2xl bg-white/95 dark:bg-[#100D1E]/95 border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden transition-all duration-300">
              
              {/* Top Navigation Tabs */}
              <div className="px-5 pt-3 pb-2 border-b border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#15102A]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] font-semibold">
                    Product & Service Knowledge Explorer
                  </span>
                  <span className="text-[10px] font-mono text-[#3984FF] dark:text-[#7EB5FF]">
                    Select Topic
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {specExplorerItems.map((item) => {
                    const isSelected = activeItem.id === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveItem(item)}
                        className={`px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200 text-center truncate cursor-pointer ${
                          isSelected
                            ? "bg-[#3984FF] text-white shadow-sm"
                            : "bg-white dark:bg-[#1A1435] text-[#171B2E] dark:text-[#A5A1BF] border border-[#E5E7F0] dark:border-[#28223D] hover:border-[#3984FF]/40"
                        }`}
                      >
                        {item.badge}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Specification Sheet Content */}
              <div className="p-5 space-y-4 text-xs sm:text-sm">
                
                {/* Offering Title & Category */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7F0] dark:border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB5FF] flex items-center justify-center font-bold">
                      <Box className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#171B2E] dark:text-white leading-tight">
                        {activeItem.title}
                      </h4>
                      <span className="text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                        Category: {activeItem.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981]/10 text-[#10B981] font-semibold border border-[#10B981]/20">
                    Connected
                  </span>
                </div>

                {/* Structured Specification Matrix */}
                <div className="grid grid-cols-2 gap-2 bg-[#F7F8FD] dark:bg-[#16122C] p-3 rounded-xl border border-[#E5E7F0] dark:border-white/[0.06]">
                  {activeItem.specDetails.map((spec) => (
                    <div key={spec.label} className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase text-[#62677D] dark:text-[#A5A1BF] block">
                        {spec.label}
                      </span>
                      <span className="text-xs font-semibold text-[#171B2E] dark:text-white truncate block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Customer Question */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] block font-semibold">
                    Customer Question in Natural Phrasing:
                  </span>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-[#1B1638] border border-[#E5E7F0] dark:border-white/[0.08] text-xs text-[#171B2E] dark:text-[#E2E0F4] italic">
                    &ldquo;{activeItem.inquiry}&rdquo;
                  </div>
                </div>

                {/* AI Assistant Grounded Answer */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#635BFF]/10 via-[#3984FF]/10 to-[#20C5D8]/10 border border-[#3984FF]/30 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1 font-bold text-[#3984FF] dark:text-[#7EB5FF]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Clear Guidance Response:
                    </span>
                    <span className="text-[#10B981] flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-[#171B2E] dark:text-[#F8F7FF] leading-relaxed">
                    {activeItem.aiGuidance}
                  </p>
                  <div className="text-[10px] font-mono text-[#62677D] dark:text-[#A5A1BF] pt-1 border-t border-black/[0.06] dark:border-white/[0.06]">
                    Source: {activeItem.sourceDoc}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductServiceHero;

