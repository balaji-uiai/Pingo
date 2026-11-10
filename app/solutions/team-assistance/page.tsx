import React from "react";
import type { Metadata } from "next";
import TeamAssistanceHero from "@/components/solutions/team-assistance/TeamAssistanceHero";
import TeamAssistanceChallenge from "@/components/solutions/team-assistance/TeamAssistanceChallenge";
import TeamAssistanceCapabilities from "@/components/solutions/team-assistance/TeamAssistanceCapabilities";
import TeamAssistanceUseCases from "@/components/solutions/team-assistance/TeamAssistanceUseCases";
import TeamAssistanceWorkflow from "@/components/solutions/team-assistance/TeamAssistanceWorkflow";
import TeamAssistanceBenefits from "@/components/solutions/team-assistance/TeamAssistanceBenefits";
import TeamAssistanceCta from "@/components/solutions/team-assistance/TeamAssistanceCta";

export const metadata: Metadata = {
  title: "Give Your Team the Knowledge to Work Smarter | Pingo Solutions",
  description:
    "Help your team find important business information, understand internal processes, and get relevant answers through one AI-powered knowledge assistant.",
  openGraph: {
    title: "Give Your Team the Knowledge to Work Smarter | Pingo Solutions",
    description:
      "Help your team find important business information, understand internal processes, and get relevant answers through one AI-powered knowledge assistant.",
  },
};

export default function TeamAssistancePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#080710] transition-colors duration-200">
      <TeamAssistanceHero />
      <TeamAssistanceChallenge />
      <TeamAssistanceCapabilities />
      <TeamAssistanceUseCases />
      <TeamAssistanceWorkflow />
      <TeamAssistanceBenefits />
      <TeamAssistanceCta />
    </div>
  );
}

