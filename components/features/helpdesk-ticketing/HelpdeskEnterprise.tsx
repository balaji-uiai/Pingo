"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { helpdeskTicketingData } from "@/data/helpdeskTicketing";

export const HelpdeskEnterprise: React.FC = () => {
  const { enterprise } = helpdeskTicketingData;

  return (
    <section
      id="enterprise"
      aria-label="Enterprise Helpdesk Integration"
      className="relative py-12 sm:py-16 overflow-hidden bg-[#FAFBFE] dark:bg-[#0E1022] transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#635BFF]/30 dark:border-[#635BFF]/40 bg-gradient-to-r from-[#FFFFFF] via-[#F8F9FE] to-[#F1F3FB] dark:from-[#15182C] dark:via-[#131627] dark:to-[#171A2F] shadow-xl overflow-hidden">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-[#635BFF]/10 dark:bg-[#635BFF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-[#20C5D8]/10 dark:bg-[#20C5D8]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
                <span>{enterprise.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171B2E] dark:text-[#FFFFFF] tracking-tight leading-tight">
                {enterprise.heading}
              </h3>

              <p className="text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                {enterprise.description}
              </p>

              <div className="pt-1 flex items-center gap-2 text-xs text-[#8F94A8] dark:text-[#7A809C]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#20C5D8] flex-shrink-0" />
                <span>{enterprise.supportedNote}</span>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="flex-shrink-0">
              <Link
                href={enterprise.buttonHref}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2B75E6] shadow-[0_0_20px_rgba(99,91,255,0.35)] hover:shadow-[0_0_30px_rgba(99,91,255,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>{enterprise.buttonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HelpdeskEnterprise;

