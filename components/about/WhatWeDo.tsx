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
    <section className="relative py-20 bg-[#100D1D]/50 border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{whatWeDo.badge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {whatWeDo.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#D5D0E5]">
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
                className="group relative p-7 rounded-2xl bg-[#141126]/60 backdrop-blur-md border border-white/[0.08] hover:border-violet-500/40 hover:bg-[#181432]/75 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-500/25 flex items-center justify-center text-violet-300 group-hover:text-white group-hover:bg-[#782BFF]/30 group-hover:border-violet-400/50 transition-all duration-300 mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#D5D0E5] leading-relaxed">
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

