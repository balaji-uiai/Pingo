import React from "react";
import { aboutData } from "@/data/about";
import { Target } from "lucide-react";

export const MissionSection: React.FC = () => {
  const { mission } = aboutData;

  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] shadow-sm dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Mission Text */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <div className="pill-badge">
                <span className="pill-dot" />
                <span>{mission.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-tight">
                {mission.heading}
              </h2>

              <div className="space-y-4 text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                {mission.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Visual Icon / Accent */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center order-1 lg:order-2">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#635BFF]/15 to-[#3984FF]/20 border border-[#635BFF]/30 flex items-center justify-center text-[#635BFF] dark:text-[#20C5D8] shadow-sm mb-4">
                <Target className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#62677D] dark:text-[#B5BAD0] font-semibold">
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
