import React from "react";
import {
  statisticsContent,
  StatisticItem,
  StatisticsSectionData,
} from "@/data/statistics";

export interface StatisticsSectionProps {
  content?: StatisticsSectionData;
  data?: StatisticItem[];
  className?: string;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  content = statisticsContent,
  data,
  className = "",
}) => {
  const items = data || content.items;
  const heading = content.heading;

  return (
    <section
      aria-label="Platform Statistics and AI Solutions"
      className={`relative py-8 sm:py-12 lg:py-14 z-10 ${className}`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[220px] bg-[#782BFF]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative flex flex-col items-center text-center">
        {/* 1. Section Heading (Top, Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center leading-tight sm:leading-snug">
            <span className="block text-slate-900 dark:text-white">
              {heading.line1}
            </span>
            <span className="block text-[#782BFF] dark:text-[#A855F7] bg-gradient-to-r from-[#782BFF] via-[#9047FF] to-[#4C16B8] dark:from-[#A855F7] dark:via-[#B57CFF] dark:to-[#782BFF] bg-clip-text text-transparent mt-1 sm:mt-1.5">
              {heading.line2}
            </span>
          </h2>
        </div>

        {/* 2. Statistics in a Single Horizontal Row on Desktop (Directly Below Heading) */}
        <div className="w-full rounded-2xl bg-white/90 dark:bg-[#100D1D]/70 border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-md px-4 py-8 sm:px-8 sm:py-9 shadow-lg shadow-purple-900/5 dark:shadow-[0_10px_35px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-2 md:grid-cols-4 items-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80 dark:divide-white/[0.08]">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col items-center justify-center text-center px-4 ${
                  index === 0 || index === 1 ? "pb-6 md:pb-0" : "pt-6 md:pt-0"
                } ${index % 2 === 1 ? "border-l md:border-l-0 border-slate-200/80 dark:border-white/[0.08]" : ""}`}
              >
                {/* Metric Number */}
                <div className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-purple-900 dark:from-white dark:via-white dark:to-purple-200 bg-clip-text text-transparent">
                    {item.value}
                  </span>
                </div>

                {/* Metric Label */}
                <div className="mt-2 text-xs sm:text-sm lg:text-base font-medium text-slate-600 dark:text-[#D5D0E5] tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
