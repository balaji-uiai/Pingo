import React from "react";
import type { Metadata } from "next";
import AiAutomationHero from "@/components/features/ai-automation/AiAutomationHero";
import AiAutomationOverview from "@/components/features/ai-automation/AiAutomationOverview";
import AiAutomationCapabilities from "@/components/features/ai-automation/AiAutomationCapabilities";
import AiAutomationWorkflow from "@/components/features/ai-automation/AiAutomationWorkflow";
import AiAutomationBenefits from "@/components/features/ai-automation/AiAutomationBenefits";
import AiAutomationCta from "@/components/features/ai-automation/AiAutomationCta";

export const metadata: Metadata = {
  title: "AI Automation – Intelligent Customer Conversations | Pingo",
  description:
    "Make every customer conversation smarter with Pingo's AI-powered assistant. Provide helpful answers using your business knowledge.",
  openGraph: {
    title: "AI That Understands. Automation That Works. – Pingo",
    description:
      "Make every customer conversation smarter with Pingo's AI-powered assistant. Provide helpful answers using your business knowledge.",
  },
};

export default function AiAutomationFeaturePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <AiAutomationHero />
      <AiAutomationOverview />
      <AiAutomationCapabilities />
      <AiAutomationWorkflow />
      <AiAutomationBenefits />
      <AiAutomationCta />
    </div>
  );
}

