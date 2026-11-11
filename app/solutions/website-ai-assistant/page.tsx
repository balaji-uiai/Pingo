import React from "react";
import type { Metadata } from "next";
import WebsiteAssistantHero from "@/components/solutions/website-ai-assistant/WebsiteAssistantHero";
import WebsiteAssistantChallenge from "@/components/solutions/website-ai-assistant/WebsiteAssistantChallenge";
import WebsiteAssistantCapabilities from "@/components/solutions/website-ai-assistant/WebsiteAssistantCapabilities";
import WebsiteAssistantWorkflow from "@/components/solutions/website-ai-assistant/WebsiteAssistantWorkflow";
import WebsiteAssistantUseCases from "@/components/solutions/website-ai-assistant/WebsiteAssistantUseCases";
import WebsiteAssistantBenefits from "@/components/solutions/website-ai-assistant/WebsiteAssistantBenefits";
import WebsiteAssistantCta from "@/components/solutions/website-ai-assistant/WebsiteAssistantCta";

export const metadata: Metadata = {
  title: "Make Your Website More Interactive and Helpful | Pingo Solutions",
  description:
    "Turn website visits into meaningful interactions by helping visitors explore your business information through an intelligent website assistant.",
  openGraph: {
    title: "Make Your Website More Interactive and Helpful | Pingo Solutions",
    description:
      "Turn website visits into meaningful interactions by helping visitors explore your business information through an intelligent website assistant.",
  },
};

export default function WebsiteAiAssistantSolutionPage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#080710] transition-colors duration-200">
      <WebsiteAssistantHero />
      <WebsiteAssistantChallenge />
      <WebsiteAssistantCapabilities />
      <WebsiteAssistantWorkflow />
      <WebsiteAssistantUseCases />
      <WebsiteAssistantBenefits />
      <WebsiteAssistantCta />
    </div>
  );
}
