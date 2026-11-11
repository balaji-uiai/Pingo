"use client";

import React from "react";
import {
  Clock,
  ShieldCheck,
  Search,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { supportManagementData } from "@/data/supportManagement";

const iconMap: Record<string, React.ElementType> = {
  Clock,
  ShieldCheck,
  Search,
  Users,
};

export const SupportManagementBenefits: React.FC = () => {
  const { benefits } = supportManagementData;

  return (
    <section
      id="benefits"
      aria-label="Support Management Benefits"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FAFAFE] dark:bg-[#0B0918] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#10B981]/30 dark:border-[#10B981]/50 bg-[#E6F9F2] dark:bg-[#0E2820] text-[#059669] dark:text-[#34D399] text-xs font-bold tracking-wider uppercase shadow-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{benefits.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {benefits.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {benefits.subheading}
          </p>
        </div>

        {/* 4-Card Balanced Support Benefit Matrix (2x2 Grid) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.items.map((item) => {
            const IconComponent = iconMap[item.iconName] || Clock;

            return (
              <div
                key={item.id}
                className="rounded-2xl p-7 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#635BFF]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center border border-[#635BFF]/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
                      {item.impactTag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#E5E7F0] dark:border-white/[0.06] flex items-center gap-1.5 text-xs text-[#10B981] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Immediate operational impact across queues</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SupportManagementBenefits;
