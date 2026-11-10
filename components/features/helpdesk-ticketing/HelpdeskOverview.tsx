"use client";

import React from "react";
import {
  Ticket,
  ArrowRight,
  CheckCircle2,
  Inbox,
  SlidersHorizontal,
  Activity,
  Layers,
  Sparkles,
  ShieldCheck,
  User,
} from "lucide-react";
import { helpdeskTicketingData } from "@/data/helpdeskTicketing";

export const HelpdeskOverview: React.FC = () => {
  const { overview } = helpdeskTicketingData;

  return (
    <section
      id="overview"
      aria-label="Helpdesk and Ticketing Overview"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FAFBFE] dark:bg-[#0E1022] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#20C5D8]/6 dark:bg-[#20C5D8]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#20C5D8]" />
            <span>{overview.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {overview.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {overview.description}
          </p>
        </div>

        {/* Visual Transformation: Customer Request → Triage → Organized Ticket */}
        <div className="max-w-5xl mx-auto mb-16 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#15182C] border border-[#E2E6EF] dark:border-[#272B43] shadow-xl relative overflow-hidden">
          
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#635BFF] dark:text-[#A5A0FF]">
              Structured Ticket Lifecycle Flow
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#171B2E] dark:text-[#FFFFFF] mt-1">
              How Requests Become Managed Tickets
            </h3>
          </div>

          {/* 3 Step Visual Progression Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* Stage 1: Customer Request */}
            <div className="p-5 rounded-2xl bg-[#F8F9FD] dark:bg-[#1A1E35] border border-[#E5E9F3] dark:border-[#2C314E] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold font-mono text-[#635BFF] dark:text-[#A5A0FF] bg-[#635BFF]/10 px-2 py-0.5 rounded">
                    STAGE 01
                  </span>
                  <Inbox className="w-4 h-4 text-[#635BFF]" />
                </div>
                <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2">
                  Customer Request Ingest
                </h4>
                <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                  Captured through supported customer touchpoints with conversation transcripts and account tier details.
                </p>
              </div>

              {/* Mock incoming request snippet */}
              <div className="mt-4 p-3 rounded-lg bg-white dark:bg-[#14172B] border border-[#E2E6EF] dark:border-[#252945] text-[11px]">
                <div className="text-[#8F94A8] dark:text-[#7A809C] mb-1">Incoming Ingest</div>
                <div className="font-medium text-[#171B2E] dark:text-[#FFFFFF] truncate">
                  "Need assistance with SAML 2.0 cert"
                </div>
              </div>
            </div>

            {/* Stage 2: Triage & Assignment */}
            <div className="p-5 rounded-2xl bg-[#F8F9FD] dark:bg-[#1A1E35] border border-[#E5E9F3] dark:border-[#2C314E] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold font-mono text-[#3984FF] dark:text-[#7EB3FF] bg-[#3984FF]/10 px-2 py-0.5 rounded">
                    STAGE 02
                  </span>
                  <SlidersHorizontal className="w-4 h-4 text-[#3984FF]" />
                </div>
                <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2">
                  Triage & Assignment
                </h4>
                <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                  Assigned an urgency rating, ticket number, and routed to the appropriate subject matter owner.
                </p>
              </div>

              {/* Mock triage metadata snippet */}
              <div className="mt-4 p-3 rounded-lg bg-white dark:bg-[#14172B] border border-[#E2E6EF] dark:border-[#252945] text-[11px]">
                <div className="flex items-center justify-between text-[#8F94A8] dark:text-[#7A809C] mb-1">
                  <span>Routing Rule</span>
                  <span className="font-semibold text-rose-500">Urgent</span>
                </div>
                <div className="font-medium text-[#171B2E] dark:text-[#FFFFFF] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>Assigned: Elena Vance</span>
                </div>
              </div>
            </div>

            {/* Stage 3: Lifecycle Resolution */}
            <div className="p-5 rounded-2xl bg-[#F8F9FD] dark:bg-[#1A1E35] border border-[#E5E9F3] dark:border-[#2C314E] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold font-mono text-[#20C5D8] dark:text-[#4FE3F4] bg-[#20C5D8]/10 px-2 py-0.5 rounded">
                    STAGE 03
                  </span>
                  <Activity className="w-4 h-4 text-[#20C5D8]" />
                </div>
                <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2">
                  Organized Resolution
                </h4>
                <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                  Support agents collaborate via internal comments, update stages, and document the resolution audit trail.
                </p>
              </div>

              {/* Mock resolved record snippet */}
              <div className="mt-4 p-3 rounded-lg bg-white dark:bg-[#14172B] border border-[#E2E6EF] dark:border-[#252945] text-[11px]">
                <div className="flex items-center justify-between text-[#8F94A8] dark:text-[#7A809C] mb-1">
                  <span>Ticket #TK-8241</span>
                  <span className="font-semibold text-emerald-500">Resolved</span>
                </div>
                <div className="font-medium text-[#171B2E] dark:text-[#FFFFFF] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Verified & Documented</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Summary Bar */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#635BFF]/10 via-[#3984FF]/10 to-[#20C5D8]/10 border border-[#635BFF]/30 dark:border-[#635BFF]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#3984FF] flex items-center justify-center text-white flex-shrink-0">
                <Ticket className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#171B2E] dark:text-[#FFFFFF] block">
                  Single-Pane Support Workflow
                </span>
                <span className="text-[11px] text-[#62677D] dark:text-[#B5BAD0]">
                  Requests move cleanly from first notification through verified ticket resolution
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#1D213D] border border-[#E2E6EF] dark:border-[#2F3458] text-xs font-semibold text-[#10B981]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Full Team Traceability</span>
            </div>
          </div>

        </div>

        {/* 3 Overview Detail Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {overview.stages.map((stage) => {
            const isViolet = stage.color === "violet";
            const isBlue = stage.color === "blue";

            return (
              <div
                key={stage.step}
                className="group p-6 rounded-2xl bg-white dark:bg-[#15182C] border border-[#E2E6EF] dark:border-[#252945] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#8F94A8] dark:text-[#6A708A]">
                    PHASE {stage.step}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      isViolet
                        ? "bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] border-[#635BFF]/25"
                        : isBlue
                        ? "bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB3FF] border-[#3984FF]/25"
                        : "bg-[#20C5D8]/10 text-[#0E8A99] dark:text-[#4FE3F4] border-[#20C5D8]/25"
                    }`}
                  >
                    {stage.tag}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 group-hover:text-[#635BFF] dark:group-hover:text-[#A5A0FF] transition-colors">
                  {stage.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HelpdeskOverview;

