"use client";

import React, { useState, useEffect } from "react";
import { productFeaturesData } from "@/data/productFeatures";
import ProductFeaturePreview from "./ProductFeaturePreview";
import {
  Bot,
  Database,
  MessagesSquare,
  Ticket,
  Users,
  BarChart3,
  Layers,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Database,
  MessagesSquare,
  Ticket,
  Users,
  BarChart3,
  Layers,
  ShieldCheck,
};

export const ProductFeatures: React.FC = () => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const data = productFeaturesData;
  const modules = data.modules;
  const currentModule = modules[activeModuleIndex];
  const CurrentIcon = iconMap[currentModule.iconName] || Bot;

  const handlePrev = () => {
    setActiveModuleIndex((prev) => (prev === 0 ? modules.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveModuleIndex((prev) => (prev === modules.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modules.length]);

  return (
    <section
      id="product-features"
      aria-label="Pingo Product Features"
      className="relative py-20 sm:py-24 lg:py-32 z-10 bg-[#080711] border-b border-white/[0.06] transition-colors duration-200"
    >
      {/* Background ambient radial glow accents */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#782BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[650px] h-[650px] bg-[#4C16B8]/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* ========================================================= */}
        {/* 1. SECTION INTRO (TAWK.TO STYLE)                          */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{data.sectionLabel}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {data.headingPart1}{" "}
            <span className="bg-gradient-to-r from-[#A855F7] via-[#B57CFF] to-[#782BFF] bg-clip-text text-transparent">
              {data.headingPart2}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#D5D0E5] leading-relaxed max-w-2xl mx-auto font-normal">
            {data.description}
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. INTERACTIVE MODULE SELECTOR TABS                       */}
        {/* ========================================================= */}
        <div className="mb-10 sm:mb-12 flex items-center justify-center">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto p-1.5 rounded-2xl bg-[#141126]/80 border border-white/[0.08] backdrop-blur-xl max-w-full scrollbar-none shadow-lg">
            {modules.map((mod, idx) => {
              const isSelected = activeModuleIndex === idx;
              const MIcon = iconMap[mod.iconName] || Bot;

              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveModuleIndex(idx)}
                  className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-[#782BFF] text-white shadow-[0_0_15px_rgba(120,43,255,0.6)] border border-violet-400/40 font-semibold"
                      : "bg-transparent text-[#D5D0E5]/75 hover:text-white hover:bg-white/[0.05] border border-transparent"
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <MIcon className={`w-3.5 h-3.5 ${isSelected ? "text-[#B5FF45]" : "text-[#A855F7]"}`} />
                  <span className="font-mono text-xs opacity-70">
                    {mod.moduleNumber}.
                  </span>
                  <span>{mod.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. SHOWCASE CONTAINER WITH PREV/NEXT ARROWS               */}
        {/* ========================================================= */}
        <div className="relative">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous module"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#141126]/90 border border-white/10 hover:border-[#782BFF]/50 text-[#D5D0E5] hover:text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next module"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#141126]/90 border border-white/10 hover:border-[#782BFF]/50 text-[#D5D0E5] hover:text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Active Module Card & Dummy Live Preview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-[#141126]/85 to-[#080711]/95 border border-white/[0.08] backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
            {/* Left Column: Active Module Information */}
            <div className="lg:col-span-5 space-y-5">
              {/* Module Header Row */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#782BFF] to-[#4C16B8] border border-violet-400/30 flex items-center justify-center text-white shadow-[0_0_15px_rgba(120,43,255,0.4)]">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#B5FF45]">
                      MODULE {currentModule.moduleNumber}
                    </span>
                    {currentModule.isPrimary && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#B5FF45]/10 border border-[#B5FF45]/30 text-[#B5FF45] text-[10px] font-mono font-semibold uppercase tracking-wider">
                        <Sparkles className="w-2.5 h-2.5" />
                        Primary
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#D5D0E5]/60 font-mono">
                    Pingo Core Platform
                  </span>
                </div>
              </div>

              {/* Module Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                {currentModule.title}
              </h3>

              {/* Short Descriptive Headline */}
              <p className="text-sm sm:text-base font-semibold text-[#A855F7] leading-snug">
                {currentModule.headline}
              </p>

              {/* Feature Explanation */}
              <p className="text-sm sm:text-base text-[#D5D0E5] leading-relaxed font-normal">
                {currentModule.description}
              </p>

              {/* Feature Chips */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {currentModule.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/[0.04] text-[#D5D0E5]/80 border border-white/[0.06]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlighted Enterprise AI Workflows Panel (AI Automation) */}
              {currentModule.enterpriseHighlight && (
                <div className="mt-5 p-4 rounded-xl bg-gradient-to-br from-[#782BFF]/15 via-[#4C16B8]/10 to-[#100D1D]/60 border border-[#782BFF]/30 shadow-inner">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B5FF45] shadow-[0_0_6px_#B5FF45]" />
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-[#B5FF45] uppercase">
                      {currentModule.enterpriseHighlight.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D5D0E5] leading-relaxed">
                    {currentModule.enterpriseHighlight.description}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Dummy Live Preview Card */}
            <div className="lg:col-span-7 relative">
              {/* Radial ambient glow behind preview */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 rounded-[30px]"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 40%, rgba(120,43,255,0.18), transparent 65%)",
                  filter: "blur(14px)",
                }}
              />
              <ProductFeaturePreview activeModuleIndex={activeModuleIndex} />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. CAROUSEL DOT / PILL INDICATORS (TAWK.TO STYLE)         */}
        {/* ========================================================= */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {modules.map((_, idx) => {
            const isActive = activeModuleIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveModuleIndex(idx)}
                aria-label={`Go to module ${idx + 1}`}
                aria-current={isActive}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-7 bg-[#B5FF45] shadow-[0_0_8px_#B5FF45]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>

        {/* Bottom editorial tagline (like tawk.to's bottom caption) */}
        <p className="mx-auto mt-6 max-w-lg text-center text-xs sm:text-sm leading-relaxed text-[#D5D0E5]/60 font-mono">
          Every module connected. One intelligent AI-powered platform for modern customer operations.
        </p>
      </div>
    </section>
  );
};

export default ProductFeatures;
