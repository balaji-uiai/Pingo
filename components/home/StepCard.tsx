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

const iconMap: Record<StepItem["iconName"], LucideIcon> = {
  Globe,
  Database,
  Bot,
  Users,
  Palette,
  Rocket,
};

export const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const Icon = iconMap[step.iconName] || Bot;

  return (
    <div className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#FAF9FE] to-[#F1EFFB] border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_22px_45px_rgba(120,43,255,0.22)] hover:border-purple-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full">
      {/* Top subtle highlight reflection */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/40 to-transparent rounded-t-2xl sm:rounded-t-3xl pointer-events-none" />

      <div>
        {/* Header: Icon & Step Label */}
        <div className="flex items-center justify-between mb-5">
          {/* Blue / Purple line icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#782BFF]/10 via-[#9047FF]/15 to-[#3B82F6]/15 border border-[#782BFF]/25 flex items-center justify-center text-[#782BFF] group-hover:text-[#4C16B8] group-hover:bg-[#782BFF]/20 group-hover:border-[#782BFF]/50 group-hover:shadow-[0_0_20px_rgba(120,43,255,0.35)] group-hover:scale-110 transition-all duration-300">
            <Icon className="w-6 h-6 stroke-[1.8]" />
          </div>

          {/* Step Number Badge */}
          <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#782BFF]/10 text-[#782BFF] border border-[#782BFF]/20">
            {step.step}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#782BFF] transition-colors duration-200">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;

