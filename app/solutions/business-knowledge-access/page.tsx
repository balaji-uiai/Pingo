import React from "react";
import type { Metadata } from "next";
import BusinessKnowledgeHero from "@/components/solutions/business-knowledge-access/BusinessKnowledgeHero";
import BusinessKnowledgeChallenge from "@/components/solutions/business-knowledge-access/BusinessKnowledgeChallenge";
import BusinessKnowledgeCapabilities from "@/components/solutions/business-knowledge-access/BusinessKnowledgeCapabilities";
import BusinessKnowledgeUseCases from "@/components/solutions/business-knowledge-access/BusinessKnowledgeUseCases";
import BusinessKnowledgeWorkflow from "@/components/solutions/business-knowledge-access/BusinessKnowledgeWorkflow";
import BusinessKnowledgeBenefits from "@/components/solutions/business-knowledge-access/BusinessKnowledgeBenefits";
import BusinessKnowledgeCta from "@/components/solutions/business-knowledge-access/BusinessKnowledgeCta";

export const metadata: Metadata = {
  title: "Your Business Knowledge. Just a Question Away | Pingo Solutions",
  description:
    "Bring your business information together and make it easier for people to find the answers they need with an AI-powered knowledge assistant.",
  openGraph: {
    title: "Your Business Knowledge. Just a Question Away | Pingo Solutions",
    description:
      "Bring your business information together and make it easier for people to find the answers they need with an AI-powered knowledge assistant.",
  },
};

export default function BusinessKnowledgeAccessPage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#080710] transition-colors duration-200">
      <BusinessKnowledgeHero />
      <BusinessKnowledgeChallenge />
      <BusinessKnowledgeCapabilities />
      <BusinessKnowledgeUseCases />
      <BusinessKnowledgeWorkflow />
      <BusinessKnowledgeBenefits />
      <BusinessKnowledgeCta />
    </div>
  );
}

