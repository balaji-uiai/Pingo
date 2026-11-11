"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  CheckCircle2,
  Scale,
  Sparkles,
  SlidersHorizontal,
  Check,
  X,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import { productServiceData } from "@/data/productServiceGuidance";

export const ProductServiceHero: React.FC = () => {
  const { hero } = productServiceData;
  const demo = hero.comparisonDemo;
  const [selectedPlan, setSelectedPlan] = useState<"A" | "B">("B");

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

          {/* Right Column: Product Exploration & Comparison Visual Direction */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#121426] border border-[#E2E6EF] dark:border-[#272B43] shadow-2xl p-5 sm:p-6 space-y-4">
              
              {/* Header: Inquiry Bar */}
              <div className="p-3.5 rounded-2xl bg-[#F8FAFD] dark:bg-[#1A1D36] border border-[#E5E9F2] dark:border-[#282D4F]">
                <div className="flex items-center gap-2 text-xs text-[#635BFF] dark:text-[#A5A0FF] font-semibold mb-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Customer Exploring Options</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#171B2E] dark:text-white leading-snug">
                  "{demo.userQuestion}"
                </p>
              </div>

              {/* Side-by-Side Product Comparison Matrix */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {/* Product A Card */}
                <div
                  onClick={() => setSelectedPlan("A")}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    selectedPlan === "A"
                      ? "bg-[#635BFF]/5 dark:bg-[#635BFF]/10 border-[#635BFF]"
                      : "bg-[#FAFBFE] dark:bg-[#16182C] border-[#E5E9F2] dark:border-[#252844]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#171B2E] dark:text-white">
                      {demo.productA.name}
                    </span>
                    <span className="text-[10px] text-[#8F94A8]">Entry Tier</span>
                  </div>
                  <p className="text-[11px] text-[#62677D] dark:text-[#A6ACCD] mb-3">
                    {demo.productA.targetTeam}
                  </p>
                  <div className="space-y-1.5 text-[11px]">
                    {demo.productA.features.map((f) => (
                      <div key={f.label} className="flex items-center justify-between">
                        <span className="text-[#8F94A8]">{f.label}:</span>
                        <span className="font-semibold text-[#171B2E] dark:text-white truncate max-w-[90px]">
                          {f.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product B Card (Featured) */}
                <div
                  onClick={() => setSelectedPlan("B")}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative ${
                    selectedPlan === "B"
                      ? "bg-gradient-to-b from-[#3984FF]/10 to-[#20C5D8]/10 dark:from-[#3984FF]/20 dark:to-[#20C5D8]/20 border-[#3984FF]"
                      : "bg-[#FAFBFE] dark:bg-[#16182C] border-[#E5E9F2] dark:border-[#252844]"
                  }`}
                >
                  <span className="absolute -top-2 right-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#3984FF] text-white">
                    Recommended
                  </span>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#171B2E] dark:text-white">
                      {demo.productB.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#62677D] dark:text-[#A6ACCD] mb-3">
                    {demo.productB.targetTeam}
                  </p>
                  <div className="space-y-1.5 text-[11px]">
                    {demo.productB.features.map((f) => (
                      <div key={f.label} className="flex items-center justify-between">
                        <span className="text-[#8F94A8]">{f.label}:</span>
                        <span className="font-semibold text-[#3984FF] dark:text-[#7EB5FF] truncate max-w-[90px]">
                          {f.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pingo AI Guidance Callout */}
              <div className="p-3.5 rounded-2xl bg-[#F0FDF4] dark:bg-[#122A22] border border-[#BBF7D0] dark:border-[#1E4D3E] text-xs">
                <div className="flex items-center gap-1.5 font-bold text-[#059669] dark:text-[#34D399] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Pingo Recommendation</span>
                </div>
                <p className="text-[#171B2E] dark:text-[#E2E6EF] leading-relaxed">
                  {demo.guidanceSummary}
                </p>
              </div>

              {/* Footer reassurance */}
              <div className="pt-2 border-t border-[#EEF1F7] dark:border-[#22263E] flex items-center justify-between text-[11px] text-[#8F94A8]">
                <span>Grounded in verified product specs</span>
                <span className="text-[#3984FF] font-semibold">Zero Guesswork</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductServiceHero;
