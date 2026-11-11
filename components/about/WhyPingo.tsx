import React from "react";
import { aboutData } from "@/data/about";
import {
  Database,
  HeartHandshake,
  Layers,
  Sliders,
  ShieldCheck,
  LucideIcon,
  CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Database,
  HeartHandshake,
  Layers,
  Sliders,
  ShieldCheck,
};

export const WhyPingo: React.FC = () => {
  const { whyPingo } = aboutData;

  const topTwo = whyPingo.reasons.slice(0, 2);
  const bottomThree = whyPingo.reasons.slice(2, 5);

  return (
    <section className="relative py-20 overflow-hidden bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{whyPingo.badge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF]">
            {whyPingo.heading}
          </h2>

          <div className="space-y-2 text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
            <p>{whyPingo.intro1}</p>
            <p>{whyPingo.intro2}</p>
          </div>
        </div>

        {/* 5 Distinct Value Drivers (2 Top + 3 Bottom) */}
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Top Row: 2 Wider Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topTwo.map((reason) => {
              const Icon = iconMap[reason.iconName] || CheckCircle2;

              return (
                <div
                  key={reason.title}
                  className="group relative p-7 sm:p-8 rounded-2xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#635BFF]/50 transition-all duration-300 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#635BFF]/10 text-[#635BFF] dark:bg-[#635BFF]/20 dark:text-[#20C5D8] border border-[#635BFF]/20 flex items-center justify-center transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] group-hover:text-[#635BFF] dark:group-hover:text-[#20C5D8] transition-colors leading-snug">
                        {reason.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[#E5E7F0] dark:border-white/[0.06] flex items-center gap-1.5 text-xs text-[#10B981] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Core Architectural Principle</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 3 Focused Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomThree.map((reason) => {
              const Icon = iconMap[reason.iconName] || CheckCircle2;

              return (
                <div
                  key={reason.title}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#3984FF]/50 transition-all duration-300 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#3984FF]/10 text-[#3984FF] dark:bg-[#3984FF]/20 dark:text-[#7EB5FF] border border-[#3984FF]/20 flex items-center justify-center transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] group-hover:text-[#3984FF] dark:group-hover:text-[#7EB5FF] transition-colors leading-snug">
                        {reason.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-4 border-t border-[#E5E7F0] dark:border-white/[0.06] flex items-center gap-1.5 text-[11px] text-[#10B981] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Operational Advantage</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyPingo;
