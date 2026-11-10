"use client";

import React, { useState } from "react";
import {
  Box,
  Briefcase,
  MessageCircle,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  FileText,
  Layers,
  ArrowRight,
} from "lucide-react";
import { productServiceData, CapabilityItem } from "@/data/productServiceGuidance";

const iconMap: Record<string, React.ElementType> = {
  Box,
  Briefcase,
  MessageCircle,
  Compass,
  ShieldCheck,
};

export const ProductServiceCapabilities: React.FC = () => {
  const { capabilities } = productServiceData;
  const [filter, setFilter] = useState<"All" | "Product" | "Service">("All");

  const filteredItems = capabilities.items.filter((item) => {
    if (filter === "All") return true;
    return item.example.category === filter;
  });

  return (
    <section
      id="capabilities"
      aria-label="Product and Service Capabilities"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080710] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#3984FF]/8 dark:bg-[#3984FF]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{capabilities.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {capabilities.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {capabilities.subheading}
          </p>
        </div>

        {/* Filter Toggle Pills */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {(["All", "Product", "Service"] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? "bg-[#635BFF] text-white shadow-sm"
                  : "bg-[#F5F6FA] dark:bg-[#15102A] text-[#62677D] dark:text-[#A5A1BF] border border-[#E5E7F0] dark:border-[#28223D] hover:border-[#635BFF]/30"
              }`}
            >
              {cat === "All" ? "All Capabilities" : `${cat} Focus`}
            </button>
          ))}
        </div>

        {/* Bento-Style Product & Service Clarity Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Box;
            const isWide = index < 2 && filter === "All";

            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 sm:p-7 bg-[#FAFBFE] dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#3984FF]/40 transition-all duration-200 flex flex-col justify-between ${
                  isWide ? "lg:col-span-1" : "lg:col-span-1"
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#635BFF]/10 to-[#3984FF]/10 text-[#635BFF] dark:text-[#7EB5FF] flex items-center justify-center border border-[#635BFF]/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1A1435] border border-[#E5E7F0] dark:border-white/[0.08] text-[#3984FF] dark:text-[#7EB5FF] font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Example Q&A Snippet */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#17122C] border border-[#E5E7F0] dark:border-white/[0.06] space-y-2 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#3984FF] font-semibold block">
                      Customer Question:
                    </span>
                    <p className="font-medium text-[#171B2E] dark:text-white italic">
                      &ldquo;{item.example.inquiry}&rdquo;
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E5E7F0] dark:border-white/[0.06] space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#10B981] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Grounded Answer:
                    </span>
                    <p className="text-[#62677D] dark:text-[#D5D0E5] leading-relaxed line-clamp-3">
                      {item.example.guidance}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductServiceCapabilities;

