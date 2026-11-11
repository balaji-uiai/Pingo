"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  Clock,
  RotateCcw,
  UserCheck,
  MessageSquareWarning,
  Scale,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { customerSupportData } from "@/data/customerSupport";

const iconMap: Record<string, React.ElementType> = {
  Clock,
  RotateCcw,
  UserCheck,
  MessageSquareWarning,
  Scale,
};

export const CustomerSupportChallenge: React.FC = () => {
  const { challenges } = customerSupportData;
  const [activeId, setActiveId] = useState<string>(challenges.items[0].id);

  const activeChallenge =
    challenges.items.find((item) => item.id === activeId) || challenges.items[0];

  return (
    <section
      id="challenges"
      aria-label="Customer Support Challenges"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FAFBFE] dark:bg-[#0A0815] transition-colors duration-200"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-28 w-[500px] h-[500px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[480px] h-[480px] bg-[#3984FF]/6 dark:bg-[#3984FF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 space-y-4">
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

        {/* 5 Challenge Interactive Grid / Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left: 5 Challenge Selector Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {challenges.items.map((item, idx) => {
              const Icon = iconMap[item.iconName] || Clock;
              const isActive = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? "bg-white dark:bg-[#16182C] border-[#635BFF] dark:border-[#635BFF] shadow-lg shadow-[#635BFF]/10"
                      : "bg-[#FFFFFF]/70 dark:bg-[#111322] border-[#E5E9F2] dark:border-[#22253B] hover:border-[#635BFF]/40 hover:bg-white dark:hover:bg-[#16182C]"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isActive
                        ? "bg-[#635BFF] text-white shadow-sm"
                        : "bg-[#F0F2F9] dark:bg-[#1E2238] text-[#62677D] dark:text-[#A5AABF]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3
                        className={`text-sm sm:text-base font-bold ${
                          isActive
                            ? "text-[#171B2E] dark:text-white"
                            : "text-[#464B63] dark:text-[#CBD1E8]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[#8F94A8] flex-shrink-0">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-[#62677D] dark:text-[#9DA3BC] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Deep-Dive Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#141629] border border-[#E2E6EF] dark:border-[#272B43] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EEF1F7] dark:border-[#232740]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EF4444] flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Operational Impact
                </span>
                <span className="text-xs font-mono text-[#8F94A8]">Selected Challenge</span>
              </div>

              <h3 className="text-lg font-bold text-[#171B2E] dark:text-white mb-3">
                {activeChallenge.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-6">
                {activeChallenge.description}
              </p>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider block">
                  Root Consequence:
                </span>
                <p className="text-xs font-medium leading-relaxed">
                  {activeChallenge.impact}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EEF1F7] dark:border-[#232740] flex items-center justify-between text-xs text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
              <span>How Pingo Resolves This</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportChallenge;
