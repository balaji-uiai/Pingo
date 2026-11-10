import React from "react";
import type { Metadata } from "next";
import SecurityAdminHero from "@/components/features/security-administration/SecurityAdminHero";
import SecurityAdminOverview from "@/components/features/security-administration/SecurityAdminOverview";
import SecurityAdminCapabilities from "@/components/features/security-administration/SecurityAdminCapabilities";
import SecurityAdminWorkflow from "@/components/features/security-administration/SecurityAdminWorkflow";
import SecurityAdminBenefits from "@/components/features/security-administration/SecurityAdminBenefits";
import SecurityAdminCta from "@/components/features/security-administration/SecurityAdminCta";

export const metadata: Metadata = {
  title: "Security & Administration – Workspace Controls & Confidence | Pingo",
  description:
    "Manage your workspace with clarity and keep your business information under control through organized administration.",
  openGraph: {
    title: "Your Knowledge. Your Control. Your Confidence. – Pingo",
    description:
      "Manage your workspace with clarity and keep your business information under control through organized administration.",
  },
};

export default function SecurityAdministrationFeaturePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <SecurityAdminHero />
      <SecurityAdminOverview />
      <SecurityAdminCapabilities />
      <SecurityAdminWorkflow />
      <SecurityAdminBenefits />
      <SecurityAdminCta />
    </div>
  );
}

