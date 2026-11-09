"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { pricingFaqData, FaqSectionData } from "@/data/faq";

export interface PricingFaqProps {
  data?: FaqSectionData;
  className?: string;
}

export const PricingFaq: React.FC<PricingFaqProps> = ({
  data = pricingFaqData,
  className = "",
}) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className={`w-full bg-[#F8F7FF] dark:bg-[#0B0918] border-y border-purple-100/80 dark:border-white/[0.04] transition-colors duration-300 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        {/* FAQ Header */}
        <div className="text-center mb-14 sm:mb-16 space-y-3.5">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{data.badge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
            {data.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-[#D5D0E5] leading-relaxed max-w-xl mx-auto">
            {data.supportingText}
          </p>
        </div>

        {/* Vertical Accordion List: Separate Rounded White Cards */}
        <div className="space-y-4">
          {data.items.map((item) => {
            const isOpen = openId === item.id;
            const answerId = `faq-answer-${item.id}`;
            const questionId = `faq-question-${item.id}`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ease-out overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-[#16122F] border-purple-300 dark:border-violet-500/50 shadow-md shadow-purple-900/5 dark:shadow-[0_8px_30px_rgba(120,43,255,0.15)]"
                    : "bg-white dark:bg-[#141126]/90 border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:border-slate-300 dark:hover:border-white/20 hover:shadow-md"
                }`}
              >
                {/* Question Trigger */}
                <button
                  type="button"
                  id={questionId}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="w-full py-5 sm:py-5.5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 sm:gap-6 cursor-pointer focus:outline-none group"
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-snug tracking-tight group-hover:text-[#782BFF] dark:group-hover:text-white transition-colors duration-200">
                    {item.question}
                  </span>

                  {/* Plus / Minus Action Icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-gradient-to-r from-[#782BFF] to-[#6318E8] text-white shadow-[0_2px_10px_rgba(120,43,255,0.35)]"
                        : "bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-[#D5D0E5] group-hover:bg-purple-100 group-hover:text-[#782BFF] dark:group-hover:bg-white/[0.12] dark:group-hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Animated Expandable Answer Panel */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1">
                      <div className="pt-3.5 border-t border-slate-100 dark:border-white/[0.06]">
                        <p className="text-sm sm:text-base text-slate-600 dark:text-[#C8C2DE] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
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

export default PricingFaq;
