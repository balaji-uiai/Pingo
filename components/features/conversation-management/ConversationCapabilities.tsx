"use client";

import React from "react";
import {
  MessageSquare,
  BrainCircuit,
  GitFork,
  SearchCode,
  History,
  UserCheck,
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Bot,
} from "lucide-react";
import { conversationManagementData } from "@/data/conversationManagement";
import { Icon3D } from "@/components/common/Icon3D";

const iconMap = {
  MessageSquare,
  BrainCircuit,
  GitFork,
  SearchCode,
  History,
  UserCheck,
};

export const ConversationCapabilities: React.FC = () => {
  const { capabilities } = conversationManagementData;
  const items = capabilities.items;

  // Split into 2 spotlight capabilities and 4 secondary capabilities for visual variety
  const featured = items.slice(0, 2);
  const secondary = items.slice(2);

  return (
    <section
      id="capabilities"
      aria-label="Conversation Capabilities"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#3984FF]/6 dark:bg-[#3984FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{capabilities.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            Designed for{" "}
            <span className="bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
              Better Conversations
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {capabilities.subheading}
          </p>
        </div>

        {/* Varied Layout: 2 Spotlight Hero Cards on Top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 max-w-6xl mx-auto">
          {featured.map((item, idx) => {
            const Icon = iconMap[item.iconName] || MessageSquare;
            const isViolet = item.color === "violet";

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl p-7 sm:p-9 border border-[#E2E6EF] dark:border-[#272B43] bg-gradient-to-b from-[#F9FAFC] to-[#FFFFFF] dark:from-[#171A2E] dark:to-[#121424] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Accent top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    isViolet
                      ? "from-[#635BFF] to-[#3984FF]"
                      : "from-[#3984FF] to-[#20C5D8]"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Icon3D
                        icon={Icon}
                        color={item.color}
                        size="md"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="text-xs font-mono font-bold tracking-widest text-[#8F94A8] dark:text-[#6A708A]">
                        {item.number}
                      </span>
                    </div>

                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                        isViolet
                          ? "bg-[#635BFF]/10 text-[#635BFF] border-[#635BFF]/25 dark:text-[#A5A0FF] dark:border-[#635BFF]/40"
                          : "bg-[#3984FF]/10 text-[#3984FF] border-[#3984FF]/25 dark:text-[#7EB3FF] dark:border-[#3984FF]/40"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-3 group-hover:text-[#635BFF] dark:group-hover:text-[#A5A0FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Micro conversational status preview */}
                <div className="pt-5 border-t border-[#E8ECF4] dark:border-[#252940] flex items-center justify-between text-xs text-[#8F94A8] dark:text-[#7A809C]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#20C5D8]" />
                    <span className="font-medium text-[#464B63] dark:text-[#9DA3BC]">
                      {idx === 0 ? "Understands plain language" : "Retains multi-turn discussion context"}
                    </span>
                  </div>
                  <span className="font-semibold text-[#635BFF] dark:text-[#A5A0FF]">Always Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Varied Layout: 4 Secondary Capability Cards (4 columns on lg, 2 on md) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {secondary.map((item) => {
            const Icon = iconMap[item.iconName] || GitFork;
            const isCyan = item.color === "cyan";
            const isBlue = item.color === "blue";

            return (
              <div
                key={item.id}
                className="group relative rounded-xl p-6 border border-[#E2E6EF] dark:border-[#272B43] bg-[#FAFBFE] dark:bg-[#14172B] hover:border-[#3984FF]/40 dark:hover:border-[#3984FF]/50 hover:bg-white dark:hover:bg-[#191D34] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Icon3D
                      icon={Icon}
                      color={item.color}
                      size="sm"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="text-[11px] font-mono font-bold text-[#8F94A8] dark:text-[#6A708A]">
                      {item.number}
                    </span>
                  </div>

                  <span
                    className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full border mb-3 ${
                      isCyan
                        ? "bg-[#20C5D8]/10 text-[#0E8A99] dark:text-[#4FE3F4] border-[#20C5D8]/25 dark:border-[#20C5D8]/40"
                        : isBlue
                        ? "bg-[#3984FF]/10 text-[#256BD9] dark:text-[#7EB3FF] border-[#3984FF]/25 dark:border-[#3984FF]/40"
                        : "bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] border-[#635BFF]/25 dark:border-[#635BFF]/40"
                    }`}
                  >
                    {item.tag}
                  </span>

                  <h3 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 group-hover:text-[#3984FF] dark:group-hover:text-[#7EB3FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E8ECF4] dark:border-[#23273D] flex items-center justify-between text-[11px]">
                  <span className="text-[#8F94A8] dark:text-[#6A708A]">
                    {item.id === "human-assistance" ? "Handover enabled" : "Context verified"}
                  </span>
                  <span className="font-semibold text-[#171B2E] dark:text-[#FFFFFF]">Active</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ConversationCapabilities;

