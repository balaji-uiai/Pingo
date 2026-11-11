"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Activity,
  CheckCircle2,
  Calendar,
  Sparkles,
  Clock,
  Smile,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { analyticsIntelligenceData } from "@/data/analyticsIntelligence";

export const AnalyticsHero: React.FC = () => {
  const { hero } = analyticsIntelligenceData;

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#635BFF]/10 dark:bg-[#635BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#3984FF]/10 dark:bg-[#3984FF]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Small Label Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
              <BarChart3 className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.12]">
              {hero.headingPart1}{" "}
              <span className="bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
                {hero.headingPart2}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#62677D] dark:text-[#B5BAD0] max-w-xl font-normal leading-relaxed">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Link
                href={hero.primaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2B75E6] shadow-[0_0_25px_rgba(99,91,255,0.4)] hover:shadow-[0_0_35px_rgba(99,91,255,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{hero.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={hero.secondaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-[#171B2E] dark:text-[#FFFFFF] bg-white/80 dark:bg-[#1E2238]/80 hover:bg-[#F3F4F8] dark:hover:bg-[#252A47] border border-[#E2E6EF] dark:border-[#2D3356] transition-all duration-300 cursor-pointer shadow-xs"
              >
                <span>{hero.secondaryCta.text}</span>
              </Link>
            </div>

            {/* Supporting Micro Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#62677D] dark:text-[#B5BAD0]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#20C5D8] flex-shrink-0" />
                Customer Activity Tracking
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#635BFF] flex-shrink-0" />
                Conversation Performance
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3984FF] flex-shrink-0" />
                Team & Sentiment Analytics
              </span>
            </div>
          </div>

          {/* Right Column: Polished Hero Preview Dashboard Widget */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#635BFF]/15 via-[#3984FF]/15 to-[#20C5D8]/15 rounded-3xl blur-2xl opacity-60 dark:opacity-80 -z-10" />

            <div className="rounded-3xl border border-[#E2E6EF] dark:border-[#272B43] bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FE] dark:from-[#15182C] dark:to-[#0F1122] shadow-2xl p-5 sm:p-6 lg:p-7 relative overflow-hidden space-y-5">
              {/* Top Navigation & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8ECF4] dark:border-[#242842]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#635BFF] to-[#3984FF] flex items-center justify-center text-white shadow-xs">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-none">
                      Live Conversation Pulse
                    </h3>
                    <p className="text-[11px] text-[#8F94A8] dark:text-[#6A708A] mt-1">
                      Real-time customer metrics • Updated 3s ago
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 text-[#059669] dark:text-[#34D399] text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    Live Streaming
                  </span>
                </div>
              </div>

              {/* 4 Quick Stat Hero Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F8FAFD] dark:bg-[#1A1D36] border border-[#E8ECF4] dark:border-[#242948]">
                  <span className="text-[11px] text-[#62677D] dark:text-[#A6ACCD]">Visitors Today</span>
                  <div className="text-xl font-extrabold text-[#171B2E] dark:text-white mt-1">
                    2,480
                  </div>
                  <span className="text-[10px] text-[#10B981] font-semibold">↑ +12.4%</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFD] dark:bg-[#1A1D36] border border-[#E8ECF4] dark:border-[#242948]">
                  <span className="text-[11px] text-[#62677D] dark:text-[#A6ACCD]">Resolution Rate</span>
                  <div className="text-xl font-extrabold text-[#635BFF] dark:text-[#A5A0FF] mt-1">
                    94.2%
                  </div>
                  <span className="text-[10px] text-[#10B981] font-semibold">↑ +3.1%</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFD] dark:bg-[#1A1D36] border border-[#E8ECF4] dark:border-[#242948]">
                  <span className="text-[11px] text-[#62677D] dark:text-[#A6ACCD]">First Response</span>
                  <div className="text-xl font-extrabold text-[#3984FF] dark:text-[#7EB3FF] mt-1">
                    4.2s
                  </div>
                  <span className="text-[10px] text-[#10B981] font-semibold">↓ -38.0%</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFD] dark:bg-[#1A1D36] border border-[#E8ECF4] dark:border-[#242948]">
                  <span className="text-[11px] text-[#62677D] dark:text-[#A6ACCD]">CSAT Score</span>
                  <div className="text-xl font-extrabold text-[#20C5D8] dark:text-[#4FE3F4] mt-1">
                    4.94<span className="text-xs text-[#8F94A8] font-normal">/5</span>
                  </div>
                  <span className="text-[10px] text-[#10B981] font-semibold">98% Satisfied</span>
                </div>
              </div>

              {/* Graphic Preview: Weekly Activity Curve & Sentiment Mini-Preview */}
              <div className="p-4 rounded-2xl bg-[#F9FAFD] dark:bg-[#14172B] border border-[#E5E9F2] dark:border-[#262B4A] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#171B2E] dark:text-white flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#635BFF]" />
                    Weekly Interaction Distribution
                  </span>
                  <span className="text-[11px] text-[#8F94A8] dark:text-[#7A809C]">14,280 interactions</span>
                </div>

                {/* Mini SVG Line & Bar chart */}
                <div className="h-20 w-full flex items-end gap-2 pt-2 px-1">
                  {[
                    { day: "M", val: 55, res: 46 },
                    { day: "T", val: 72, res: 62 },
                    { day: "W", val: 92, res: 80 },
                    { day: "T", val: 86, res: 74 },
                    { day: "F", val: 68, res: 58 },
                    { day: "S", val: 42, res: 37 },
                    { day: "S", val: 38, res: 33 },
                  ].map((col, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-full max-w-[28px] rounded-t-md bg-gradient-to-t from-[#635BFF]/30 to-[#3984FF] relative overflow-hidden group transition-all" style={{ height: `${col.val}%` }}>
                        <div className="absolute inset-0 bg-[#20C5D8]/40" style={{ height: `${(col.res / col.val) * 100}%` }} />
                      </div>
                      <span className="text-[10px] font-mono text-[#8F94A8]">{col.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sentiment mini-bar */}
              <div className="flex items-center justify-between pt-2 text-xs text-[#62677D] dark:text-[#B5BAD0]">
                <div className="flex items-center gap-2">
                  <Smile className="w-4 h-4 text-[#10B981]" />
                  <span className="font-medium text-[#171B2E] dark:text-white">Sentiment:</span>
                  <span className="text-[#10B981] font-bold">81% Positive</span>
                  <span className="text-[#8F94A8]">• 13% Neutral</span>
                  <span className="text-[#EF4444]">• 6% Negative</span>
                </div>
                <span className="text-[11px] italic text-[#8F94A8] hidden sm:inline">
                  {hero.illustrativeDisclaimer}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsHero;
