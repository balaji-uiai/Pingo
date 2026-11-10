"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  SearchX,
  Clock,
  FolderGit2,
  FileWarning,
  CheckCircle2,
  XCircle,
  ArrowRight,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { customerSupportData, ChallengeItem } from "@/data/customerSupport";

const iconMap: Record<string, React.ElementType> = {
  SearchX,
  Clock,
  FolderGit2,
  FileWarning,
};

export const CustomerSupportChallenge: React.FC = () => {
  const { challenges } = customerSupportData;
  const [selectedChallenge, setSelectedChallenge] = useState<string>(
    challenges.items[0].id
  );

  return (
    <section
      id="challenges"
      aria-label="Customer Support Challenges"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FAFBFE] dark:bg-[#0A0815] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-28 w-[500px] h-[500px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[480px] h-[480px] bg-[#3984FF]/6 dark:bg-[#3984FF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 dark:border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold tracking-wider uppercase shadow-xs">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{challenges.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {challenges.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {challenges.subheading}
          </p>
        </div>

        {/* Distinct 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Visual Comparison Panel (Traditional Support vs Connected Approach) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-xl dark:shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
              <h3 className="text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-4 flex items-center justify-between">
                <span>The Support Dilemma</span>
                <span className="text-xs font-mono font-medium text-rose-500 px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">
                  Bottlenecks
                </span>
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 text-[#62677D] dark:text-[#B5BAD0]">
                  <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#171B2E] dark:text-white block">
                      Manual Repetitive Answers
                    </span>
                    Frontline teams manually type identical responses dozens of times each day.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 text-[#62677D] dark:text-[#B5BAD0]">
                  <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#171B2E] dark:text-white block">
                      Unindexed Information Silos
                    </span>
                    Important documentation is buried in inaccessible team folders and PDF attachments.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 text-[#62677D] dark:text-[#B5BAD0]">
                  <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#171B2E] dark:text-white block">
                      Inconsistent Guidance
                    </span>
                    Customers receive conflicting answers depending on who replies or what webpage they read.
                  </div>
                </div>
              </div>

              {/* The Pingo Solution Shift Indicator */}
              <div className="mt-6 pt-5 border-t border-[#E5E7F0] dark:border-white/[0.08]">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-r from-[#635BFF]/10 to-[#3984FF]/10 border border-[#635BFF]/30 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#635BFF] text-white flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-[#635BFF] dark:text-[#A5A0FF] block">
                      The Connected AI Alternative
                    </span>
                    <span className="text-[#62677D] dark:text-[#A5A1BF] text-xs">
                      Instant, grounded answers across every customer inquiry 24/7.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Diagnostic Challenge Cards */}
          <div className="lg:col-span-7 space-y-4">
            {challenges.items.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || HelpCircle;
              const isSelected = selectedChallenge === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedChallenge(item.id)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-white dark:bg-[#120E24] border-[#635BFF] dark:border-[#8138F7] shadow-lg dark:shadow-[0_8px_30px_rgba(99,91,255,0.15)] ring-1 ring-[#635BFF]/20"
                      : "bg-white/80 dark:bg-[#120E24]/70 border-[#E5E7F0] dark:border-[#28223D] hover:border-[#635BFF]/40 hover:bg-white dark:hover:bg-[#120E24]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isSelected
                          ? "bg-[#635BFF] text-white shadow-md shadow-[#635BFF]/30"
                          : "bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 text-amber-600 dark:text-amber-400"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h4 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/[0.08] text-[#62677D] dark:text-[#A5A1BF] flex-shrink-0">
                          Issue 0{index + 1}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-3">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-300 font-medium bg-amber-50 dark:bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 w-fit">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Impact: {item.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportChallenge;

