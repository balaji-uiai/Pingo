"use client";

import React from "react";
import {
  Briefcase,
  ShieldCheck,
  FileText,
  Navigation,
  Compass,
  HelpCircle,
  ExternalLink,
  Bot,
  Sparkles,
} from "lucide-react";
import { websiteAiAssistantData } from "@/data/websiteAiAssistant";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  ShieldCheck,
  FileText,
  Navigation,
  Compass,
};

export const WebsiteAssistantUseCases: React.FC = () => {
  const { useCases } = websiteAiAssistantData;

  return (
    <section
      id="use-cases"
      aria-label="Website Assistant Use Cases"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#F7F8FD] dark:bg-[#0B0918] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[480px] h-[480px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#20C5D8]/30 dark:border-[#20C5D8]/50 bg-[#E6FAFC] dark:bg-[#122A2F] text-[#0E7A8A] dark:text-[#20C5D8] text-xs font-bold tracking-wider uppercase shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#20C5D8]" />
            <span>{useCases.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {useCases.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {useCases.subheading}
          </p>
        </div>

        {/* 5 Real-World Website Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.items.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Briefcase;
            const isWide = idx === 4;

            return (
              <div
                key={item.id}
                className={`rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#131526] border border-[#E2E6EF] dark:border-[#252844] shadow-sm hover:border-[#20C5D8]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                  isWide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#20C5D8] to-[#3984FF] text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-[#20C5D8]/10 text-[#0E7A8A] dark:text-[#20C5D8] border-[#20C5D8]/25">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="p-3 rounded-xl bg-[#F8FAFD] dark:bg-[#1A1D36] border border-[#E5E9F2] dark:border-[#282D4F] text-xs space-y-1 mb-4">
                    <span className="font-semibold text-[#8F94A8] text-[10px] uppercase block">
                      Visitor Query:
                    </span>
                    <p className="text-[#171B2E] dark:text-white font-medium italic">
                      {item.visitorQuestion}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EEF1F7] dark:border-[#22253E] space-y-2">
                  <p className="text-xs text-[#464B63] dark:text-[#CBD1E8] font-medium leading-relaxed">
                    <span className="text-[#059669] dark:text-[#34D399] font-bold">Assistant Answer: </span>
                    {item.assistantResponse}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#635BFF] dark:text-[#A5A0FF]">
                    <span>{item.suggestedAction}</span>
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

export default WebsiteAssistantUseCases;
