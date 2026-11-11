"use client";

import React from "react";
import {
  Clock,
  TrendingUp,
  HelpCircle,
  Smile,
  Users,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import { analyticsIntelligenceData } from "@/data/analyticsIntelligence";
import { Icon3D } from "@/components/common/Icon3D";

const iconMap: Record<string, any> = {
  Clock,
  TrendingUp,
  HelpCircle,
  Smile,
  Users,
  Cpu,
};

export const AnalyticsWorkflow: React.FC = () => {
  const { insights } = analyticsIntelligenceData;

  return (
    <section
      id="actionable-insights"
      aria-label="Turn Data Into Better Decisions"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#F6F8FC] dark:bg-[#0E1022] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Lightbulb className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{insights.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {insights.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {insights.subheading}
          </p>
        </div>

        {/* 6 Actionable Decision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {insights.items.map((item, idx) => {
            const Icon = iconMap[item.iconName] || TrendingUp;
            const isViolet = item.color === "violet";
            const isBlue = item.color === "blue";
            const isCyan = item.color === "cyan";

            return (
              <div
                key={item.title}
                className="group relative rounded-2xl p-6 sm:p-7 border border-[#E2E6EF] dark:border-[#272B43] bg-[#FFFFFF] dark:bg-[#16182C] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <Icon3D
                      icon={Icon}
                      color={item.color}
                      size="sm"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        isCyan
                          ? "bg-[#20C5D8]/10 text-[#0E8A99] dark:text-[#4FE3F4] border-[#20C5D8]/25"
                          : isBlue
                          ? "bg-[#3984FF]/10 text-[#256BD9] dark:text-[#7EB3FF] border-[#3984FF]/25"
                          : "bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] border-[#635BFF]/25"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2.5 group-hover:text-[#635BFF] dark:group-hover:text-[#A5A0FF] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EEF1F7] dark:border-[#242842] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8F94A8] dark:text-[#7A809C] uppercase font-mono tracking-wider">
                      {item.statLabel}
                    </span>
                    <span className="text-sm font-bold text-[#171B2E] dark:text-white">
                      {item.stat}
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#F0F2F9] dark:bg-[#1F233D] flex items-center justify-center text-[#635BFF] dark:text-[#A5A0FF] group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsWorkflow;
