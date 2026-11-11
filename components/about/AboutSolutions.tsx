import React from "react";
import Link from "next/link";
import { aboutData } from "@/data/about";
import {
  Headphones,
  Compass,
  Globe,
  FolderGit2,
  Users2,
  SlidersHorizontal,
  ArrowRight,
  LucideIcon,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Headphones,
  Compass,
  Globe,
  FolderGit2,
  Users2,
  SlidersHorizontal,
};

export const AboutSolutions: React.FC = () => {
  const { solutions } = aboutData;

  return (
    <section className="relative py-20 bg-white dark:bg-[#0B0D19] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{solutions.badge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF]">
            {solutions.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
            {solutions.subheading}
          </p>
        </div>

        {/* 6 Business Solutions Grid (3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.items.map((item) => {
            const Icon = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                className="group relative p-7 rounded-2xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#3984FF]/50 transition-all duration-300 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#3984FF]/10 text-[#3984FF] dark:bg-[#3984FF]/20 dark:text-[#7EB5FF] border border-[#3984FF]/20 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white dark:bg-[#101326] border border-[#E5E7F0] dark:border-white/[0.08] text-[#3984FF] dark:text-[#7EB5FF] font-semibold">
                      {item.audience}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 group-hover:text-[#3984FF] dark:group-hover:text-[#7EB5FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E7F0] dark:border-white/[0.06]">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3984FF] dark:text-[#7EB5FF] hover:text-[#2563EB] dark:hover:text-[#93C5FD] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Explore solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutSolutions;

