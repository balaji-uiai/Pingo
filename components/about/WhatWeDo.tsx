import React from "react";
import Link from "next/link";
import { aboutData } from "@/data/about";
import {
  Cpu,
  Database,
  MessageSquare,
  Ticket,
  Users,
  BarChart3,
  Workflow,
  ShieldCheck,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Database,
  MessageSquare,
  Ticket,
  Users,
  BarChart3,
  Workflow,
  ShieldCheck,
};

export const WhatWeDo: React.FC = () => {
  const { whatWeDo } = aboutData;

  return (
    <section className="relative py-20 bg-[#F5F6FF] dark:bg-[#101326] border-y border-[#E5E7F0] dark:border-[#292D45] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{whatWeDo.badge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF]">
            {whatWeDo.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
            {whatWeDo.subheading}
          </p>
        </div>

        {/* 8 Platform Capabilities in a balanced responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeDo.items.map((item) => {
            const Icon = iconMap[item.iconName] || Cpu;

            return (
              <div
                key={item.id}
                className="group relative p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#635BFF]/50 transition-all duration-300 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#635BFF]/10 text-[#635BFF] dark:bg-[#635BFF]/20 dark:text-[#20C5D8] border border-[#635BFF]/20 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F5F6FA] dark:bg-[#101326] border border-[#E5E7F0] dark:border-white/[0.08] text-[#62677D] dark:text-[#A5A1BF] font-semibold">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] mb-2 group-hover:text-[#635BFF] dark:group-hover:text-[#20C5D8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Direct Feature Link */}
                <div className="pt-3 border-t border-[#E5E7F0] dark:border-white/[0.06]">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#635BFF] dark:text-[#A5A0FF] hover:text-[#5249E8] dark:hover:text-[#C5C0FF] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Explore feature</span>
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

export default WhatWeDo;
