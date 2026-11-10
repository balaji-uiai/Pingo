import React from "react";
import {
  Bot,
  Database,
  MessagesSquare,
  Ticket,
  Users,
  BarChart3,
  Layers,
  ShieldCheck,
  LucideIcon,
  Sparkles,
} from "lucide-react";
import { ProductFeatureModule } from "@/data/productFeatures";

interface ProductFeatureCardProps {
  module: ProductFeatureModule;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Database,
  MessagesSquare,
  Ticket,
  Users,
  BarChart3,
  Layers,
  ShieldCheck,
};

export const ProductFeatureCard: React.FC<ProductFeatureCardProps> = ({
  module,
  className = "",
}) => {
  const Icon = iconMap[module.iconName] || Bot;
  const isPrimary = module.isPrimary;

  return (
    <div
      className={`group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        isPrimary
          ? "bg-gradient-to-b from-[#181332]/95 via-[#141126]/90 to-[#0e0b1c]/95 border border-[#782BFF]/35 shadow-[0_12px_40px_rgba(120,43,255,0.12)] hover:border-[#782BFF]/60 hover:shadow-[0_16px_50px_rgba(120,43,255,0.25)]"
          : "bg-[#141126]/85 border border-white/[0.08] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:border-[#782BFF]/35 hover:shadow-[0_12px_35px_rgba(120,43,255,0.14)]"
      } hover:-translate-y-1 ${className}`}
    >
      {/* Subtle top specular highlight reflection */}
      <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      {/* Card Header & Content */}
      <div className="space-y-4">
        {/* Top meta row: Module number, primary badge, and category icon */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-xs font-bold tracking-widest uppercase ${
                isPrimary ? "text-[#B5FF45]" : "text-[#D5D0E5]/70"
              }`}
            >
              · {module.moduleNumber}
            </span>
            {isPrimary && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#B5FF45]/10 border border-[#B5FF45]/30 text-[#B5FF45] text-[10px] font-mono font-semibold uppercase tracking-wider">
                <Sparkles className="w-2.5 h-2.5" />
                Primary Capability
              </span>
            )}
          </div>

          {/* Module Icon Container */}
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isPrimary
                ? "bg-gradient-to-br from-[#782BFF] to-[#4C16B8] text-white shadow-[0_0_15px_rgba(120,43,255,0.5)] border border-violet-400/40 group-hover:scale-105"
                : "bg-white/[0.05] text-[#A855F7] border border-white/10 group-hover:border-[#782BFF]/40 group-hover:text-white group-hover:bg-[#782BFF]/20 group-hover:scale-105"
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>

        {/* Feature Category Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-white transition-colors duration-200">
          {module.title}
        </h3>

        {/* Short Descriptive Headline */}
        <p className="text-sm font-semibold text-[#A855F7] leading-snug">
          {module.headline}
        </p>

        {/* Feature Explanation */}
        <p className="text-sm text-[#D5D0E5] leading-relaxed font-normal">
          {module.description}
        </p>

        {/* Highlighted Enterprise AI Workflows Panel (AI Automation) */}
        {module.enterpriseHighlight && (
          <div className="mt-5 p-4 sm:p-4.5 rounded-xl bg-gradient-to-br from-[#782BFF]/15 via-[#4C16B8]/10 to-[#100D1D]/60 border border-[#782BFF]/30 shadow-inner">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B5FF45] shadow-[0_0_6px_#B5FF45]" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-[#B5FF45] uppercase">
                {module.enterpriseHighlight.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#D5D0E5] leading-relaxed">
              {module.enterpriseHighlight.description}
            </p>
          </div>
        )}
      </div>

      {/* Feature Capabilities Tags/Chips */}
      <div className="mt-6 pt-4 border-t border-white/[0.06]">
        <div className="flex flex-wrap gap-1.5">
          {module.features.map((featureItem) => (
            <span
              key={featureItem}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/[0.03] text-[#D5D0E5]/80 border border-white/[0.06] transition-colors duration-200 hover:bg-white/[0.08] hover:text-white"
            >
              {featureItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeatureCard;

