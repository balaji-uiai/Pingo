"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Ticket,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  MoreVertical,
  ShieldCheck,
  User,
  SlidersHorizontal,
} from "lucide-react";
import { helpdeskTicketingData } from "@/data/helpdeskTicketing";

export const HelpdeskHero: React.FC = () => {
  const { hero } = helpdeskTicketingData;

  const priorityBadge = (priority: string) => {
    switch (priority) {
      case "Urgent":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            Urgent
          </span>
        );
      case "High":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25">
            High
          </span>
        );
      case "Medium":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB3FF] border border-[#3984FF]/25">
            Medium
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/25">
            Low
          </span>
        );
    }
  };

  const statusBadge = (status: string) => {
    switch (status) {
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] border border-[#635BFF]/25">
            <Clock className="w-3 h-3" />
            In Progress
          </span>
        );
      case "Under Review":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#3984FF]/10 text-[#256BD9] dark:text-[#7EB3FF] border border-[#3984FF]/25">
            <AlertCircle className="w-3 h-3" />
            Under Review
          </span>
        );
      case "Resolved":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
            <CheckCircle2 className="w-3 h-3" />
            Resolved
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#20C5D8]/10 text-[#0E8A99] dark:text-[#4FE3F4] border border-[#20C5D8]/25">
            Open
          </span>
        );
    }
  };

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
              <Ticket className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
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
                Clear Ownership
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#635BFF] flex-shrink-0" />
                Prioritized Queues
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3984FF] flex-shrink-0" />
                Lifecycle Audit
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Ticket-Management Dashboard Preview */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#635BFF]/15 via-[#3984FF]/15 to-[#20C5D8]/15 rounded-3xl blur-2xl opacity-60 dark:opacity-80 -z-10" />

            <div className="rounded-3xl border border-[#E2E6EF] dark:border-[#272B43] bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FE] dark:from-[#15182C] dark:to-[#0F1122] shadow-2xl p-5 sm:p-6 lg:p-7 relative overflow-hidden">
              
              {/* Dashboard Chrome Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#E8ECF4] dark:border-[#242842] mb-5">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#635BFF] to-[#3984FF] flex items-center justify-center text-white shadow-xs">
                      <Ticket className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                        Support Queue Dashboard
                      </h3>
                      <span className="text-[11px] text-[#8F94A8] dark:text-[#7A809C]">
                        Active Workspace · 3 Assigned Tickets
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#8F94A8] dark:text-[#6A708A]" />
                    <input
                      type="text"
                      readOnly
                      placeholder="Filter tickets..."
                      className="text-xs pl-8 pr-3 py-1.5 rounded-lg bg-[#F3F5FA] dark:bg-[#1A1E35] border border-[#E2E6EF] dark:border-[#2B304D] text-[#171B2E] dark:text-[#FFFFFF] w-36 sm:w-44 focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    className="p-1.5 rounded-lg border border-[#E2E6EF] dark:border-[#2B304D] bg-[#F8F9FE] dark:bg-[#1A1E35] text-[#62677D] dark:text-[#A5AABF]"
                    aria-label="Filter queue"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-2 pb-4 overflow-x-auto no-scrollbar text-xs">
                <span className="px-3 py-1 rounded-full font-semibold bg-[#635BFF] text-white whitespace-nowrap cursor-pointer shadow-xs">
                  All Active (18)
                </span>
                <span className="px-3 py-1 rounded-full font-medium text-[#62677D] dark:text-[#A5AABF] hover:bg-[#F0F2F9] dark:hover:bg-[#1D213B] whitespace-nowrap cursor-pointer">
                  Urgent (3)
                </span>
                <span className="px-3 py-1 rounded-full font-medium text-[#62677D] dark:text-[#A5AABF] hover:bg-[#F0F2F9] dark:hover:bg-[#1D213B] whitespace-nowrap cursor-pointer">
                  In Progress (9)
                </span>
                <span className="px-3 py-1 rounded-full font-medium text-[#62677D] dark:text-[#A5AABF] hover:bg-[#F0F2F9] dark:hover:bg-[#1D213B] whitespace-nowrap cursor-pointer">
                  Resolved (24)
                </span>
              </div>

              {/* Interactive Ticket Rows */}
              <div className="space-y-3">
                {hero.sampleTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="group p-4 rounded-xl border border-[#E5E8F2] dark:border-[#242842] bg-[#FFFFFF] dark:bg-[#16182C] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/60 hover:shadow-md transition-all duration-200"
                  >
                    {/* Top Row: Ticket ID, Priority, Status */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#635BFF] dark:text-[#A5A0FF] bg-[#635BFF]/10 px-2 py-0.5 rounded">
                          {ticket.ticketNumber}
                        </span>
                        <span className="text-[11px] text-[#8F94A8] dark:text-[#6A708A] hidden sm:inline">
                          {ticket.tag}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {priorityBadge(ticket.priority)}
                        {statusBadge(ticket.status)}
                      </div>
                    </div>

                    {/* Middle: Subject */}
                    <h4 className="text-xs sm:text-sm font-semibold text-[#171B2E] dark:text-[#FFFFFF] mb-3 group-hover:text-[#635BFF] dark:group-hover:text-[#A5A0FF] transition-colors leading-snug">
                      {ticket.subject}
                    </h4>

                    {/* Bottom: Assignee & Updated At */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-[#EEF1F7] dark:border-[#20243C] text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center text-[9px] font-bold">
                          {ticket.assignee.avatarInitials}
                        </div>
                        <span className="font-medium text-[#464B63] dark:text-[#B5BAD0]">
                          {ticket.assignee.name}
                        </span>
                        <span className="text-[#8F94A8] dark:text-[#6A708A] hidden md:inline">
                          · {ticket.assignee.role}
                        </span>
                      </div>

                      <span className="text-[#8F94A8] dark:text-[#6A708A]">
                        Updated {ticket.updatedAt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Dashboard Metrics Bar */}
              <div className="mt-5 pt-3.5 border-t border-[#E8ECF4] dark:border-[#242842] flex flex-wrap items-center justify-between gap-3 text-xs text-[#8F94A8] dark:text-[#7A809C]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="font-medium text-[#464B63] dark:text-[#A5AABF]">
                    SLA Resolution Rate: 98.4%
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#635BFF] dark:text-[#A5A0FF]">
                  100% Request Traceability
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HelpdeskHero;

