"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

export type Icon3DColor = "violet" | "blue" | "cyan" | "emerald" | "amber";
export type Icon3DSize = "sm" | "md" | "lg" | "xl";

export interface Icon3DProps {
  icon: LucideIcon;
  color?: Icon3DColor;
  size?: Icon3DSize;
  className?: string;
  strokeWidth?: number;
}

export const Icon3D: React.FC<Icon3DProps> = ({
  icon: Icon,
  color = "violet",
  size = "md",
  className = "",
  strokeWidth = 2,
}) => {
  // Size configurations
  const sizeStyles = {
    sm: {
      container: "w-8 h-8 rounded-xl",
      iconSize: "w-4 h-4",
    },
    md: {
      container: "w-10 h-10 rounded-xl",
      iconSize: "w-5 h-5",
    },
    lg: {
      container: "w-12 h-12 rounded-2xl",
      iconSize: "w-6 h-6",
    },
    xl: {
      container: "w-14 h-14 rounded-2xl",
      iconSize: "w-7 h-7",
    },
  }[size];

  // 3D Color styles with tactile lighting, bevels, and colored depth shadows
  const colorStyles = {
    violet: {
      gradient:
        "bg-gradient-to-br from-[#877DFF] via-[#635BFF] to-[#4538E0]",
      shadow:
        "shadow-[0_8px_20px_-4px_rgba(99,91,255,0.42),0_2px_4px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)]",
      border:
        "border-t border-l border-white/50 border-r border-b border-black/20",
    },
    blue: {
      gradient:
        "bg-gradient-to-br from-[#60A5FA] via-[#3984FF] to-[#1D4ED8]",
      shadow:
        "shadow-[0_8px_20px_-4px_rgba(57,132,255,0.42),0_2px_4px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)]",
      border:
        "border-t border-l border-white/50 border-r border-b border-black/20",
    },
    cyan: {
      gradient:
        "bg-gradient-to-br from-[#4EE5D6] via-[#20C5D8] to-[#0891B2]",
      shadow:
        "shadow-[0_8px_20px_-4px_rgba(32,197,216,0.42),0_2px_4px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)]",
      border:
        "border-t border-l border-white/50 border-r border-b border-black/20",
    },
    emerald: {
      gradient:
        "bg-gradient-to-br from-[#34D399] via-[#10B981] to-[#047857]",
      shadow:
        "shadow-[0_8px_20px_-4px_rgba(16,185,129,0.42),0_2px_4px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)]",
      border:
        "border-t border-l border-white/50 border-r border-b border-black/20",
    },
    amber: {
      gradient:
        "bg-gradient-to-br from-[#FBBF24] via-[#F59E0B] to-[#D97706]",
      shadow:
        "shadow-[0_8px_20px_-4px_rgba(245,158,11,0.42),0_2px_4px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)]",
      border:
        "border-t border-l border-white/50 border-r border-b border-black/20",
    },
  }[color];

  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95 ${sizeStyles.container} ${colorStyles.gradient} ${colorStyles.shadow} ${colorStyles.border} ${className}`}
    >
      {/* 3D Specular Curved Gloss Highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/35 to-transparent rounded-t-[inherit] pointer-events-none"
      />

      {/* Center Icon with subtle depth shadow */}
      <Icon
        className={`relative z-10 text-white ${sizeStyles.iconSize} drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.3)]`}
        strokeWidth={strokeWidth}
      />
    </div>
  );
};

export default Icon3D;

