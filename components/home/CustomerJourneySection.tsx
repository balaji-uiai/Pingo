"use client";

import React, { useState, useEffect } from "react";
import { customerJourneyData } from "@/data/customerJourney";
import CustomerJourneyPreview from "./CustomerJourneyPreview";
import {
  Globe,
  MessageSquare,
  Bot,
  UserCheck,
  Ticket,
  Star,
  GitBranch,
  ChevronRight,
  ArrowRight,
  LucideIcon,
  CheckCircle2,
} from "lucide-react";

const stageIcons: Record<string, LucideIcon> = {
  "01": Globe,
  "02": MessageSquare,
  "03": Bot,
  "04": UserCheck,
  "05": Ticket,
  "06": Star,
};

export const CustomerJourneySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [activePath, setActivePath] = useState<"ai" | "human" | "ticket">("ai");
  const [isPaused, setIsPaused] = useState(false);
  const data = customerJourneyData;

  // Path presets
  const paths: Record<"ai" | "human" | "ticket", number[]> = {
    ai: [0, 1, 2, 5],
    human: [0, 1, 2, 3, 5],
    ticket: [0, 1, 2, 3, 4, 5],
  };

  // Auto-advance through the current active path
  useEffect(() => {
    if (isPaused) return;
    const currentSteps = paths[activePath];
    const interval = setInterval(() => {
      setActiveStage((prev) => {
        const currentIndex = currentSteps.indexOf(prev);
        if (currentIndex === -1 || currentIndex === currentSteps.length - 1) {
          return currentSteps[0];
        }
        return currentSteps[currentIndex + 1];
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, activePath]);

  // Handle path switcher click
  const handlePathChange = (path: "ai" | "human" | "ticket") => {
    setActivePath(path);
    setActiveStage(paths[path][0]);
  };

  return (
    <section
      id="customer-journey"
      aria-label="Pingo Customer Journey"
      className="relative py-20 sm:py-24 lg:py-32 z-10 overflow-hidden bg-[#100D1D]/70 border-b border-white/[0.06] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#782BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[650px] h-[650px] bg-[#4C16B8]/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* ========================================================= */}
        {/* WORKFLOW 02 – CUSTOMER JOURNEY (Header & Path Switcher)    */}
        {/* ========================================================= */}
        <div
          className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-[#141126]/75 to-[#080711]/90 border border-white/[0.08] backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Header row with Title and Branch Path Selector */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12 pb-6 border-b border-white/[0.06]">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold tracking-wider text-[#A855F7] uppercase">
                  {data.workflowLabel}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                <span className="text-xs text-[#D5D0E5]/60 font-mono">
                  Adaptive Resolution Paths
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {data.heading}
              </h3>

              <p className="text-sm sm:text-base text-[#D5D0E5] leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Branching Path Selector Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {[
                { id: "ai", label: "Path A: AI Resolution", icon: Bot },
                { id: "human", label: "Path B: Human Handoff", icon: UserCheck },
                { id: "ticket", label: "Path C: Ticket Escalation", icon: Ticket },
              ].map((p) => {
                const isSelected = activePath === p.id;
                const PIcon = p.icon;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() =>
                      handlePathChange(p.id as "ai" | "human" | "ticket")
                    }
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#782BFF] text-white shadow-[0_0_20px_rgba(120,43,255,0.5)] border border-violet-400/40"
                        : "bg-white/[0.04] text-[#D5D0E5] border border-white/10 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <PIcon className="w-3.5 h-3.5" />
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Decision Node Flow Map Indicator (Desktop) */}
          <div className="hidden lg:flex items-center justify-between px-6 py-3.5 mb-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-xs font-mono text-[#D5D0E5]/80">
            <span className="flex items-center gap-2 text-white">
              <span className="w-2 h-2 rounded-full bg-[#B5FF45]" />
              Visitor Arrives
            </span>
            <span className="text-white/20">➔</span>
            <span>Starts Chat</span>
            <span className="text-white/20">➔</span>
            <span className="text-purple-300">AI Knowledge Query</span>
            <span className="text-white/20">➔</span>
            <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
              Can AI Resolve?
            </span>
            <span className="text-white/20">➔</span>
            <span
              className={
                activePath === "ai"
                  ? "text-[#B5FF45] font-bold"
                  : "text-white/40"
              }
            >
              [Yes: Instant Feedback]
            </span>
            <span className="text-white/20">/</span>
            <span
              className={
                activePath === "human" || activePath === "ticket"
                  ? "text-violet-300 font-bold"
                  : "text-white/40"
              }
            >
              [No: Human Transfer]
            </span>
            <span className="text-white/20">➔</span>
            <span
              className={
                activePath === "ticket"
                  ? "text-[#B5FF45] font-bold"
                  : "text-white/40"
              }
            >
              [Unresolved: Ticket]
            </span>
          </div>

          {/* Split Layout: Stages list on left, Preview on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 6 Stages List */}
            <div className="lg:col-span-6 space-y-3 relative">
              {/* Connecting progress line on desktop */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute left-6 top-6 bottom-6 w-[2px] bg-white/[0.06] pointer-events-none"
              >
                <div
                  className="w-full bg-gradient-to-b from-[#A855F7] to-[#B5FF45] transition-all duration-500"
                  style={{
                    height: `${((activeStage + 1) / data.stages.length) * 100}%`,
                  }}
                />
              </div>

              {data.stages.map((stage, idx) => {
                const isActive = activeStage === idx;
                const isInActivePath = paths[activePath].includes(idx);
                const Icon = stageIcons[stage.stepNumber] || Globe;

                return (
                  <div
                    key={stage.id}
                    onClick={() => setActiveStage(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStage(idx);
                      }
                    }}
                    className={`group relative flex items-start gap-4 p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 text-left ${
                      isActive
                        ? "bg-[#181432] border border-violet-500/40 shadow-[0_10px_30px_rgba(120,43,255,0.2)] translate-x-1"
                        : isInActivePath
                        ? "bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/10"
                        : "bg-white/[0.01] border border-white/[0.02] opacity-50 hover:opacity-80"
                    }`}
                  >
                    {/* Stage Icon Node */}
                    <div
                      className={`relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-[#782BFF] to-[#4C16B8] text-white shadow-[0_0_15px_rgba(120,43,255,0.6)]"
                          : "bg-white/[0.05] text-[#D5D0E5] border border-white/10 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Stage Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className={`text-[11px] font-mono font-bold tracking-wider uppercase ${
                            isActive ? "text-[#B5FF45]" : "text-[#D5D0E5]/60"
                          }`}
                        >
                          Step {stage.stepNumber}
                        </span>
                        {stage.isConditional && (
                          <span className="px-2 py-0.2 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] font-mono">
                            Conditional
                          </span>
                        )}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B5FF45] animate-ping" />
                        )}
                      </div>

                      <h4
                        className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${
                          isActive
                            ? "text-white"
                            : "text-[#D5D0E5] group-hover:text-white"
                        }`}
                      >
                        {stage.title}
                      </h4>

                      <p className="text-xs text-[#D5D0E5]/80 mt-1 leading-relaxed line-clamp-2">
                        {stage.description}
                      </p>
                    </div>

                    {/* Chevron Indicator */}
                    <div className="self-center">
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isActive
                            ? "text-[#B5FF45] translate-x-0.5"
                            : "text-white/20 group-hover:text-white/50"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Miniature HTML/CSS Stage Preview */}
            <div className="lg:col-span-6">
              <CustomerJourneyPreview
                activeStage={activeStage}
                activePath={activePath}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourneySection;
