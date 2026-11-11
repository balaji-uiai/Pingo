import React from "react";
import type { Metadata } from "next";
import AnalyticsHero from "@/components/features/analytics-intelligence/AnalyticsHero";
import AnalyticsDashboard from "@/components/features/analytics-intelligence/AnalyticsDashboard";
import AnalyticsOverview from "@/components/features/analytics-intelligence/AnalyticsOverview";
import AnalyticsWorkflow from "@/components/features/analytics-intelligence/AnalyticsWorkflow";
import AnalyticsCapabilities from "@/components/features/analytics-intelligence/AnalyticsCapabilities";
import AnalyticsBenefits from "@/components/features/analytics-intelligence/AnalyticsBenefits";
import AnalyticsCta from "@/components/features/analytics-intelligence/AnalyticsCta";

export const metadata: Metadata = {
  title: "Analytics & Intelligence – Conversation Insights & Performance | Pingo",
  description:
    "Track customer interactions, monitor conversation performance, and discover insights that help your business deliver better support.",
  openGraph: {
    title: "Understand Every Conversation. Improve Every Experience. – Pingo",
    description:
      "Track customer interactions, monitor conversation performance, and discover insights that help your business deliver better support.",
  },
};

export default function AnalyticsIntelligenceFeaturePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <AnalyticsHero />
      <AnalyticsDashboard />
      <AnalyticsOverview />
      <AnalyticsWorkflow />
      <AnalyticsCapabilities />
      <AnalyticsBenefits />
      <AnalyticsCta />
    </div>
  );
}
