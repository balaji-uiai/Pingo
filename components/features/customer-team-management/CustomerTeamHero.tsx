"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  UserCheck,
  Building2,
  CheckCircle2,
  Clock,
  Activity,
  ShieldCheck,
  CheckSquare,
  Sparkles,
} from "lucide-react";
import { customerTeamManagementData } from "@/data/customerTeamManagement";

export const CustomerTeamHero: React.FC = () => {
  const { hero } = customerTeamManagementData;

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
              <Users className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
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
                Customer Profiles
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#635BFF] flex-shrink-0" />
                Team Assignment
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3984FF] flex-shrink-0" />
                Activity Timeline
              </span>
            </div>
          </div>

          {/* Right Column: Connected Workspace Interface Preview */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#635BFF]/15 via-[#3984FF]/15 to-[#20C5D8]/15 rounded-3xl blur-2xl opacity-60 dark:opacity-80 -z-10" />

            <div className="rounded-3xl border border-[#E2E6EF] dark:border-[#272B43] bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FE] dark:from-[#15182C] dark:to-[#0F1122] shadow-2xl p-5 sm:p-6 lg:p-7 relative overflow-hidden space-y-4">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8ECF4] dark:border-[#242842]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#635BFF] to-[#20C5D8] flex items-center justify-center text-white shadow-xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      Connected Team Workspace
                    </h3>
                    <span className="text-[11px] text-[#8F94A8] dark:text-[#7A809C]">
                      Customer Records & Team Operations
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>3 Active Agents</span>
                </div>
              </div>

              {/* Dual Panel Grid: Customer Profile Card + Team Directory Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Panel 1: Customer Profile Snapshot */}
                <div className="p-4 rounded-2xl bg-[#F8F9FD] dark:bg-[#1A1E35] border border-[#E5E9F3] dark:border-[#2C314E] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold font-mono text-[#635BFF] dark:text-[#A5A0FF] bg-[#635BFF]/10 px-2 py-0.5 rounded">
                        CUSTOMER PROFILE
                      </span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        Enterprise
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center font-bold text-xs">
                        MS
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                          Marcus Sterling
                        </h4>
                        <span className="text-[11px] text-[#62677D] dark:text-[#B5BAD0] flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-[#8F94A8]" />
                          Apex Global Logistics
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-[11px] pt-2 border-t border-[#E8ECF5] dark:border-[#252945]">
                      <div className="flex items-center justify-between text-[#62677D] dark:text-[#B5BAD0]">
                        <span>Active Discussions:</span>
                        <span className="font-semibold text-[#171B2E] dark:text-[#FFFFFF]">2 Threads</span>
                      </div>
                      <div className="flex items-center justify-between text-[#62677D] dark:text-[#B5BAD0]">
                        <span>Last Interaction:</span>
                        <span className="font-semibold text-[#20C5D8]">4m ago</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 text-[10px] text-[#8F94A8] dark:text-[#7A809C] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                    <span>Verified Context Linked</span>
                  </div>
                </div>

                {/* Panel 2: Team Members Card */}
                <div className="p-4 rounded-2xl bg-[#F8F9FD] dark:bg-[#1A1E35] border border-[#E5E9F3] dark:border-[#2C314E] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold font-mono text-[#3984FF] dark:text-[#7EB3FF] bg-[#3984FF]/10 px-2 py-0.5 rounded">
                        TEAM DIRECTORY
                      </span>
                      <span className="text-[10px] text-[#8F94A8] dark:text-[#7A809C]">
                        3 Online
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {hero.sampleTeam.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#14172B] border border-[#E2E6EF] dark:border-[#252945] text-[11px]"
                        >
                          <div className="flex items-center gap-2">
                            <div className="relative">
                              <div className="w-6 h-6 rounded-full bg-[#E5E8F2] dark:bg-[#252A47] text-[#464B63] dark:text-[#C5CAF0] flex items-center justify-center font-bold text-[10px]">
                                {member.initials}
                              </div>
                              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-emerald-500 ring-1 ring-white dark:ring-[#14172B]" />
                            </div>
                            <div>
                              <div className="font-semibold text-[#171B2E] dark:text-[#FFFFFF]">
                                {member.name}
                              </div>
                              <div className="text-[10px] text-[#8F94A8] dark:text-[#6A708A]">
                                {member.role}
                              </div>
                            </div>
                          </div>

                          <span className="text-[10px] font-medium text-[#635BFF] dark:text-[#A5A0FF] bg-[#635BFF]/10 px-1.5 py-0.5 rounded">
                            {member.assignedTasks} tasks
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Panel 3: Activity Tracking Stream */}
              <div className="p-4 rounded-2xl bg-[#F8F9FD] dark:bg-[#1A1E35] border border-[#E5E9F3] dark:border-[#2C314E]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-[#20C5D8]" />
                    <span className="text-xs font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      Recent Team Activity
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8F94A8] dark:text-[#7A809C]">
                    Live Updates
                  </span>
                </div>

                <div className="space-y-2">
                  {hero.sampleActivities.map((act) => (
                    <div
                      key={act.id}
                      className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-white dark:bg-[#14172B] border border-[#E2E6EF] dark:border-[#252945]"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
                        <span className="font-semibold text-[#171B2E] dark:text-[#FFFFFF]">
                          {act.actor}
                        </span>
                        <span className="text-[#62677D] dark:text-[#B5BAD0] truncate">
                          {act.action} <strong className="text-[#171B2E] dark:text-[#FFFFFF]">{act.target}</strong>
                        </span>
                      </div>
                      <span className="text-[10px] text-[#8F94A8] dark:text-[#6A708A] flex-shrink-0">
                        {act.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Workspace Status Note */}
              <div className="pt-2 flex items-center justify-between text-xs text-[#8F94A8] dark:text-[#7A809C]">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-3.5 h-3.5 text-[#20C5D8]" />
                  <span>Clear Task Delegation</span>
                </div>
                <span className="text-[11px] font-semibold text-[#635BFF] dark:text-[#A5A0FF]">
                  Seamless Coordination
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomerTeamHero;

