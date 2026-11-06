import React from "react";
import {
  MessageSquareMore,
  Info,
  Headset,
  Settings,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { FeatureCardItem } from "@/data/features";

interface FeatureCardProps {
  feature: FeatureCardItem;
  index: number;
}

const iconComponents: Record<FeatureCardItem["iconName"], LucideIcon> = {
  MessageSquareMore,
  Info,
  Headset,
  Settings,
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const Icon = iconComponents[feature.iconName] || Info;

  return (
    <div
      className="group relative p-6 sm:p-7 rounded-[22px] bg-[#141126]/60 backdrop-blur-xl border border-white/[0.08] hover:border-violet-500/40 hover:bg-[#181432]/75 transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_45px_rgba(120,43,255,0.18)] hover:-translate-y-1 flex flex-col justify-between min-h-[190px]"
    >
      {/* Top subtle highlight reflection */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-[22px] pointer-events-none" />

      <div>
        {/* Icon Container with glowing purple box */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#782BFF]/30 to-[#4C16B8]/40 border border-violet-400/25 flex items-center justify-center text-violet-300 group-hover:text-white group-hover:border-violet-400/50 group-hover:scale-105 transition-all duration-300 mb-4 shadow-[0_0_15px_rgba(120,43,255,0.2)]">
          <Icon className="w-5 h-5" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white group-hover:text-violet-200 transition-colors duration-200">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-1.5 text-xs sm:text-sm text-[#D5D0E5] leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Bottom Row with Glass Arrow Badge */}
      <div className="mt-5 pt-2 flex items-center justify-end">
        <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D5D0E5] group-hover:text-white group-hover:bg-[#782BFF]/30 group-hover:border-violet-400/40 transition-all duration-300">
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
