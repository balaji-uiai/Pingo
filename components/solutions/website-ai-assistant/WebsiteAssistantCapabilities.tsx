"use client";

import React, { useState } from "react";
import {
  Bot,
  MessageSquare,
  Database,
  Sparkles,
  Compass,
  ShieldCheck,
  CheckCircle2,
  FileText,
  User,
  ArrowRight,
} from "lucide-react";
import { websiteAiAssistantData, CapabilityItem } from "@/data/websiteAiAssistant";

const iconMap: Record<string, React.ElementType> = {
  Bot,
  MessageSquare,
  Database,
  Sparkles,
  Compass,
};

export const WebsiteAssistantCapabilities: React.FC = () => {
  const { capabilities } = websiteAiAssistantData;
  const [activeId, setActiveId] = useState<string>(capabilities.items[0].id);

  const activeItem =
    capabilities.items.find((item) => item.id === activeId) ||
    capabilities.items[0];

  return (
    <section
      id="capabilities"
      aria-label="Website Assistant Capabilities"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080710] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#20C5D8]/30 dark:border-[#20C5D8]/50 bg-[#E6FAFC] dark:bg-[#122A2F] text-[#0E7A8A] dark:text-[#20C5D8] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0E7A8A] dark:text-[#20C5D8]" />
            <span>{capabilities.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {capabilities.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {capabilities.subheading}
          </p>
        </div>

        {/* Dual-Column Console (Capabilities List + Interactive Demonstration) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column (50%): 5 Selectable Capability Cards */}
          <div className="lg:col-span-6 space-y-3">
            {capabilities.items.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || Bot;
              const isSelected = item.id === activeId;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#F5FBFD] dark:bg-[#121A2C] border-[#20C5D8] dark:border-[#20C5D8] shadow-md dark:shadow-[0_4px_25px_rgba(32,197,216,0.15)] ring-1 ring-[#20C5D8]/30"
                      : "bg-[#FAFBFE] dark:bg-[#120E24]/60 border-[#E5E7F0] dark:border-[#28223D] hover:bg-white dark:hover:bg-[#15102A] hover:border-[#20C5D8]/30"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                        isSelected
                          ? "bg-[#20C5D8] text-white shadow-sm"
                          : "bg-[#20C5D8]/10 text-[#0E7A8A] dark:text-[#20C5D8]"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-sm sm:text-base font-bold text-[#171B2E] dark:text-white">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-white/[0.08] text-[#62677D] dark:text-[#A5A1BF] flex-shrink-0">
                          {item.tag}
                        </span>
                      </div>

                      <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (50%): Live On-Site Demonstration Inspector */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="h-full rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#FAFBFE] to-white dark:from-[#120E24] dark:to-[#0A0716] border border-[#E5E7F0] dark:border-[#28223D] shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E7F0] dark:border-white/[0.08] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#20C5D8] animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#171B2E] dark:text-white">
                      Live Capability: {activeItem.title}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#0E7A8A] dark:text-[#20C5D8] font-semibold">
                    {activeItem.tag}
                  </span>
                </div>

                {/* Simulated Conversation Exchange */}
                <div className="space-y-4">
                  {/* Visitor Query */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#62677D] dark:text-[#A5A1BF]">
                      <User className="w-3.5 h-3.5 text-[#3984FF]" />
                      <span>Website Visitor Prompt:</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1435] border border-[#E5E7F0] dark:border-white/[0.08] text-xs sm:text-sm font-medium text-[#171B2E] dark:text-white italic shadow-xs">
                      &ldquo;{activeItem.demonstration.visitorQuery}&rdquo;
                    </div>
                  </div>

                  {/* Connected Knowledge Source */}
                  <div className="p-2.5 rounded-lg bg-[#20C5D8]/8 dark:bg-[#20C5D8]/10 border border-[#20C5D8]/20 text-xs font-mono text-[#0E7A8A] dark:text-[#20C5D8] flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">Grounded in: {activeItem.demonstration.sourceRef}</span>
                  </div>

                  {/* Assistant Guidance */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#20C5D8] font-semibold">
                      <Bot className="w-3.5 h-3.5" />
                      <span>Website AI Assistant Guidance:</span>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#20C5D8]/10 via-[#3984FF]/10 to-[#635BFF]/10 border border-[#20C5D8]/30 text-xs sm:text-sm text-[#171B2E] dark:text-[#F8F7FF] leading-relaxed shadow-xs">
                      {activeItem.demonstration.assistantGuidance}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Trust Bar */}
              <div className="mt-6 pt-4 border-t border-[#E5E7F0] dark:border-white/[0.08] flex items-center justify-between text-xs text-[#62677D] dark:text-[#A5A1BF]">
                <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  Factually grounded in published knowledge
                </span>
                <span className="font-mono text-[11px] text-[#3984FF]">
                  Multi-Turn Context
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteAssistantCapabilities;

