import React from "react";
import type { Metadata } from "next";
import IntegrationsHero from "@/components/features/integrations-channels/IntegrationsHero";
import IntegrationsOverview from "@/components/features/integrations-channels/IntegrationsOverview";
import IntegrationsCapabilities from "@/components/features/integrations-channels/IntegrationsCapabilities";
import IntegrationsWorkflow from "@/components/features/integrations-channels/IntegrationsWorkflow";
import IntegrationsBenefits from "@/components/features/integrations-channels/IntegrationsBenefits";
import IntegrationsCta from "@/components/features/integrations-channels/IntegrationsCta";

export const metadata: Metadata = {
  title: "Integrations & Channels – Connect Your Business Knowledge | Pingo",
  description:
    "Bring your business information closer to Pingo by connecting supported sources and making relevant knowledge accessible to your AI assistant.",
  openGraph: {
    title: "Connect Your Tools. Bring Your Knowledge Together. – Pingo",
    description:
      "Bring your business information closer to Pingo by connecting supported sources and making relevant knowledge accessible to your AI assistant.",
  },
};

export default function IntegrationsChannelsFeaturePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <IntegrationsHero />
      <IntegrationsOverview />
      <IntegrationsCapabilities />
      <IntegrationsWorkflow />
      <IntegrationsBenefits />
      <IntegrationsCta />
    </div>
  );
}

