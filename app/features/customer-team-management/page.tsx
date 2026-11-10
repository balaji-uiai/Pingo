import React from "react";
import type { Metadata } from "next";
import CustomerTeamHero from "@/components/features/customer-team-management/CustomerTeamHero";
import CustomerTeamOverview from "@/components/features/customer-team-management/CustomerTeamOverview";
import CustomerTeamCapabilities from "@/components/features/customer-team-management/CustomerTeamCapabilities";
import CustomerTeamWorkflow from "@/components/features/customer-team-management/CustomerTeamWorkflow";
import CustomerTeamBenefits from "@/components/features/customer-team-management/CustomerTeamBenefits";
import CustomerTeamCta from "@/components/features/customer-team-management/CustomerTeamCta";

export const metadata: Metadata = {
  title: "Customer & Team Management – Connected Workspace | Pingo",
  description:
    "Keep customer interactions organized and help your team manage conversations and support activities more efficiently.",
  openGraph: {
    title: "Your Customers. Your Team. One Connected Workspace. – Pingo",
    description:
      "Keep customer interactions organized and help your team manage conversations and support activities more efficiently.",
  },
};

export default function CustomerTeamManagementFeaturePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <CustomerTeamHero />
      <CustomerTeamOverview />
      <CustomerTeamCapabilities />
      <CustomerTeamWorkflow />
      <CustomerTeamBenefits />
      <CustomerTeamCta />
    </div>
  );
}

