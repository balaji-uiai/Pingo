"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Sparkles,
  CheckCircle2,
  Database,
  FileText,
  ShieldCheck,
  Bot,
  User,
  Briefcase,
  TrendingUp,
  Code2,
} from "lucide-react";
import { teamAssistanceData, DepartmentWorkspaceTab } from "@/data/teamAssistance";

const deptIconMap: Record<string, React.ElementType> = {
  Users,
  TrendingUp,
  Briefcase,
  Code2,
  Sparkles,
};

export const TeamAssistanceHero: React.FC = () => {
  const { hero } = teamAssistanceData;
  const [activeTab, setActiveTab] = useState<DepartmentWorkspaceTab>(
    hero.departmentTabs[0]
  );

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting in Pingo brand colors */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#635BFF]/10 dark:bg-[#635BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#3984FF]/10 dark:bg-[#3984FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3984FF]/30 dark:border-[#3984FF]/50 bg-[#EEF4FF] dark:bg-[#152238] text-[#3984FF] dark:text-[#7EB5FF] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Users className="w-3.5 h-3.5 text-[#3984FF] dark:text-[#7EB5FF] flex-shrink-0" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.12]">
              {hero.headingPart1}{" "}
              <span className="block sm:inline bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
                {hero.headingPart2}
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed font-normal">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2E74E6] border border-white/20 shadow-[0_0_25px_rgba(99,91,255,0.4)] hover:shadow-[0_0_35px_rgba(99,91,255,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>{hero.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#171B2E] dark:text-[#FFFFFF] bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:bg-[#EAEBF0] dark:hover:bg-[#202440] transition-all duration-200 cursor-pointer"
              >
                <span>{hero.secondaryCta.text}</span>
              </Link>
            </div>

            {/* Reassurance Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 pt-2 text-xs text-[#62677D] dark:text-[#A5A1BF]">
              {hero.highlights.map((item, idx) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle2
                    className={`w-3.5 h-3.5 ${
                      idx === 0
                        ? "text-[#635BFF]"
                        : idx === 1
                        ? "text-[#3984FF]"
                        : idx === 2
                        ? "text-[#20C5D8]"
                        : "text-[#10B981]"
                    }`}
                  />
                  <span>{item}</span>
                  {idx < hero.highlights.length - 1 && (
                    <span className="text-gray-300 dark:text-gray-700 ml-2">
                      •
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Department Knowledge Workspace Mockup */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            {/* Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3984FF]/15 via-[#635BFF]/20 to-[#20C5D8]/15 rounded-3xl filter blur-3xl transform scale-90 pointer-events-none" />

            {/* Main Visual Composition Container */}
            <div className="relative w-full max-w-lg rounded-2xl bg-white/95 dark:bg-[#100D1E]/95 border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden transition-all duration-300">
              
              {/* Header: Company Knowledge Center */}
              <div className="px-5 py-3.5 border-b border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#15102A] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center shadow-sm">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#171B2E] dark:text-white leading-tight text-xs sm:text-sm">
                      Pingo Team Workspace
                    </h3>
                    <span className="text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                      Connected Department Knowledge Bases
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                  Shared Access
                </span>
              </div>

              {/* Department Switcher Tabs (5 Tabs: HR, Sales, Ops, Tech, Onboarding) */}
              <div className="p-3 bg-[#F5F6FA] dark:bg-[#16122C] border-b border-[#E5E7F0] dark:border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] font-semibold block mb-2 px-1">
                  Department Information Workspace:
                </span>
                <div className="grid grid-cols-5 gap-1">
                  {hero.departmentTabs.map((dept) => {
                    const isSelected = activeTab.id === dept.id;
                    const IconComp = deptIconMap[dept.iconName] || Users;

                    return (
                      <button
                        key={dept.id}
                        type="button"
                        onClick={() => setActiveTab(dept)}
                        className={`p-1.5 rounded-xl text-center transition-all duration-200 cursor-pointer border ${
                          isSelected
                            ? "bg-white dark:bg-[#1F193D] border-[#3984FF] shadow-sm text-[#171B2E] dark:text-white"
                            : "bg-transparent border-transparent hover:bg-white/60 dark:hover:bg-white/[0.04] text-[#62677D] dark:text-[#A5A1BF]"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full ${dept.avatarColor} text-white flex items-center justify-center mx-auto mb-1`}
                        >
                          <IconComp className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[10px] font-semibold truncate block leading-tight">
                          {dept.deptName.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Department Natural-Language Inquiry & Grounded Answer */}
              <div className="p-5 space-y-4 text-xs sm:text-sm">
                
                {/* Active Department Role Context */}
                <div className="flex items-center justify-between pb-2 border-b border-[#E5E7F0] dark:border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${activeTab.avatarColor}`} />
                    <span className="font-bold text-[#171B2E] dark:text-white text-xs">
                      {activeTab.roleTitle} ({activeTab.deptName})
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#3984FF] dark:text-[#7EB5FF]">
                    {activeTab.badge}
                  </span>
                </div>

                {/* Team Member Question Bubble */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="max-w-[85%] bg-gradient-to-r from-[#635BFF] to-[#3984FF] text-white p-3 rounded-2xl rounded-tr-xs shadow-md text-xs sm:text-sm">
                    <p className="leading-relaxed font-normal">
                      &ldquo;{activeTab.question}&rdquo;
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#EAEBF0] dark:bg-[#1F1C36] flex items-center justify-center text-[#62677D] dark:text-[#A5A1BF] flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* Grounded Assistant Answer */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#3984FF]/15 text-[#3984FF] dark:text-[#7EB5FF] flex items-center justify-center flex-shrink-0 mt-1 border border-[#3984FF]/25">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="max-w-[88%] bg-[#F5F6FA] dark:bg-[#16122C] border border-[#E5E7F0] dark:border-[#28223D] text-[#171B2E] dark:text-[#F8F7FF] p-3.5 rounded-2xl rounded-tl-xs space-y-2 text-xs sm:text-sm shadow-sm">
                    <p className="leading-relaxed font-normal">
                      {activeTab.answer}
                    </p>

                    <div className="pt-2 border-t border-[#E5E7F0] dark:border-white/[0.08] flex items-center justify-between text-[10px] text-[#62677D] dark:text-[#A5A1BF]">
                      <span className="flex items-center gap-1 font-mono truncate max-w-[240px]">
                        <FileText className="w-3 h-3 text-[#3984FF]" />
                        {activeTab.sourceDoc}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#10B981] font-semibold">
                        <ShieldCheck className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Reassurance Strip */}
              <div className="px-5 py-2.5 border-t border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#130E26] flex items-center justify-between text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Users className="w-3.5 h-3.5 text-[#3984FF]" />
                  Employees find verified answers without interrupting teammates
                </span>
                <span className="font-mono text-[10px] text-emerald-500 font-semibold">
                  Zero Delays
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamAssistanceHero;
