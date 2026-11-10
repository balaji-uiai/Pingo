import React from "react";
import type { Metadata } from "next";
import AnalyticsHero from "@/components/features/analytics-intelligence/AnalyticsHero";
import AnalyticsOverview from "@/components/features/analytics-intelligence/AnalyticsOverview";
import AnalyticsCapabilities from "@/components/features/analytics-intelligence/AnalyticsCapabilities";
import AnalyticsWorkflow from "@/components/features/analytics-intelligence/AnalyticsWorkflow";
import AnalyticsBenefits from "@/components/features/analytics-intelligence/AnalyticsBenefits";
import AnalyticsCta from "@/components/features/analytics-intelligence/AnalyticsCta";

export const metadata: Metadata = {
  title: "Analytics & Intelligence – Conversation Insights & Trends | Pingo",
  description:
    "Understand customer interactions, discover patterns, and make informed decisions with meaningful insights.",
  openGraph: {
    title: "Turn Conversations Into Insights. – Pingo",
    description:
      "Understand customer interactions, discover patterns, and make informed decisions with meaningful insights.",
  },
};

export default function AnalyticsIntelligenceFeaturePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <AnalyticsHero />
      <AnalyticsOverview />
      <AnalyticsCapabilities />
      <AnalyticsWorkflow />
      <AnalyticsBenefits />
      <AnalyticsCta />
    </div>
  );
}

