import React from "react";
import { aboutData } from "@/data/about";
import {
  Sliders,
  Zap,
  Clock,
  HeartHandshake,
  ShieldCheck,
  LucideIcon,
  CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sliders,
  Zap,
  Clock,
  HeartHandshake,
  ShieldCheck,
};

export const WhyPingo: React.FC = () => {
  const { whyPingo } = aboutData;

  return (
    <section className="relative py-20 overflow-hidden bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{whyPingo.badge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF]">
            {whyPingo.heading}
          </h2>

          <div className="space-y-2 text-base text-[#62677D] dark:text-[#B5BAD0]">
            <p>{whyPingo.intro1}</p>
            <p>{whyPingo.intro2}</p>
          </div>
        </div>

        {/* 5 Distinct Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyPingo.reasons.map((reason) => {
            const Icon = iconMap[reason.iconName] || CheckCircle2;

            return (
              <div
                key={reason.title}
                className="group relative p-7 rounded-2xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#635BFF]/50 transition-all duration-300 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1"
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] dark:bg-[#635BFF]/20 dark:text-[#20C5D8] border border-[#635BFF]/20 flex items-center justify-center transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#171B2E] dark:text-[#FFFFFF] group-hover:text-[#635BFF] dark:group-hover:text-[#20C5D8] transition-colors">
                    {reason.title}
                  </h3>
                </div>

                <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyPingo;
