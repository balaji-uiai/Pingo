"use client";

import React from "react";
import {
  Layers,
  Users,
  MessageSquare,
  HelpCircle,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { analyticsIntelligenceData } from "@/data/analyticsIntelligence";

export const AnalyticsOverview: React.FC = () => {
  const { metricGlossary } = analyticsIntelligenceData;
  const { funnelComparison, definitions } = metricGlossary;

  return (
    <section
      id="metric-glossary"
      aria-label="Metric Explanation and Funnel Distinction"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FAFBFE] dark:bg-[#0E1022] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#20C5D8]/6 dark:bg-[#20C5D8]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#20C5D8]" />
            <span>{metricGlossary.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {metricGlossary.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {metricGlossary.subheading}
          </p>
        </div>

        {/* =========================================================================
            HIGHLIGHT SECTION: THE THREE ENGAGEMENT STAGES (VISITORS vs CHAT VISITORS vs CONVERSATIONS)
        ========================================================================= */}
        <div className="max-w-5xl mx-auto mb-16 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#15182C] border border-[#E2E6EF] dark:border-[#272B43] shadow-xl relative overflow-hidden">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Distinction</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#171B2E] dark:text-[#FFFFFF]">
              {funnelComparison.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] max-w-2xl mx-auto mt-2">
              {funnelComparison.description}
            </p>
          </div>

          {/* 3 Step Funnel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {funnelComparison.stages.map((stage, idx) => {
              const isViolet = stage.color === "violet";
              const isBlue = stage.color === "blue";
              const isCyan = stage.color === "cyan";

              return (
                <div
                  key={stage.number}
                  className="rounded-2xl p-6 bg-[#F8FAFD] dark:bg-[#191D34] border border-[#E5E9F2] dark:border-[#282E50] hover:border-[#635BFF]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white dark:bg-[#131526] text-[#635BFF] dark:text-[#A5A0FF] border border-[#E2E6EF] dark:border-[#2D3356]">
                        Stage {stage.number}
                      </span>
                      <span className="text-xs font-semibold text-[#10B981]">
                        {stage.volumeExample}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#171B2E] dark:text-white mb-2">
                      {stage.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {stage.definition}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E8ECF4] dark:border-[#252A47] text-[11px] font-medium text-[#635BFF] dark:text-[#A5A0FF]">
                    {stage.conversionNote}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            DETAILED METRIC DEFINITION GLOSSARY
        ========================================================================= */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#171B2E] dark:text-white">
              Full Metric Glossary & Operational Significance
            </h3>
            <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#A6ACCD] mt-1">
              Definitions, calculation methodologies, and why each metric matters to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {definitions.map((metric) => (
              <div
                key={metric.name}
                className="rounded-2xl p-5 bg-white dark:bg-[#14172B] border border-[#E2E6EF] dark:border-[#252945] hover:border-[#3984FF]/40 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF] dark:text-[#A5A0FF]">
                      {metric.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  </div>

                  <h4 className="text-base font-bold text-[#171B2E] dark:text-white mb-2">
                    {metric.name}
                  </h4>

                  <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-3">
                    {metric.definition}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EEF1F7] dark:border-[#232740]">
                  <p className="text-[11px] text-[#8F94A8] dark:text-[#8D93AF] leading-normal">
                    <span className="font-semibold text-[#464B63] dark:text-[#C5CAF0]">Why it matters: </span>
                    {metric.whyItMatters}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsOverview;
