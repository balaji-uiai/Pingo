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
  Layers,
  Sparkles,
} from "lucide-react";
import { knowledgeManagementData } from "@/data/knowledgeManagement";

export const KnowledgeOverview: React.FC = () => {
  const { hierarchy } = knowledgeManagementData;

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
        "Curate website crawls, file uploads, custom tables, and FAQs in a designated, project-wise workspace.",
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

  const exampleProducts = [
    {
      product: "Product A • Cloud Platform",
      center: "Enterprise Cloud Knowledge Center",
      kb: "Cloud_Vector_KB_01",
      docs: "1,240 documents",
      color: "violet",
    },
    {
      product: "Product B • Mobile Banking App",
      center: "Fintech Mobile Knowledge Center",
      kb: "Mobile_Vector_KB_02",
      docs: "890 documents",
      color: "blue",
    },
    {
      product: "Product C • Internal Ops Portal",
      center: "Employee Ops Knowledge Center",
      kb: "Internal_Vector_KB_03",
      docs: "460 documents",
      color: "cyan",
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
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Boxes className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{hierarchy.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {hierarchy.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {hierarchy.description}
          </p>
        </div>

        {/* 3-Tier Architecture Progression Showcase */}
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Architecture Banner */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 rounded-full bg-[#FFFFFF] dark:bg-[#15182E] border border-[#635BFF]/30 dark:border-[#635BFF]/40 text-xs sm:text-sm font-semibold text-[#171B2E] dark:text-[#FFFFFF] shadow-sm">
              <span className="text-[#635BFF] font-bold">1. Product</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3984FF]" />
              <span className="text-[#3984FF] font-bold">2. Dedicated Knowledge Center</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#20C5D8]" />
              <span className="text-[#20C5D8] font-bold">3. Separate Knowledge Base</span>
            </div>
          </div>

          {/* 3 Tier Cards with Flow Progression */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {tiers.map((tier) => {
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

          {/* Illustrative Multi-Product Domain Isolation Demonstration */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#14172B] border border-[#E2E6EF] dark:border-[#252945] shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#EEF1F7] dark:border-[#232740]">
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-[#635BFF] dark:text-[#A5A0FF]" />
                <h4 className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                  Multi-Product Domain Isolation in Action
                </h4>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#10B981]/10 text-[#059669] dark:text-[#34D399] font-medium border border-[#10B981]/20">
                100% Zero Cross-Product Data Bleed
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {exampleProducts.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-4 bg-[#F8FAFD] dark:bg-[#1A1D36] border border-[#E5E9F2] dark:border-[#282D4F] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      {item.product}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  </div>
                  <div className="space-y-1.5 text-xs text-[#62677D] dark:text-[#A6ACCD]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px]">Knowledge Center:</span>
                      <span className="font-medium text-[#171B2E] dark:text-[#E2E6EF] text-right truncate max-w-[140px]">
                        {item.center}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px]">Vector Base:</span>
                      <span className="font-mono text-[11px] text-[#635BFF] dark:text-[#A5A0FF]">
                        {item.kb}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-[#E8ECF4] dark:border-[#252A47]">
                      <span className="text-[11px]">Indexed Volume:</span>
                      <span className="font-semibold text-[#10B981]">{item.docs}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeOverview;
