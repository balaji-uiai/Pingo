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

export interface StepCardProps {
  step: StepItem;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Database,
  Bot,
  Users,
  Palette,
  Rocket,
};

export const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const Icon = (step.iconName && iconMap[step.iconName]) || Bot;

  return (
    <div className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FFFFFF] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#635BFF]/50 dark:hover:border-[#635BFF]/50 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full">
      {/* Top subtle highlight reflection */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#635BFF]/25 to-transparent rounded-t-2xl sm:rounded-t-3xl pointer-events-none" />

      <div>
        {/* Header: Icon & Step Label */}
        <div className="flex items-center justify-between mb-5">
          {/* Brand icon container */}
          <div className="w-12 h-12 rounded-xl bg-[#635BFF]/10 dark:bg-[#635BFF]/20 border border-[#635BFF]/20 flex items-center justify-center text-[#635BFF] dark:text-[#20C5D8] group-hover:bg-[#635BFF]/20 group-hover:border-[#635BFF]/50 group-hover:shadow-[0_0_20px_rgba(99,91,255,0.35)] group-hover:scale-110 transition-all duration-300">
            <Icon className="w-6 h-6 stroke-[1.8]" />
          </div>

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
