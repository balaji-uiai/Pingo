"use client";

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
import { Icon3D, Icon3DColor } from "@/components/common/Icon3D";

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

const colorSequence: Icon3DColor[] = ["violet", "blue", "cyan", "violet"];

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const Icon = iconComponents[feature.iconName] || Info;
  const iconColor = colorSequence[index % colorSequence.length] || "violet";

  return (
    <div
      className="group relative p-6 sm:p-7 rounded-[22px] bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#635BFF]/50 transition-all duration-300 shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.45)] hover:shadow-md hover:-translate-y-1 flex flex-col justify-between min-h-[190px]"
    >
      {/* Top subtle highlight reflection */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#635BFF]/20 to-transparent rounded-t-[22px] pointer-events-none" />

      <div>
        {/* 3D Tactile Icon */}
        <div className="mb-4">
          <Icon3D icon={Icon} color={iconColor} size="md" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#171B2E] dark:text-[#FFFFFF] group-hover:text-[#635BFF] dark:group-hover:text-[#20C5D8] transition-colors duration-200">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-1.5 text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Bottom Row with Arrow Badge */}
      <div className="mt-5 pt-2 flex items-center justify-end">
        <div className="w-8 h-8 rounded-full bg-[#E5E7F0] dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#292D45] flex items-center justify-center text-[#62677D] dark:text-[#B5BAD0] group-hover:text-white group-hover:bg-[#635BFF] group-hover:border-[#635BFF] transition-all duration-300">
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
