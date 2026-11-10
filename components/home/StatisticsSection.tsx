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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[220px] bg-[#635BFF]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative flex flex-col items-center text-center">
        {/* 1. Section Heading (Top, Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center leading-tight sm:leading-snug">
            <span className="block text-[#171B2E] dark:text-[#FFFFFF]">
              {heading.line1}
            </span>
            <span className="block bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent mt-1 sm:mt-1.5">
              {heading.line2}
            </span>
          </h2>
        </div>

        {/* 2. Statistics in a Single Horizontal Row on Desktop */}
        <div className="w-full rounded-2xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] backdrop-blur-md px-4 py-8 sm:px-8 sm:py-9 shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-2 md:grid-cols-4 items-center divide-y md:divide-y-0 md:divide-x divide-[#E5E7F0] dark:divide-[#292D45]">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col items-center justify-center text-center px-4 ${
                  index === 0 || index === 1 ? "pb-6 md:pb-0" : "pt-6 md:pt-0"
                } ${index % 2 === 1 ? "border-l md:border-l-0 border-[#E5E7F0] dark:border-[#292D45]" : ""}`}
              >
                {/* Metric Number */}
                <div className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] whitespace-nowrap">
                  <span>{item.value}</span>
                </div>

                {/* Metric Label */}
                <div className="mt-2 text-xs sm:text-sm lg:text-base font-medium text-[#62677D] dark:text-[#B5BAD0] tracking-wide">
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
