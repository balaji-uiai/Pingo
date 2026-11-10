"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Globe,
  FileText,
  Code2,
  MessageSquare,
  CheckCircle2,
  Database,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { integrationsChannelsData } from "@/data/integrationsChannels";

const iconMap = {
  Globe,
  FileText,
  Code2,
  Layers,
  MessageSquare,
};

export const IntegrationsHero: React.FC = () => {
  const { hero } = integrationsChannelsData;

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#635BFF]/10 dark:bg-[#635BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#3984FF]/10 dark:bg-[#3984FF]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Small Label Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Layers className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.12]">
              {hero.headingPart1}{" "}
              <span className="bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
                {hero.headingPart2}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#62677D] dark:text-[#B5BAD0] max-w-xl font-normal leading-relaxed">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Link
                href={hero.primaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2B75E6] shadow-[0_0_25px_rgba(99,91,255,0.4)] hover:shadow-[0_0_35px_rgba(99,91,255,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{hero.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={hero.secondaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-[#171B2E] dark:text-[#FFFFFF] bg-white/80 dark:bg-[#1E2238]/80 hover:bg-[#F3F4F8] dark:hover:bg-[#252A47] border border-[#E2E6EF] dark:border-[#2D3356] transition-all duration-300 cursor-pointer shadow-xs"
              >
                <span>{hero.secondaryCta.text}</span>
              </Link>
            </div>

            {/* Supporting Micro Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#62677D] dark:text-[#B5BAD0]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#20C5D8] flex-shrink-0" />
                Generic Supported Sources
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#635BFF] flex-shrink-0" />
                Product Isolation
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3984FF] flex-shrink-0" />
                Grounded Citations
              </span>
            </div>
          </div>

          {/* Right Column: Premium Integration-Hub Illustration */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#635BFF]/15 via-[#3984FF]/15 to-[#20C5D8]/15 rounded-3xl blur-2xl opacity-60 dark:opacity-80 -z-10" />

            <div className="rounded-3xl border border-[#E2E6EF] dark:border-[#272B43] bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FE] dark:from-[#15182C] dark:to-[#0F1122] shadow-2xl p-6 sm:p-7 relative overflow-hidden">
              
              {/* Top Hub Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8ECF4] dark:border-[#242842] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#635BFF] to-[#3984FF] flex items-center justify-center text-white shadow-xs">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      Pingo Knowledge Ingest Hub
                    </h3>
                    <span className="text-[11px] text-[#8F94A8] dark:text-[#7A809C]">
                      Connected Information Pipelines
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>4 Sources Active</span>
                </div>
              </div>

              {/* Central Ingest Hub & Radiating Generic Sources */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hero.connectedSources.map((source) => {
                  const Icon = iconMap[source.iconName] || Globe;
                  const isViolet = source.color === "violet";
                  const isBlue = source.color === "blue";

                  return (
                    <div
                      key={source.id}
                      className="group p-4 rounded-2xl bg-[#F8F9FD] dark:bg-[#1A1E35] border border-[#E5E9F3] dark:border-[#2C314E] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                              isViolet
                                ? "bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF]"
                                : isBlue
                                ? "bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB3FF]"
                                : "bg-[#20C5D8]/10 text-[#0E8A99] dark:text-[#4FE3F4]"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>

                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {source.status}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-1 group-hover:text-[#635BFF] dark:group-hover:text-[#A5A0FF] transition-colors">
                          {source.name}
                        </h4>

                        <span className="text-[10px] font-mono text-[#8F94A8] dark:text-[#7A809C] block mb-2">
                          {source.category}
                        </span>

                        <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                          {source.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-[#E8ECF5] dark:border-[#252945] flex items-center justify-between text-[10px] text-[#8F94A8] dark:text-[#6A708A]">
                        <span>Direct Ingest</span>
                        <span className="font-semibold text-[#171B2E] dark:text-[#FFFFFF]">Synced</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Central Connection Bar */}
              <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-[#635BFF]/10 via-[#3984FF]/10 to-[#20C5D8]/10 border border-[#635BFF]/30 dark:border-[#635BFF]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8F94A8] dark:text-[#7A809C]">
                <div className="flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-[#635BFF] flex-shrink-0" />
                  <span className="font-medium text-[#464B63] dark:text-[#C5CAF0]">
                    Pingo Central Knowledge Hub · Domain Quarantined
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#635BFF] dark:text-[#A5A0FF]">
                  Verified Citations
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntegrationsHero;

