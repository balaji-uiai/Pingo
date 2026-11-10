"use client";

import React from "react";
import {
  Boxes,
  Package,
  FolderKanban,
  Database,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { knowledgeManagementData } from "@/data/knowledgeManagement";

export const KnowledgeOverview: React.FC = () => {
  const { overview } = knowledgeManagementData;

  const tiers = [
    {
      step: "01",
      badge: "Product Scope",
      title: "Product Boundary",
      description:
        "Every product, service, or business unit gets its own isolated boundary. No mixing of incompatible documentation.",
      icon: Package,
      color: "violet" as const,
      tag: "Independent Domain",
    },
    {
      step: "02",
      badge: "Workspace Layer",
      title: "Dedicated Knowledge Center",
      description:
        "Curate documentation, FAQs, release notes, and troubleshooting steps in a designated, project-wise workspace.",
      icon: FolderKanban,
      color: "blue" as const,
      tag: "Structured Content",
    },
    {
      step: "03",
      badge: "Storage Layer",
      title: "Separate Knowledge Base",
      description:
        "Isolated vector databases guarantee that AI assistants only retrieve relevant context with zero cross-product data contamination.",
      icon: Database,
      color: "cyan" as const,
      tag: "Quarantined Vectors",
    },
  ];

  return (
    <section
      id="overview"
      aria-label="Knowledge Management Architecture"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FAFAFE] dark:bg-[#0E1022] transition-colors duration-200"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 -left-32 w-[550px] h-[550px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#20C5D8]/6 dark:bg-[#20C5D8]/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Boxes className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{overview.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {overview.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {overview.description}
          </p>
        </div>

        {/* 3-Tier Architecture Progression Showcase */}
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Architecture Banner */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-[#FFFFFF] dark:bg-[#15182E] border border-[#635BFF]/30 dark:border-[#635BFF]/40 text-xs sm:text-sm font-semibold text-[#171B2E] dark:text-[#FFFFFF] shadow-sm">
              <span className="text-[#635BFF] font-bold">Product</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3984FF]" />
              <span className="text-[#3984FF] font-bold">Dedicated Knowledge Center</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#20C5D8]" />
              <span className="text-[#20C5D8] font-bold">Separate Knowledge Base</span>
            </div>
          </div>

          {/* 3 Tier Cards with Flow Progression */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {tiers.map((tier, idx) => {
              const Icon = tier.icon;
              const colorStyle =
                tier.color === "violet"
                  ? {
                      iconBg: "bg-gradient-to-tr from-[#635BFF] to-[#4538E0]",
                      tagBg: "bg-[#F0EDFF] text-[#635BFF] dark:bg-[#201D45] dark:text-[#A5A0FF]",
                      borderHover: "hover:border-[#635BFF]/50",
                    }
                  : tier.color === "blue"
                  ? {
                      iconBg: "bg-gradient-to-tr from-[#3984FF] to-[#1D4ED8]",
                      tagBg: "bg-[#E0F2FE] text-[#0284C7] dark:bg-[#142A3D] dark:text-[#38BDF8]",
                      borderHover: "hover:border-[#3984FF]/50",
                    }
                  : {
                      iconBg: "bg-gradient-to-tr from-[#20C5D8] to-[#0891B2]",
                      tagBg: "bg-[#E0F7FA] text-[#00A3C4] dark:bg-[#122E3B] dark:text-[#20C5D8]",
                      borderHover: "hover:border-[#20C5D8]/50",
                    };

              return (
                <div
                  key={tier.step}
                  className={`group relative p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#14172B] border border-[#E5E7F0] dark:border-[#252945] ${colorStyle.borderHover} shadow-sm hover:shadow-xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div className="space-y-5">
                    {/* Top Row: Icon & Tier Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl ${colorStyle.iconBg} text-white flex items-center justify-center flex-shrink-0 shadow-sm`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${colorStyle.tagBg}`}
                      >
                        {tier.tag}
                      </span>
                    </div>

                    {/* Step & Title */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-bold text-[#635BFF] dark:text-[#20C5D8]">
                        Tier {tier.step} • {tier.badge}
                      </span>
                      <h3 className="text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                        {tier.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Verification Note */}
                  <div className="pt-4 mt-6 border-t border-[#F0F2F8] dark:border-[#232742] flex items-center gap-2 text-[11px] text-[#10B981] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Strict Architecture Isolation</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default KnowledgeOverview;

