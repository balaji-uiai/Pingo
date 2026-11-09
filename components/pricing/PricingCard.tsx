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
          ? "bg-[#FAF8FF] dark:bg-[#181333] border-2 border-[#782BFF]/80 shadow-[0_8px_30px_rgba(120,43,255,0.14)] dark:shadow-[0_12px_35px_rgba(120,43,255,0.22)] relative z-20"
          : isCustom
          ? "bg-gradient-to-b from-[#FBF9FF] via-[#F7F2FF] to-[#FAF8FF] dark:bg-gradient-to-b dark:from-[#181233] dark:via-[#140F2B] dark:to-[#120D26] border border-purple-200/90 dark:border-purple-500/30 shadow-sm dark:shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:border-purple-300 dark:hover:border-purple-400/50"
          : "bg-white dark:bg-[#120F24]/90 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:border-slate-300 dark:hover:border-white/20"
      }`}
    >
      {/* MOST POPULAR Badge for Growth Card */}
      {isGrowth && plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#782BFF] to-[#6017E6] shadow-[0_4px_12px_rgba(120,43,255,0.45)] border border-white/20">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Top Header & Content Area */}
      <div>
        {/* Card 4 (Custom Enterprise) Top Premium Badge & Icon */}
        {isCustom ? (
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#782BFF] dark:text-violet-300">
              {plan.smallHeading || "Need Something More?"}
            </span>
            <div className="w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-900/40 text-[#782BFF] dark:text-violet-300 flex items-center justify-center shadow-sm">
              <Gem className="w-3.5 h-3.5" />
            </div>
          </div>
        ) : (
          <div className="h-7 mb-2" aria-hidden="true" />
        )}

        {/* Plan Name */}
        <div className="mb-2">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {plan.name}
          </h3>
        </div>

        {/* Price & Description Section */}
        {isCustom ? (
          <div className="mt-3 mb-6 min-h-[92px] flex flex-col justify-end">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-1">
              Tailored Pricing
            </div>
          </div>
        ) : (
          <>
            <div className="mt-3 mb-4 min-h-[52px] flex flex-col justify-end">
              <div className="flex items-baseline flex-wrap gap-2">
                {plan.originalPrice && (
                  <span className="line-through text-slate-400 dark:text-[#D5D0E5]/50 text-base font-medium">
                    {plan.originalPrice}
                  </span>
                )}
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm font-medium text-slate-500 dark:text-[#D5D0E5]/70">
                    {plan.period}
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#D5D0E5] leading-relaxed mb-6 min-h-[40px]">
              {plan.description}
            </p>
          </>
        )}

        {/* Subtle Divider */}
        <div className="w-full h-[1px] bg-slate-200/80 dark:bg-white/[0.08] mb-6" />

        {/* Feature List */}
        <div className="space-y-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-[#D5D0E5]/60 block mb-2">
            Included features:
          </span>
          {plan.features.map((feature, idx) => {
            const isNegative = feature.toLowerCase().includes("no ai");
            return (
              <div key={idx} className="flex items-start gap-2.5">
                <div
                  className={`w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isNegative
                      ? "bg-slate-100 text-slate-400 dark:bg-white/[0.06] dark:text-[#D5D0E5]/40"
                      : "bg-[#782BFF]/10 text-[#782BFF] dark:bg-purple-500/20 dark:text-violet-300"
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
                      ? "text-slate-400 dark:text-[#D5D0E5]/50"
                      : "text-slate-700 dark:text-[#D5D0E5]"
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
          className="w-full py-3.5 px-4 rounded-full text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-[#782BFF] hover:bg-[#6820E0] active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 text-center group cursor-pointer"
        >
          <span>REACH OUT TO US</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
