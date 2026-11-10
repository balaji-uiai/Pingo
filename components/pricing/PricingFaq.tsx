"use client";

import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToPricingFaq = () => {
      const hash = window.location.hash;
      if (hash === "#pricing-faq" || hash === "#faq") {
        const el =
          document.getElementById("pricing-faq") || document.getElementById("faq");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const timer1 = setTimeout(scrollToPricingFaq, 100);
    const timer2 = setTimeout(scrollToPricingFaq, 400);

    window.addEventListener("hashchange", scrollToPricingFaq);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("hashchange", scrollToPricingFaq);
    };
  }, []);

  return (
    <section
      id="pricing-faq"
      aria-label="Frequently Asked Questions"
      className={`w-full bg-[#F5F6FF] dark:bg-[#101326] border-y border-[#E5E7F0] dark:border-[#292D45] transition-colors duration-200 scroll-mt-24 sm:scroll-mt-28 ${className}`}
    >
      <div id="faq" className="scroll-mt-24 sm:scroll-mt-28" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        {/* FAQ Header */}
        <div className="text-center mb-14 sm:mb-16 space-y-3.5">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{data.badge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.2]">
            {data.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-xl mx-auto">
            {data.supportingText}
          </p>
        </div>

        {/* Vertical Accordion List: Separate Rounded Cards */}
        <div className="space-y-4">
          {data.items.map((item) => {
            const isOpen = openId === item.id;
            const answerId = `faq-answer-${item.id}`;
            const questionId = `faq-question-${item.id}`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 ease-out overflow-hidden ${
                  isOpen
                    ? "bg-[#FFFFFF] dark:bg-[#1C2038] border-[#635BFF]/60 dark:border-[#635BFF]/60 shadow-md shadow-indigo-900/5 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                    : "bg-[#FFFFFF] dark:bg-[#171A2E] border-[#E5E7F0] dark:border-[#292D45] shadow-sm hover:border-[#635BFF]/40 dark:hover:border-[#635BFF]/40"
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
                  <span className="text-base sm:text-lg font-semibold text-[#171B2E] dark:text-[#FFFFFF] leading-snug tracking-tight group-hover:text-[#635BFF] dark:group-hover:text-[#20C5D8] transition-colors duration-200">
                    {item.question}
                  </span>

                  {/* Plus / Minus Action Icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-[#635BFF] text-white shadow-[0_2px_10px_rgba(99,91,255,0.4)]"
                        : "bg-[#F5F6FA] dark:bg-[#101326] text-[#62677D] dark:text-[#B5BAD0] group-hover:bg-[#635BFF]/10 group-hover:text-[#635BFF] dark:group-hover:bg-[#635BFF]/20 dark:group-hover:text-[#20C5D8]"
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
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1">
                      <div className="pt-3.5 border-t border-[#E5E7F0] dark:border-[#292D45]">
                        <p className="text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
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
