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
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{whyPingo.badge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {whyPingo.heading}
          </h2>

          <div className="space-y-2 text-base text-[#D5D0E5]">
            <p>{whyPingo.intro1}</p>
            <p>{whyPingo.intro2}</p>
          </div>
        </div>

        {/* 5 Distinct Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyPingo.reasons.map((reason, idx) => {
            const Icon = iconMap[reason.iconName] || CheckCircle2;

            return (
              <div
                key={reason.title}
                className="group relative p-7 rounded-2xl bg-[#141126]/60 backdrop-blur-xl border border-white/[0.08] hover:border-violet-500/40 hover:bg-[#181432]/75 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1"
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-violet-300 group-hover:text-white group-hover:bg-[#782BFF]/30 group-hover:border-violet-400/50 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-violet-200 transition-colors">
                    {reason.title}
                  </h3>
                </div>

                <p className="text-sm text-[#D5D0E5] leading-relaxed">
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

