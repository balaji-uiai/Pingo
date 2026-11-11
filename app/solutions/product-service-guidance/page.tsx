import React from "react";
import type { Metadata } from "next";
import ProductServiceHero from "@/components/solutions/product-service-guidance/ProductServiceHero";
import ProductServiceChallenge from "@/components/solutions/product-service-guidance/ProductServiceChallenge";
import ProductServiceCapabilities from "@/components/solutions/product-service-guidance/ProductServiceCapabilities";
import ProductServiceWorkflow from "@/components/solutions/product-service-guidance/ProductServiceWorkflow";
import ProductServiceUseCases from "@/components/solutions/product-service-guidance/ProductServiceUseCases";
import ProductServiceBenefits from "@/components/solutions/product-service-guidance/ProductServiceBenefits";
import ProductServiceCta from "@/components/solutions/product-service-guidance/ProductServiceCta";

export const metadata: Metadata = {
  title: "Help Customers Discover the Right Product or Service | Pingo Solutions",
  description:
    "Make it easier for customers to explore your offerings, understand their features, and find the information they need to make confident decisions.",
  openGraph: {
    title: "Help Customers Discover the Right Product or Service | Pingo Solutions",
    description:
      "Make it easier for customers to explore your offerings, understand their features, and find the information they need to make confident decisions.",
  },
};

export default function ProductServiceGuidanceSolutionPage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#080710] transition-colors duration-200">
      <ProductServiceHero />
      <ProductServiceChallenge />
      <ProductServiceCapabilities />
      <ProductServiceWorkflow />
      <ProductServiceUseCases />
      <ProductServiceBenefits />
      <ProductServiceCta />
    </div>
  );
}
