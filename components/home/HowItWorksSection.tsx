"use client";

import React, { useState, useEffect } from "react";
import { howItWorksSetupData } from "@/data/howItWorks";
import SetupWorkflowPreview from "./SetupWorkflowPreview";
import {
  Globe,
  Database,
  Bot,
  Users,
  Palette,
  Rocket,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

const stepIcons: Record<string, LucideIcon> = {
  "01": Globe,
  "02": Database,
  "03": Bot,
  "04": Users,
  "05": Palette,
  "06": Rocket,
};

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const data = howItWorksSetupData;

  // Auto-advance sequentially every 4.5 seconds unless hovered/interacting
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % data.steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, data.steps.length]);

  return (
    <section
      id="how-it-works"
      aria-label="How Pingo Works"
      className="relative py-20 sm:py-24 lg:py-32 z-10 overflow-hidden bg-[#080711] border-y border-white/[0.06] transition-colors duration-200"
    >
      {/* Background ambient radial gradients matching Pingo dark palette */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#782BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[650px] h-[650px] bg-[#4C16B8]/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* ========================================================= */}
        {/* 1. MASTER SECTION INTRODUCTION                             */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          {/* Section Label: 02 / HOW IT WORKS */}
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{data.sectionLabel}</span>
            </span>
          </div>

          {/* Master Heading: From Setup to Smarter Conversations. */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            From Setup to{" "}
            <span className="bg-gradient-to-r from-[#A855F7] via-[#B57CFF] to-[#782BFF] bg-clip-text text-transparent">
              Smarter Conversations.
            </span>
          </h2>

          {/* Master Description */}
          <p className="text-base sm:text-lg text-[#D5D0E5] leading-relaxed max-w-2xl mx-auto font-normal">
            {data.description}
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. WORKFLOW 01 – SETUP (Tawk.to Complete Control Style)     */}
        {/* ========================================================= */}
        <div
          className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-[#141126]/75 to-[#100D1D]/90 border border-white/[0.08] backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Workflow Header */}
          <div className="max-w-2xl mb-10 sm:mb-12 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#B5FF45] uppercase">
                {data.workflowLabel}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B5FF45]" />
              <span className="text-xs text-[#D5D0E5]/60 font-mono">
                Interactive Deployment Guide
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {data.workflowHeading}
            </h3>

            <p className="text-sm sm:text-base text-[#D5D0E5] leading-relaxed">
              {data.workflowDescription}
            </p>
          </div>

          {/* Split Interactive Layout: Steps list on left, Miniature preview on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 6 Sequential Steps List */}
            <div className="lg:col-span-6 space-y-3 relative">
              {/* Connecting progress line on desktop */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute left-6 top-6 bottom-6 w-[2px] bg-white/[0.06] pointer-events-none"
              >
                <div
                  className="w-full bg-gradient-to-b from-[#782BFF] to-[#B5FF45] transition-all duration-500"
                  style={{
                    height: `${((activeStep + 1) / data.steps.length) * 100}%`,
                  }}
                />
              </div>

              {data.steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const Icon = stepIcons[step.stepNumber] || Globe;

                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStep(idx);
                      }
                    }}
                    className={`group relative flex items-start gap-4 p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 text-left ${
                      isActive
                        ? "bg-[#181432] border border-violet-500/40 shadow-[0_10px_30px_rgba(120,43,255,0.2)] translate-x-1"
                        : "bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/10"
                    }`}
                  >
                    {/* Step Icon / Number Node */}
                    <div
                      className={`relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-[#782BFF] to-[#4C16B8] text-white shadow-[0_0_15px_rgba(120,43,255,0.6)]"
                          : "bg-white/[0.05] text-[#D5D0E5] border border-white/10 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Step Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className={`text-[11px] font-mono font-bold tracking-wider uppercase ${
                            isActive ? "text-[#B5FF45]" : "text-[#D5D0E5]/60"
                          }`}
                        >
                          Step {step.stepNumber}
                        </span>
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
                        {step.title}
                      </h4>

                      <p className="text-xs text-[#D5D0E5]/80 mt-1 leading-relaxed line-clamp-2">
                        {step.description}
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

            {/* Right Column: Miniature HTML/CSS Dashboard Preview */}
            <div className="lg:col-span-6">
              <SetupWorkflowPreview activeStep={activeStep} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
