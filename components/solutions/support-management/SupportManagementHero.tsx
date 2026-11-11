"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2,
  FileText,
  ShieldCheck,
  User,
  Clock,
  Zap,
  TrendingDown,
  Activity,
  Layers,
} from "lucide-react";
import { supportManagementData, SupportTicketQueueItem } from "@/data/supportManagement";

export const SupportManagementHero: React.FC = () => {
  const { hero } = supportManagementData;
  const [activeTicket, setActiveTicket] = useState<SupportTicketQueueItem>(
    hero.ticketQueue[0]
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
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

            {/* Highlights */}
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

          {/* Right Column: Support Operations & Request Queue Dashboard Mockup */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center w-full">
            {/* Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/15 via-[#3984FF]/20 to-[#20C5D8]/15 rounded-3xl filter blur-3xl transform scale-90 pointer-events-none" />

            {/* Dashboard Container */}
            <div className="relative w-full max-w-lg rounded-2xl bg-white/95 dark:bg-[#100D1E]/95 border border-[#E5E7F0] dark:border-[#28223D] shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden transition-all duration-300">
              
              {/* Dashboard Header Bar */}
              <div className="px-5 py-3.5 border-b border-[#E5E7F0] dark:border-white/[0.08] bg-[#FAFAFE] dark:bg-[#15102A] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white flex items-center justify-center shadow-sm">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#171B2E] dark:text-white leading-tight text-xs sm:text-sm">
                      Support Operations Console
                    </h3>
                    <span className="text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                      Request Queue & Knowledge Triage
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-semibold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Queue Live</span>
                </div>
              </div>

              {/* Operational Key Metrics Strip */}
              <div className="grid grid-cols-3 divide-x divide-[#E5E7F0] dark:divide-white/[0.06] bg-[#F5F6FA] dark:bg-[#16122C] border-b border-[#E5E7F0] dark:border-white/[0.06] py-2 px-3 text-center">
                {hero.operationsMetrics.map((metric, i) => (
                  <div key={metric.label} className="px-1">
                    <span className="text-[10px] text-[#62677D] dark:text-[#A5A1BF] block truncate">
                      {metric.label}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold font-mono ${
                        i === 0
                          ? "text-[#635BFF] dark:text-[#A5A0FF]"
                          : i === 1
                          ? "text-[#3984FF] dark:text-[#7EB5FF]"
                          : "text-emerald-500"
                      }`}
                    >
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Ticket Queue List (3 Tickets) */}
              <div className="p-3 bg-white dark:bg-[#120E24] border-b border-[#E5E7F0] dark:border-white/[0.06] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#62677D] dark:text-[#A5A1BF] font-semibold block px-1">
                  Active Request Queue:
                </span>
                <div className="space-y-1.5">
                  {hero.ticketQueue.map((ticket) => {
                    const isSelected = activeTicket.id === ticket.id;

                    return (
                      <button
                        key={ticket.id}
                        type="button"
                        onClick={() => setActiveTicket(ticket)}
                        className={`w-full text-left p-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 ${
                          isSelected
                            ? "bg-[#F0EDFF] dark:bg-[#1E193C] border-[#635BFF]/50 shadow-xs"
                            : "bg-[#FAFAFE] dark:bg-[#16122C] border-transparent hover:border-[#E5E7F0] dark:hover:border-white/[0.08]"
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[11px] font-mono font-bold text-[#171B2E] dark:text-white">
                              {ticket.ticketNumber}
                            </span>
                            <span className="text-[10px] text-[#62677D] dark:text-[#A5A1BF] truncate">
                              • {ticket.customerName.split(" ")[0]}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#62677D] dark:text-[#B5BAD0] truncate font-medium">
                            {ticket.category}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold ${ticket.statusColor}`}
                          >
                            {ticket.status}
                          </span>
                          <span className="text-[10px] text-[#62677D] dark:text-[#A5A1BF] font-mono">
                            {ticket.timeAgo}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Ticket Triage & Grounded Resolution Panel */}
              <div className="p-4 bg-[#FAFAFE] dark:bg-[#15102A] space-y-3 text-xs">
                
                {/* Customer Question Card */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#100D1E] border border-[#E5E7F0] dark:border-white/[0.08] space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                    <span className="font-semibold text-[#171B2E] dark:text-white flex items-center gap-1">
                      <User className="w-3 h-3 text-[#635BFF]" />
                      Customer Issue:
                    </span>
                    <span className="font-mono text-[10px]">{activeTicket.category}</span>
                  </div>
                  <p className="text-xs text-[#171B2E] dark:text-[#E2E0F4] font-medium leading-relaxed">
                    &ldquo;{activeTicket.customerQuestion}&rdquo;
                  </p>
                </div>

                {/* Grounded Knowledge Citation */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-[#635BFF]/5 to-[#3984FF]/5 dark:from-[#635BFF]/10 dark:to-[#3984FF]/10 border border-[#635BFF]/25 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#635BFF] dark:text-[#A5A0FF]">
                    <span className="flex items-center gap-1 font-bold">
                      <FileText className="w-3 h-3 text-[#3984FF]" />
                      Knowledge Source Matched:
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      98% Match
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-[#171B2E] dark:text-[#FFFFFF] truncate">
                    {activeTicket.matchedSource}
                  </p>
                  <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-snug">
                    {activeTicket.resolutionSummary}
                  </p>
                </div>

                {/* Agent Assignment Footer */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    Assigned: {activeTicket.agentName}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-[#635BFF] dark:text-[#A5A0FF]">
                    Pingo Assisted
                  </span>
                </div>

              </div>

              {/* Bottom Reassurance Footer */}
              <div className="px-5 py-2.5 border-t border-[#E5E7F0] dark:border-white/[0.08] bg-white dark:bg-[#100D1E] flex items-center justify-between text-[11px] text-[#62677D] dark:text-[#A5A1BF]">
                <span className="flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#635BFF]" />
                  Operational clarity for support leadership & frontline staff
                </span>
                <span className="font-mono text-[10px] text-emerald-500 font-semibold">
                  Zero Hold Time
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupportManagementHero;
