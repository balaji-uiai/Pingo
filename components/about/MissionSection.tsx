import React from "react";
import { aboutData } from "@/data/about";
import { Target, Flag } from "lucide-react";

export const MissionSection: React.FC = () => {
  const { mission } = aboutData;

  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#141126]/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Mission Text */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <div className="pill-badge">
                <span className="pill-dot" />
                <span>{mission.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                {mission.heading}
              </h2>

              <div className="space-y-4 text-base text-[#D5D0E5] leading-relaxed">
                {mission.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Visual Icon / Accent */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center order-1 lg:order-2">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#4C16B8]/40 to-[#100D1D] border border-purple-500/25 flex items-center justify-center text-purple-300 shadow-[0_0_30px_rgba(76,22,184,0.3)] mb-4">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-[#B5FF45]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#D5D0E5]/80 font-semibold">
                Core Purpose
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

