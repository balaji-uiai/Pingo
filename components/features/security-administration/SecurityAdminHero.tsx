"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  UserCheck,
  Settings2,
  CheckCircle2,
  Info,
  SlidersHorizontal,
  KeyRound,
  Building2,
} from "lucide-react";
import { securityAdministrationData } from "@/data/securityAdministration";

export const SecurityAdminHero: React.FC = () => {
  const { hero } = securityAdministrationData;

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
              <ShieldCheck className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
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
                Organized Administration
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#635BFF] flex-shrink-0" />
                Knowledge Partitioning
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3984FF] flex-shrink-0" />
                Supported Account Roles
              </span>
            </div>
          </div>

          {/* Right Column: Premium Administration Interface Preview (Illustrative) */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#635BFF]/15 via-[#3984FF]/15 to-[#20C5D8]/15 rounded-3xl blur-2xl opacity-60 dark:opacity-80 -z-10" />

            <div className="rounded-3xl border border-[#E2E6EF] dark:border-[#272B43] bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FE] dark:from-[#15182C] dark:to-[#0F1122] shadow-2xl p-6 sm:p-7 relative overflow-hidden space-y-4">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8ECF4] dark:border-[#242842]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#635BFF] to-[#3984FF] flex items-center justify-center text-white shadow-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      Workspace Administration Console
                    </h3>
                    <span className="text-[11px] text-[#8F94A8] dark:text-[#7A809C]">
                      Enterprise Organization Settings
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Workspace Protected</span>
                </div>
              </div>

              {/* Settings Configuration Rows */}
              <div className="space-y-3">
                {hero.sampleSettings.map((setting) => {
                  const isViolet = setting.color === "violet";
                  const isBlue = setting.color === "blue";

                  return (
                    <div
                      key={setting.id}
                      className="group p-4 rounded-xl border border-[#E5E8F2] dark:border-[#242842] bg-[#FFFFFF] dark:bg-[#16182C] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/60 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-mono font-bold text-[#635BFF] dark:text-[#A5A0FF] bg-[#635BFF]/10 px-2 py-0.5 rounded">
                          {setting.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          {setting.status}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-1 group-hover:text-[#635BFF] dark:group-hover:text-[#A5A0FF] transition-colors">
                        {setting.name}
                      </h4>

                      <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                        {setting.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Role-Based Overview Grid */}
              <div className="p-3.5 rounded-xl bg-[#F8F9FD] dark:bg-[#1A1E35] border border-[#E5E9F3] dark:border-[#2C314E] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-3.5 h-3.5 text-[#3984FF]" />
                  <span className="font-semibold text-[#171B2E] dark:text-[#FFFFFF]">
                    Supported Roles:
                  </span>
                  <span className="text-[#62677D] dark:text-[#B5BAD0]">
                    Admin · Specialist · Agent
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[#20C5D8]">
                  Domain Isolated
                </span>
              </div>

              {/* Bottom Illustrative Disclaimer Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#8F94A8] dark:text-[#7A809C] border-t border-[#E8ECF4] dark:border-[#242842]">
                <div className="flex items-center gap-1.5 text-[11px] text-[#62677D] dark:text-[#8D93AF]">
                  <Info className="w-3 h-3 text-[#3984FF] flex-shrink-0" />
                  <span>{hero.illustrativeNote}</span>
                </div>
                <span className="text-[11px] font-semibold text-[#635BFF] dark:text-[#A5A0FF]">
                  Structured Administration
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecurityAdminHero;

