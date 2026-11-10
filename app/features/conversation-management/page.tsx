import React from "react";
import type { Metadata } from "next";
import ConversationHero from "@/components/features/conversation-management/ConversationHero";
import ConversationOverview from "@/components/features/conversation-management/ConversationOverview";
import ConversationCapabilities from "@/components/features/conversation-management/ConversationCapabilities";
import ConversationWorkflow from "@/components/features/conversation-management/ConversationWorkflow";
import ConversationBenefits from "@/components/features/conversation-management/ConversationBenefits";
import ConversationCta from "@/components/features/conversation-management/ConversationCta";

export const metadata: Metadata = {
  title: "Conversation Management – Context-Aware Customer Chats | Pingo",
  description:
    "Help customers find what they need through natural, contextual conversations powered by your business knowledge.",
  openGraph: {
    title: "Every Conversation. More Meaningful. – Pingo",
    description:
      "Help customers find what they need through natural, contextual conversations powered by your business knowledge.",
  },
};

export default function ConversationManagementFeaturePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <ConversationHero />
      <ConversationOverview />
      <ConversationCapabilities />
      <ConversationWorkflow />
      <ConversationBenefits />
      <ConversationCta />
    </div>
  );
}

