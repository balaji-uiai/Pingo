import React from "react";
import type { Metadata } from "next";
import HelpdeskHero from "@/components/features/helpdesk-ticketing/HelpdeskHero";
import HelpdeskOverview from "@/components/features/helpdesk-ticketing/HelpdeskOverview";
import HelpdeskCapabilities from "@/components/features/helpdesk-ticketing/HelpdeskCapabilities";
import HelpdeskWorkflow from "@/components/features/helpdesk-ticketing/HelpdeskWorkflow";
import HelpdeskBenefits from "@/components/features/helpdesk-ticketing/HelpdeskBenefits";
import HelpdeskEnterprise from "@/components/features/helpdesk-ticketing/HelpdeskEnterprise";
import HelpdeskCta from "@/components/features/helpdesk-ticketing/HelpdeskCta";

export const metadata: Metadata = {
  title: "Helpdesk & Ticketing – Structured Support Issue Tracking | Pingo",
  description:
    "Bring customer requests into an organized workflow. Track issues, manage ticket progress, and keep support teams aligned.",
  openGraph: {
    title: "Customer Issues. Structured Support. – Pingo",
    description:
      "Bring customer requests into an organized workflow. Track issues, manage ticket progress, and keep support teams aligned.",
  },
};

export default function HelpdeskTicketingFeaturePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <HelpdeskHero />
      <HelpdeskOverview />
      <HelpdeskCapabilities />
      <HelpdeskWorkflow />
      <HelpdeskBenefits />
      <HelpdeskEnterprise />
      <HelpdeskCta />
    </div>
  );
}

