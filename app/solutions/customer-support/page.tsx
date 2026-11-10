import React from "react";
import type { Metadata } from "next";
import CustomerSupportHero from "@/components/solutions/customer-support/CustomerSupportHero";
import CustomerSupportChallenge from "@/components/solutions/customer-support/CustomerSupportChallenge";
import CustomerSupportCapabilities from "@/components/solutions/customer-support/CustomerSupportCapabilities";
import CustomerSupportUseCases from "@/components/solutions/customer-support/CustomerSupportUseCases";
import CustomerSupportWorkflow from "@/components/solutions/customer-support/CustomerSupportWorkflow";
import CustomerSupportBenefits from "@/components/solutions/customer-support/CustomerSupportBenefits";
import CustomerSupportCta from "@/components/solutions/customer-support/CustomerSupportCta";

export const metadata: Metadata = {
  title: "Customer Support That Understands Your Customers | Pingo Solutions",
  description:
    "Help your customers find the answers they need with an AI-powered assistant that understands your business information and provides relevant guidance.",
  openGraph: {
    title: "Customer Support That Understands Your Customers | Pingo Solutions",
    description:
      "Help your customers find the answers they need with an AI-powered assistant that understands your business information and provides relevant guidance.",
  },
};

export default function CustomerSupportSolutionPage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#080710] transition-colors duration-200">
      <CustomerSupportHero />
      <CustomerSupportChallenge />
      <CustomerSupportCapabilities />
      <CustomerSupportUseCases />
      <CustomerSupportWorkflow />
      <CustomerSupportBenefits />
      <CustomerSupportCta />
    </div>
  );
}

