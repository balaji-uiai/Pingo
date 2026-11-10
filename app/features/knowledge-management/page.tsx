import React from "react";
import type { Metadata } from "next";
import KnowledgeHero from "@/components/features/knowledge-management/KnowledgeHero";
import KnowledgeOverview from "@/components/features/knowledge-management/KnowledgeOverview";
import KnowledgeCapabilities from "@/components/features/knowledge-management/KnowledgeCapabilities";
import KnowledgeWorkflow from "@/components/features/knowledge-management/KnowledgeWorkflow";
import KnowledgeBenefits from "@/components/features/knowledge-management/KnowledgeBenefits";
import KnowledgeCta from "@/components/features/knowledge-management/KnowledgeCta";

export const metadata: Metadata = {
  title: "Knowledge Management – Product-Based Hub | Pingo",
  description:
    "Bring your business information together in one place and make it easier for AI to deliver accurate, relevant answers.",
  openGraph: {
    title: "Your Knowledge. Organized. Always Accessible. – Pingo",
    description:
      "Bring your business information together in one place and make it easier for AI to deliver accurate, relevant answers.",
  },
};

export default function KnowledgeManagementFeaturePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <KnowledgeHero />
      <KnowledgeOverview />
      <KnowledgeCapabilities />
      <KnowledgeWorkflow />
      <KnowledgeBenefits />
      <KnowledgeCta />
    </div>
  );
}

