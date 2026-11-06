import React from "react";
import { aboutData } from "@/data/about";
import { Compass, Lightbulb } from "lucide-react";

export const VisionSection: React.FC = () => {
  const { vision } = aboutData;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#782BFF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#141126]/90 via-[#100D1D]/80 to-[#141126]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Icon / Accent */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#782BFF]/30 to-[#4C16B8]/50 border border-violet-400/30 flex items-center justify-center text-violet-300 shadow-[0_0_30px_rgba(120,43,255,0.3)] mb-4">
                <Compass className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#B5FF45] font-semibold">
                Strategic Foresight
              </span>
            </div>

            {/* Vision Text */}
            <div className="lg:col-span-8 space-y-5">
              <div className="pill-badge">
                <span className="pill-dot" />
                <span>{vision.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                {vision.heading}
              </h2>

              <div className="space-y-4 text-base text-[#D5D0E5] leading-relaxed">
                {vision.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

