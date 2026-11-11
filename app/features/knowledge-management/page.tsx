import React from "react";
import type { Metadata } from "next";
import KnowledgeHero from "@/components/features/knowledge-management/KnowledgeHero";
import KnowledgeSources from "@/components/features/knowledge-management/KnowledgeSources";
import KnowledgeWorkflow from "@/components/features/knowledge-management/KnowledgeWorkflow";
import KnowledgeCapabilities from "@/components/features/knowledge-management/KnowledgeCapabilities";
import KnowledgeOverview from "@/components/features/knowledge-management/KnowledgeOverview";
import KnowledgeBenefits from "@/components/features/knowledge-management/KnowledgeBenefits";
import KnowledgeCta from "@/components/features/knowledge-management/KnowledgeCta";

export const metadata: Metadata = {
  title: "Knowledge Management – Product-Based Hub | Pingo",
  description:
    "Bring your website content, documents, FAQs, and structured data together into an organized knowledge base that powers intelligent customer conversations.",
  openGraph: {
    title: "Your Business Knowledge. Organized and Ready. – Pingo",
    description:
      "Bring your website content, documents, FAQs, and structured data together into an organized knowledge base that powers intelligent customer conversations.",
  },
};

export default function KnowledgeManagementFeaturePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <KnowledgeHero />
      <KnowledgeSources />
      <KnowledgeWorkflow />
      <KnowledgeCapabilities />
      <KnowledgeOverview />
      <KnowledgeBenefits />
      <KnowledgeCta />
    </div>
  );
}
