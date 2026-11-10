import React from "react";
import type { Metadata } from "next";
import SupportManagementHero from "@/components/solutions/support-management/SupportManagementHero";
import SupportManagementChallenge from "@/components/solutions/support-management/SupportManagementChallenge";
import SupportManagementCapabilities from "@/components/solutions/support-management/SupportManagementCapabilities";
import SupportManagementUseCases from "@/components/solutions/support-management/SupportManagementUseCases";
import SupportManagementWorkflow from "@/components/solutions/support-management/SupportManagementWorkflow";
import SupportManagementBenefits from "@/components/solutions/support-management/SupportManagementBenefits";
import SupportManagementCta from "@/components/solutions/support-management/SupportManagementCta";

export const metadata: Metadata = {
  title: "Manage Customer Support With Better Knowledge | Pingo Solutions",
  description:
    "Empower your support team with an AI-powered knowledge assistant that makes business information easier to find and helps deliver clear, relevant customer guidance.",
  openGraph: {
    title: "Manage Customer Support With Better Knowledge | Pingo Solutions",
    description:
      "Empower your support team with an AI-powered knowledge assistant that makes business information easier to find and helps deliver clear, relevant customer guidance.",
  },
};

export default function SupportManagementPage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#080710] transition-colors duration-200">
      <SupportManagementHero />
      <SupportManagementChallenge />
      <SupportManagementCapabilities />
      <SupportManagementUseCases />
      <SupportManagementWorkflow />
      <SupportManagementBenefits />
      <SupportManagementCta />
    </div>
  );
}

