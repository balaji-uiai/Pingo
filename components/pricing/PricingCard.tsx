import React from "react";
import Link from "next/link";
import { Check, Minus, Gem, ArrowRight } from "lucide-react";
import { PricingPlan } from "@/data/pricing";

export interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const isGrowth = plan.isPopular;
  const isCustom = plan.isCustom;

  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-7 xl:p-5 2xl:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 ${
        isGrowth
          ? "bg-[#F5F6FF] dark:bg-[#101326] border-2 border-[#635BFF] shadow-[0_8px_30px_rgba(99,91,255,0.18)] dark:shadow-[0_12px_35px_rgba(99,91,255,0.3)] relative z-20"
          : isCustom
          ? "bg-[#F5F6FF]/60 dark:bg-[#171A2E] border border-[#635BFF]/30 dark:border-[#635BFF]/40 shadow-sm dark:shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:border-[#635BFF]/60"
          : "bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] shadow-sm dark:shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:border-[#635BFF]/40"
      }`}
    >
      {/* MOST POPULAR Badge for Growth Card */}
      {isGrowth && plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] shadow-[0_4px_12px_rgba(99,91,255,0.4)] border border-white/20">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Top Header & Content Area */}
      <div>
        {/* Card 4 (Custom Enterprise) Top Premium Badge & Icon */}
        {isCustom ? (
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF] dark:text-[#20C5D8]">
              {plan.smallHeading || "Need Something More?"}
            </span>
            <div className="w-7 h-7 rounded-full bg-[#635BFF]/10 text-[#635BFF] dark:bg-[#635BFF]/20 dark:text-[#20C5D8] flex items-center justify-center shadow-sm">
              <Gem className="w-3.5 h-3.5" />
            </div>
          </div>
        ) : (
          <div className="h-7 mb-2" aria-hidden="true" />
        )}

        {/* Plan Name */}
        <div className="mb-2">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF]">
            {plan.name}
          </h3>
        </div>

        {/* Price & Description Section */}
        {isCustom ? (
          <div className="mt-3 mb-6 min-h-[92px] flex flex-col justify-end">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] mb-1">
              Tailored Pricing
            </div>
          </div>
        ) : (
          <>
            <div className="mt-3 mb-4 min-h-[52px] flex flex-col justify-end">
              <div className="flex items-baseline flex-wrap gap-2">
                {plan.originalPrice && (
                  <span className="line-through text-[#62677D]/60 dark:text-[#B5BAD0]/50 text-base font-medium">
                    {plan.originalPrice}
                  </span>
                )}
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF]">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm font-medium text-[#62677D] dark:text-[#B5BAD0]">
                    {plan.period}
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-6 min-h-[40px]">
              {plan.description}
            </p>
          </>
        )}

        {/* Subtle Divider */}
        <div className="w-full h-[1px] bg-[#E5E7F0] dark:bg-[#292D45] mb-6" />

        {/* Feature List */}
        <div className="space-y-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#62677D] dark:text-[#B5BAD0] block mb-2">
            Included features:
          </span>
          {plan.features.map((feature, idx) => {
            const isNegative = feature.toLowerCase().includes("no ai");
            return (
              <div key={idx} className="flex items-start gap-2.5">
                <div
                  className={`w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isNegative
                      ? "bg-[#E5E7F0] text-[#62677D] dark:bg-[#101326] dark:text-[#B5BAD0]/50"
                      : "bg-[#635BFF]/10 text-[#635BFF] dark:bg-[#635BFF]/20 dark:text-[#20C5D8]"
                  }`}
                >
                  {isNegative ? (
                    <Minus className="w-3 h-3 stroke-[2.5]" />
                  ) : (
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  )}
                </div>
                <span
                  className={`text-xs sm:text-[13px] 2xl:text-sm leading-snug ${
                    isNegative
                      ? "text-[#62677D]/70 dark:text-[#B5BAD0]/50"
                      : "text-[#171B2E] dark:text-[#FFFFFF]"
                  } whitespace-nowrap overflow-hidden text-ellipsis`}
                  title={feature}
                >
                  {feature}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ALL FOUR CTA Buttons in Consistent Bold Purple Style */}
      <div className="mt-auto pt-4">
        <Link
          href={plan.ctaHref || "/contact"}
          className="w-full py-3.5 px-4 rounded-full text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-[#635BFF] hover:bg-[#5249E8] active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-[0_4px_20px_rgba(99,91,255,0.4)] flex items-center justify-center gap-1.5 text-center group cursor-pointer"
        >
          <span>REACH OUT TO US</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
