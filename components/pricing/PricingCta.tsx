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
    <div className="relative rounded-3xl overflow-hidden bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] shadow-sm dark:shadow-md p-8 sm:p-10 lg:p-12 transition-colors duration-200">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#635BFF]/5 dark:bg-[#635BFF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Banner Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
        {/* Left Side: Subtle Icon & Heading */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 max-w-2xl">
          {/* Subtle chat bubble illustration */}
          <div className="w-12 h-12 rounded-2xl bg-[#635BFF]/10 dark:bg-[#635BFF]/20 border border-[#635BFF]/20 text-[#635BFF] dark:text-[#20C5D8] flex items-center justify-center flex-shrink-0 shadow-sm">
            <MessageSquare className="w-5 h-5" />
          </div>

          {/* Heading and Description */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171B2E] dark:text-[#FFFFFF] tracking-tight leading-tight">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center">
          <Link
            href={buttonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#635BFF] hover:bg-[#5249E8] shadow-sm hover:shadow-[0_4px_20px_rgba(99,91,255,0.4)] transition-all duration-200 cursor-pointer uppercase tracking-wider text-center group"
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
