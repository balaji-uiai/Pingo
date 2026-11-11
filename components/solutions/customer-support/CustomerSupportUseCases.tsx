"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  PackageCheck,
  ShieldAlert,
  History,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Bot,
  User,
  Sparkles,
} from "lucide-react";
import { customerSupportData } from "@/data/customerSupport";

const iconMap: Record<string, React.ElementType> = {
  HelpCircle,
  PackageCheck,
  ShieldAlert,
  History,
  UserCheck,
};

export const CustomerSupportUseCases: React.FC = () => {
  const { useCases } = customerSupportData;
  const [activeId, setActiveId] = useState<string>(useCases.items[0].id);

  const activeItem =
    useCases.items.find((item) => item.id === activeId) || useCases.items[0];

  return (
    <section
      id="use-cases"
      aria-label="Customer Support Use Cases"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#F7F8FD] dark:bg-[#0B0918] transition-colors duration-200"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[480px] h-[480px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3984FF]/30 dark:border-[#3984FF]/50 bg-[#EEF4FF] dark:bg-[#152238] text-[#3984FF] dark:text-[#7EB5FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#3984FF] dark:text-[#7EB5FF]" />
            <span>{useCases.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {useCases.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {useCases.subheading}
          </p>
        </div>

        {/* 5 Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.items.map((item, idx) => {
            const Icon = iconMap[item.iconName] || HelpCircle;
            const isHandover = item.resolutionPath === "AI + Human Handover";
            const isHuman = item.resolutionPath === "Human Agent";

            return (
              <div
                key={item.id}
                className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#131526] border border-[#E2E6EF] dark:border-[#252844] shadow-sm hover:border-[#3984FF]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3984FF] to-[#20C5D8] text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        isHandover
                          ? "bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] border-[#635BFF]/25"
                          : isHuman
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25"
                          : "bg-[#3984FF]/10 text-[#256BD9] dark:text-[#7EB3FF] border-[#3984FF]/25"
                      }`}
                    >
                      {item.resolutionPath}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8F94A8] block mb-1">
                    {item.category}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EEF1F7] dark:border-[#22253E]">
                  <p className="text-xs text-[#464B63] dark:text-[#CBD1E8] font-medium leading-relaxed">
                    <span className="text-[#3984FF] font-semibold">How it resolves: </span>
                    {item.scenario}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportUseCases;
