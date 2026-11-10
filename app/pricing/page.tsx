import React from "react";
import type { Metadata } from "next";
import { pricingData } from "@/data/pricing";
import { pricingFaqData } from "@/data/faq";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingCard from "@/components/pricing/PricingCard";
import PricingFaq from "@/components/pricing/PricingFaq";
import PricingCta from "@/components/pricing/PricingCta";

export const metadata: Metadata = {
  title: "Pricing Plans – Pingo",
  description:
    "Simple, transparent pricing for teams of all sizes. Choose between Starter, Growth, Enterprise, and Custom Enterprise to power your customer conversations with Pingo.",
};

export default function PricingPage() {
  return (
    <div className="relative pt-32 sm:pt-36 lg:pt-40 overflow-hidden bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      {/* Background ambient radial glow */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#635BFF]/8 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#3984FF]/8 dark:bg-[#3984FF]/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />

      {/* 1. Page Header & Four Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 pb-20 sm:pb-24 lg:pb-28">
        <PricingHeader
          badge={pricingData.header.badge}
          heading={pricingData.header.heading}
        />

        {/* Four Pricing Cards in one horizontal row on large desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {pricingData.plans.map((plan) => (
            <div key={plan.id} className="h-full">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>

      {/* 2. Full-Width FAQ Section */}
      <PricingFaq data={pricingFaqData} />

      {/* 3. Final CTA Banner */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-24 lg:py-28 relative z-10">
        <PricingCta
          heading={pricingData.cta.heading}
          description={pricingData.cta.description}
          buttonText={pricingData.cta.buttonText}
          buttonHref={pricingData.cta.buttonHref}
        />
      </div>
    </div>
  );
}
