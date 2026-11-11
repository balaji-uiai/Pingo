import React from "react";
import { aboutData } from "@/data/about";
import { Compass, Target } from "lucide-react";

export const VisionSection: React.FC = () => {
  const { vision, mission } = aboutData;

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-[#0B0D19] transition-colors duration-200">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#635BFF]/8 dark:bg-[#635BFF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#3984FF]/8 dark:bg-[#3984FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Balanced 2-Column Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Vision */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] shadow-sm dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="pill-badge">
                  <span className="pill-dot" />
                  <span>{vision.badge}</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#635BFF]/15 to-[#3984FF]/20 border border-[#635BFF]/30 flex items-center justify-center text-[#635BFF] dark:text-[#20C5D8] shadow-xs">
                  <Compass className="w-6 h-6" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                {vision.heading}
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                {vision.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5E7F0] dark:border-white/[0.06] text-xs font-mono uppercase tracking-wider text-[#635BFF] dark:text-[#A5A0FF] font-semibold">
              Strategic Foresight & Long-Term Direction
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] shadow-sm dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="pill-badge">
                  <span className="pill-dot" />
                  <span>{mission.badge}</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3984FF]/15 to-[#20C5D8]/20 border border-[#3984FF]/30 flex items-center justify-center text-[#3984FF] dark:text-[#20C5D8] shadow-xs">
                  <Target className="w-6 h-6" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                {mission.heading}
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                {mission.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5E7F0] dark:border-white/[0.06] text-xs font-mono uppercase tracking-wider text-[#3984FF] dark:text-[#7EB5FF] font-semibold">
              Our Operational Purpose & Daily Execution
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionSection;
