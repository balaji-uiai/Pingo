"use client";

import React from "react";
import {
  Globe,
  Database,
  Bot,
  Users,
  Palette,
  Rocket,
  LucideIcon,
} from "lucide-react";
import { StepItem } from "@/data/howItWorks";
import { Icon3D, Icon3DColor } from "@/components/common/Icon3D";

export interface StepCardProps {
  step: StepItem;
  index: number;
}

const iconMap: Record<StepItem["iconName"], LucideIcon> = {
  Globe,
  Database,
  Bot,
  Users,
  Palette,
  Rocket,
};

const colorSequence: Icon3DColor[] = [
  "violet",
  "blue",
  "cyan",
  "violet",
  "blue",
  "cyan",
];

export const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  const Icon = iconMap[step.iconName] || Bot;
  const iconColor = colorSequence[index % colorSequence.length] || "violet";

  return (
    <div className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FFFFFF] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/50 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full">
      {/* Top subtle highlight reflection */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#635BFF]/25 to-transparent rounded-t-2xl sm:rounded-t-3xl pointer-events-none" />

      <div>
        {/* Header: 3D Tactile Icon & Step Label */}
        <div className="flex items-center justify-between mb-5">
          <Icon3D icon={Icon} color={iconColor} size="lg" />

          {/* Step Number Badge */}
          <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#F5F6FF] dark:bg-[#101326] text-[#635BFF] dark:text-[#20C5D8] border border-[#635BFF]/20 dark:border-[#20C5D8]/30">
            {step.step}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#171B2E] dark:text-[#FFFFFF] group-hover:text-[#635BFF] dark:group-hover:text-[#20C5D8] transition-colors duration-200">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed font-normal">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
