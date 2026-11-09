import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

interface PricingCtaProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export const PricingCta: React.FC<PricingCtaProps> = ({
  heading,
  description,
  buttonText,
  buttonHref,
}) => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1E1742] via-[#1A133B] to-[#150E33] border border-purple-500/15 shadow-md p-8 sm:p-10 lg:p-12">
      {/* Subtle ambient lighting without harsh glows */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#782BFF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Banner Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
        {/* Left Side: Subtle Icon & Heading */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 max-w-2xl">
          {/* Subtle chat bubble illustration */}
          <div className="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/10 text-purple-200 flex items-center justify-center flex-shrink-0 shadow-sm">
            <MessageSquare className="w-5 h-5 text-purple-200" />
          </div>

          {/* Heading and Description */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-[#D5D0E5]/80 leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
        </div>

        {/* Right Side: Simple Understated Rounded Button */}
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center">
          <Link
            href={buttonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors duration-200 shadow-sm hover:shadow cursor-pointer uppercase tracking-wider text-center group"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCta;
