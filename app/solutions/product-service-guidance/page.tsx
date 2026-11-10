import React from "react";
import type { Metadata } from "next";
import ProductServiceHero from "@/components/solutions/product-service-guidance/ProductServiceHero";
import ProductServiceChallenge from "@/components/solutions/product-service-guidance/ProductServiceChallenge";
import ProductServiceCapabilities from "@/components/solutions/product-service-guidance/ProductServiceCapabilities";
import ProductServiceUseCases from "@/components/solutions/product-service-guidance/ProductServiceUseCases";
import ProductServiceWorkflow from "@/components/solutions/product-service-guidance/ProductServiceWorkflow";
import ProductServiceBenefits from "@/components/solutions/product-service-guidance/ProductServiceBenefits";
import ProductServiceCta from "@/components/solutions/product-service-guidance/ProductServiceCta";

export const metadata: Metadata = {
  title: "Help Customers Understand What You Offer | Pingo Solutions",
  description:
    "Give your customers clear product and service information through an AI-powered assistant that understands your business and guides them to the answers they need.",
  openGraph: {
    title: "Help Customers Understand What You Offer | Pingo Solutions",
    description:
      "Give your customers clear product and service information through an AI-powered assistant that understands your business and guides them to the answers they need.",
  },
};

export default function ProductServiceGuidancePage() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#080710] transition-colors duration-200">
      <ProductServiceHero />
      <ProductServiceChallenge />
      <ProductServiceCapabilities />
      <ProductServiceUseCases />
      <ProductServiceWorkflow />
      <ProductServiceBenefits />
      <ProductServiceCta />
    </div>
  );
}

