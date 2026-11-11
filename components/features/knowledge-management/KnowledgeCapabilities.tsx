"use client";

import React from "react";
import {
  Globe,
  Search,
  FileText,
  Table,
  HelpCircle,
  CheckSquare,
  FolderKanban,
  RefreshCw,
  Cpu,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { knowledgeManagementData } from "@/data/knowledgeManagement";
import { Icon3D } from "@/components/common/Icon3D";

const iconMap: Record<string, any> = {
  Globe,
  Search,
  FileText,
  Table,
  HelpCircle,
  CheckSquare,
  FolderKanban,
  RefreshCw,
  Cpu,
};

export const KnowledgeCapabilities: React.FC = () => {
  const { capabilities } = knowledgeManagementData;

  return (
    <section
      id="capabilities"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#20C5D8]/6 dark:bg-[#20C5D8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{capabilities.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            Everything Your Knowledge{" "}
            <span className="bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
              Needs to Succeed
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {capabilities.subheading}
          </p>
        </div>

        {/* 9 Comprehensive Key Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.items.map((item) => {
            const Icon = iconMap[item.iconName] || Globe;
            const isViolet = item.color === "violet";
            const isBlue = item.color === "blue";
            const isCyan = item.color === "cyan";

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl p-6 sm:p-7 border border-[#E2E6EF] dark:border-[#272B43] bg-[#FAFBFE] dark:bg-[#14172B] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/60 hover:bg-[#FFFFFF] dark:hover:bg-[#181B33] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <Icon3D
                      icon={Icon}
                      color={item.color}
                      size="sm"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="text-xs font-mono font-bold text-[#8F94A8] dark:text-[#6A708A]">
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

                  <h3 className="text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 group-hover:text-[#635BFF] dark:group-hover:text-[#A5A0FF] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-[#E8ECF4] dark:border-[#23273D] flex items-center justify-between text-xs">
                  <span className="text-[#8F94A8] dark:text-[#6A708A]">Native capability</span>
                  <div className="flex items-center gap-1.5 text-[#10B981] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Included</span>
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

export default KnowledgeCapabilities;
