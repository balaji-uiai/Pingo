"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { integrationsChannelsData } from "@/data/integrationsChannels";

export const IntegrationsCta: React.FC = () => {
  const { cta } = integrationsChannelsData;

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#FAFAFE] dark:bg-[#0E1022] transition-colors duration-200">
      {/* Subtle brand ambient lighting flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#635BFF]/8 via-[#3984FF]/8 to-[#20C5D8]/8 dark:from-[#635BFF]/12 dark:via-[#3984FF]/12 dark:to-[#20C5D8]/12 rounded-full blur-[120px] pointer-events-none" />

      {/* Full-width container with centered, elegant layout */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        {/* Subtle Brand Accent Indicator */}
        <div className="flex items-center justify-center gap-1.5 mb-5 sm:mb-6" aria-hidden="true">
          <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
          <span className="w-10 h-[2px] rounded-full bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#20C5D8]" />
        </div>

        {/* Small Label Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#635BFF]/25 dark:border-[#635BFF]/40 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs mb-4">
          <Layers className="w-3.5 h-3.5 text-[#20C5D8] flex-shrink-0" />
          <span>{cta.badge}</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.2] mb-4 sm:mb-5">
          {cta.heading}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-xl mx-auto mb-7 sm:mb-8 font-normal">
          {cta.description}
        </p>

        {/* Single CTA Button */}
        <div className="flex items-center justify-center">
          <Link
            href={cta.buttonHref}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2B75E6] shadow-[0_0_25px_rgba(99,91,255,0.4)] hover:shadow-[0_0_35px_rgba(99,91,255,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{cta.buttonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsCta;

