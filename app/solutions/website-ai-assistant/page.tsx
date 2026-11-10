import React from "react";
import type { Metadata } from "next";
import WebsiteAssistantHero from "@/components/solutions/website-ai-assistant/WebsiteAssistantHero";
import WebsiteAssistantChallenge from "@/components/solutions/website-ai-assistant/WebsiteAssistantChallenge";
import WebsiteAssistantCapabilities from "@/components/solutions/website-ai-assistant/WebsiteAssistantCapabilities";
import WebsiteAssistantUseCases from "@/components/solutions/website-ai-assistant/WebsiteAssistantUseCases";
import WebsiteAssistantWorkflow from "@/components/solutions/website-ai-assistant/WebsiteAssistantWorkflow";
import WebsiteAssistantBenefits from "@/components/solutions/website-ai-assistant/WebsiteAssistantBenefits";
import WebsiteAssistantCta from "@/components/solutions/website-ai-assistant/WebsiteAssistantCta";

export const metadata: Metadata = {
  title: "Turn Your Website Into an Intelligent Assistant | Pingo Solutions",
  description:
    "Help website visitors discover information, understand your services, and get relevant answers through an AI assistant powered by your business knowledge.",
  openGraph: {
    title: "Turn Your Website Into an Intelligent Assistant | Pingo Solutions",
    description:
      "Help website visitors discover information, understand your services, and get relevant answers through an AI assistant powered by your business knowledge.",
  },
};

export default function WebsiteAiAssistantPage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#080710] transition-colors duration-200">
      <WebsiteAssistantHero />
      <WebsiteAssistantChallenge />
      <WebsiteAssistantCapabilities />
      <WebsiteAssistantUseCases />
      <WebsiteAssistantWorkflow />
      <WebsiteAssistantBenefits />
      <WebsiteAssistantCta />
    </div>
  );
}

