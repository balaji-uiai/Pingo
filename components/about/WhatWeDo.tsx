import React from "react";
import { aboutData } from "@/data/about";
import {
  Cpu,
  MessageSquare,
  Palette,
  Sparkles,
  FolderKanban,
  Workflow,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  MessageSquare,
  Palette,
  Sparkles,
  FolderKanban,
  Workflow,
};

export const WhatWeDo: React.FC = () => {
  const { whatWeDo } = aboutData;

  return (
    <section className="relative py-20 bg-[#F5F6FF] dark:bg-[#101326] border-y border-[#E5E7F0] dark:border-[#292D45] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{whatWeDo.badge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF]">
            {whatWeDo.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0]">
            {whatWeDo.subheading}
          </p>
        </div>

        {/* 6 Capabilities in a responsive 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whatWeDo.items.map((item) => {
            const Icon = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                className="group relative p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#635BFF]/50 transition-all duration-300 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#635BFF]/10 text-[#635BFF] dark:bg-[#635BFF]/20 dark:text-[#20C5D8] border border-[#635BFF]/20 flex items-center justify-center transition-all duration-300 mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-[#171B2E] dark:text-[#FFFFFF] mb-2 group-hover:text-[#635BFF] dark:group-hover:text-[#20C5D8] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
