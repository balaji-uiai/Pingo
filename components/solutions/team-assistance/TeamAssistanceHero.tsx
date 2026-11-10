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
  GitBranch,
  Building,
  UserCheck,
} from "lucide-react";
import { teamAssistanceData } from "@/data/teamAssistance";

interface TeamRoleScenario {
  id: string;
  roleName: string;
  department: string;
  avatarColor: string;
  question: string;
  knowledgeBase: string;
  sourceDoc: string;
  answer: string;
}

const teamRoleScenarios: TeamRoleScenario[] = [
  {
    id: "operations",
    roleName: "Operations Lead",
    department: "Internal Operations",
    avatarColor: "bg-[#635BFF]",
    question: "What is our company expense reimbursement policy for travel meals?",
    knowledgeBase: "Operations & HR Knowledge Base",
    sourceDoc: "Internal_Operations_Manual_2026.pdf (Section 4.2)",
    answer:
      "Meals during approved business travel are reimbursed up to $75/day with itemized receipts submitted within 14 business days via the finance portal.",
  },
  {
    id: "engineering",
    roleName: "Lead Developer",
    department: "Engineering & Infra",
    avatarColor: "bg-[#3984FF]",
    question: "What is the timeout threshold configured for our webhook retries?",
    knowledgeBase: "Engineering Architecture Base",
    sourceDoc: "Platform_Architecture_API_v3.md (Section 7.3)",
    answer:
      "Webhooks automatically retry up to 5 times using exponential backoff intervals with a hard timeout of 10 seconds per delivery attempt.",
  },
  {
    id: "sales",
    roleName: "Account Executive",
    department: "Sales & Client Success",
    avatarColor: "bg-[#20C5D8]",
    question: "What are the storage limits for the Professional plan compared to Enterprise?",
    knowledgeBase: "Product & Service Specs Base",
    sourceDoc: "Product_Catalog_Specifications_2026.pdf",
    answer:
      "The Professional plan includes 50GB of vector storage and 25 connected documents. The Enterprise plan includes unlimited storage and custom SLAs.",
  },
  {
    id: "new-hire",
    roleName: "New Team Member",
    department: "Recent Onboarding",
    avatarColor: "bg-emerald-500",
    question: "Where can I find our brand guidelines and vector logo files?",
    knowledgeBase: "Company Onboarding & Brand Center",
    sourceDoc: "Design_System_Brand_Asset_Guidelines_v4.pdf",
    answer:
      "Approved brand guidelines, typography standards, hex color palettes, and vector logo files are located in the Brand Center folder in Google Drive.",
  },
];

export const TeamAssistanceHero: React.FC = () => {
  const { hero } = teamAssistanceData;
  const [activeRole, setActiveRole] = useState<TeamRoleScenario>(
    teamRoleScenarios[0]
  );

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting in Pingo brand colors */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#635BFF]/10 dark:bg-[#635BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#3984FF]/10 dark:bg-[#3984FF]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
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
                        : "text-[#20C5D8]"
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

          {/* Right Column: Team Collaboration & Shared Knowledge Hub Visual */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            {/* Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3984FF]/15 via-[#635BFF]/20 to-[#20C5D8]/15 rounded-3xl filter blur-3xl transform scale-90 pointer-events-none" />

            {/* Main Visual Composition Container */}
            <div className="relative w-full max-w-lg rounded-2xl bg-white/95 dark:bg-[#100D1E]/95 border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden transition-all duration-300">
              
              {/* Header: Shared Team Knowledge Center */}
              <div className="px-5 py-3.5 border-b border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#15102A] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center shadow-sm">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#171B2E] dark:text-white leading-tight text-xs sm:text-sm">
                      Company Knowledge Hub
                    </h3>
                    <span className="text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                      Single source of truth for all departments
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                  Shared Access
                </span>
              </div>

              {/* Team Role Switcher Tabs */}
              <div className="p-3 bg-[#F5F6FA] dark:bg-[#16122C] border-b border-[#E5E7F0] dark:border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] font-semibold block mb-2 px-1">
                  Select Team Member Role:
                </span>
                <div className="grid grid-cols-4 gap-1.5">
                  {teamRoleScenarios.map((role) => {
                    const isSelected = activeRole.id === role.id;
                    return (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setActiveRole(role)}
                        className={`p-2 rounded-xl text-center transition-all duration-200 cursor-pointer border ${
                          isSelected
                            ? "bg-white dark:bg-[#1F193D] border-[#3984FF] shadow-sm text-[#171B2E] dark:text-white"
                            : "bg-transparent border-transparent hover:bg-white/60 dark:hover:bg-white/[0.04] text-[#62677D] dark:text-[#A5A1BF]"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full ${role.avatarColor} text-white flex items-center justify-center text-[10px] font-bold mx-auto mb-1`}
                        >
                          {role.roleName.charAt(0)}
                        </div>
                        <span className="text-[10px] font-semibold truncate block leading-tight">
                          {role.roleName.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Shared Inquiry & Response Display */}
              <div className="p-5 space-y-4 text-xs sm:text-sm">
                
                {/* Active Role Meta */}
                <div className="flex items-center justify-between pb-2 border-b border-[#E5E7F0] dark:border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${activeRole.avatarColor}`} />
                    <span className="font-bold text-[#171B2E] dark:text-white text-xs">
                      {activeRole.roleName} ({activeRole.department})
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#3984FF] dark:text-[#7EB5FF]">
                    {activeRole.knowledgeBase}
                  </span>
                </div>

                {/* Team Member Question Bubble */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="max-w-[85%] bg-gradient-to-r from-[#635BFF] to-[#3984FF] text-white p-3 rounded-2xl rounded-tr-xs shadow-md text-xs sm:text-sm">
                    <p className="leading-relaxed font-normal">
                      &ldquo;{activeRole.question}&rdquo;
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
                      {activeRole.answer}
                    </p>

                    <div className="pt-2 border-t border-[#E5E7F0] dark:border-white/[0.08] flex items-center justify-between text-[10px] text-[#62677D] dark:text-[#A5A1BF]">
                      <span className="flex items-center gap-1 font-mono truncate max-w-[240px]">
                        <FileText className="w-3 h-3 text-[#3984FF]" />
                        {activeRole.sourceDoc}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#10B981] font-semibold">
                        <ShieldCheck className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Reassurance Footer */}
              <div className="px-5 py-2.5 border-t border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#130E26] flex items-center justify-between text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Users className="w-3.5 h-3.5 text-[#3984FF]" />
                  All team members access the same up-to-date documentation
                </span>
                <span className="font-mono text-[10px] text-emerald-500 font-semibold">
                  Zero Misalignment
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

