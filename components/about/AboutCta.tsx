import React from "react";
import Link from "next/link";
import { aboutData } from "@/data/about";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const AboutCta: React.FC = () => {
  const { getInTouch } = aboutData;

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white dark:bg-[#080710] border-t border-[#E5E7F0] dark:border-[#292D45] transition-colors duration-200">
      {/* Brand ambient lighting flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#635BFF]/8 via-[#3984FF]/8 to-[#20C5D8]/8 dark:from-[#635BFF]/12 dark:via-[#3984FF]/12 dark:to-[#20C5D8]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        
        {/* Subtle Brand Accent Indicator */}
        <div className="flex items-center justify-center gap-1.5 mb-5 sm:mb-6" aria-hidden="true">
          <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
          <span className="w-10 h-[2px] rounded-full bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#20C5D8]" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#635BFF]/25 dark:border-[#635BFF]/40 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#20C5D8] flex-shrink-0" />
          <span>{getInTouch.badge}</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.2] mb-4 sm:mb-5">
          {getInTouch.heading}
        </h2>

        {/* Paragraphs */}
        <div className="space-y-3 text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          {getInTouch.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={getInTouch.primaryCta.href}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2B75E6] shadow-[0_0_25px_rgba(99,91,255,0.4)] hover:shadow-[0_0_35px_rgba(99,91,255,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{getInTouch.primaryCta.text}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href={getInTouch.secondaryCta.href}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-[#171B2E] dark:text-[#FFFFFF] bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:bg-[#EAEBF0] dark:hover:bg-[#202440] transition-all duration-200 cursor-pointer"
          >
            <span>{getInTouch.secondaryCta.text}</span>
          </Link>
        </div>

        {/* Trust Points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#62677D] dark:text-[#A5A1BF]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            8 Integrated Core Features
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#635BFF]" />
            6 Targeted Business Solutions
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#20C5D8]" />
            UIAI Technologies Backing
          </span>
        </div>

      </div>
    </section>
  );
};

export default AboutCta;
