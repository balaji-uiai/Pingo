import React from "react";
import type { Metadata } from "next";
import CustomerSupportHero from "@/components/solutions/customer-support/CustomerSupportHero";
import CustomerSupportChallenge from "@/components/solutions/customer-support/CustomerSupportChallenge";
import CustomerSupportCapabilities from "@/components/solutions/customer-support/CustomerSupportCapabilities";
import CustomerSupportWorkflow from "@/components/solutions/customer-support/CustomerSupportWorkflow";
import CustomerSupportUseCases from "@/components/solutions/customer-support/CustomerSupportUseCases";
import CustomerSupportBenefits from "@/components/solutions/customer-support/CustomerSupportBenefits";
import CustomerSupportCta from "@/components/solutions/customer-support/CustomerSupportCta";

export const metadata: Metadata = {
  title: "Support Every Customer, Beyond Every Conversation | Pingo Solutions",
  description:
    "Give customers timely assistance with AI-powered responses and human support when personal attention is needed.",
  openGraph: {
    title: "Support Every Customer, Beyond Every Conversation | Pingo Solutions",
    description:
      "Give customers timely assistance with AI-powered responses and human support when personal attention is needed.",
  },
};

export default function CustomerSupportSolutionPage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#080710] transition-colors duration-200">
      <CustomerSupportHero />
      <CustomerSupportChallenge />
      <CustomerSupportCapabilities />
      <CustomerSupportWorkflow />
      <CustomerSupportUseCases />
      <CustomerSupportBenefits />
      <CustomerSupportCta />
    </div>
  );
}
