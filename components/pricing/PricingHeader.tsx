import React from "react";

interface PricingHeaderProps {
  badge: string;
  heading?: string;
}

export const PricingHeader: React.FC<PricingHeaderProps> = ({ badge }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
      {/* Small Label / Pill Badge */}
      <div className="inline-block">
        <span className="pill-badge">
          <span className="pill-dot" />
          <span>{badge}</span>
        </span>
      </div>

      {/* Main Heading with "Every Stage" highlighted in blue-purple gradient */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
        The Right Plan for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#782BFF] via-[#8F47FF] to-[#4C16B8]">
          Every Stage
        </span>{" "}
        of Growth
      </h1>
    </div>
  );
};

export default PricingHeader;
