import React from "react";
import { defaultEnquiryData, EnquiryData, EnquiryItem } from "@/data/enquiry";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

interface EnquirySectionProps {
  data?: EnquiryData;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Phone,
  Mail,
  MapPin,
};

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  data = defaultEnquiryData,
  className = "",
}) => {
  return (
    <section
      id="enquiries"
      className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${className}`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#782BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          {data.badge && (
            <div className="inline-block">
              <span className="pill-badge">
                <span className="pill-dot" />
                <span>{data.badge}</span>
              </span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {data.heading}
          </h2>

          {data.subheading && (
            <p className="text-sm sm:text-base text-[#D5D0E5] leading-relaxed">
              {data.subheading}
            </p>
          )}
        </div>

        {/* Responsive Grid of Enquiry Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item: EnquiryItem) => {
            const Icon = iconMap[item.iconName] || Building2;
            const isClickable = Boolean(item.href);

            return (
              <div
                key={item.id}
                className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#141126]/90 to-[#100D1D]/90 backdrop-blur-xl border border-white/10 hover:border-violet-500/40 hover:bg-[#181432]/90 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-[#B5FF45] group-hover:scale-105 group-hover:bg-[#782BFF]/30 transition-all duration-300 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Label */}
                  <span className="block text-xs font-semibold uppercase tracking-wider text-violet-300/80 mb-1.5">
                    {item.label}
                  </span>

                  {/* Value: Link if clickable, paragraph if static */}
                  {isClickable ? (
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-base sm:text-lg font-semibold text-white group-hover:text-[#B5FF45] transition-colors break-words"
                    >
                      <span>{item.value}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                    </a>
                  ) : (
                    <p className="text-base sm:text-lg font-semibold text-white break-words">
                      {item.value}
                    </p>
                  )}
                </div>

                {/* Optional Subtext */}
                {item.subtext && (
                  <p className="text-xs text-[#D5D0E5]/70 mt-3 pt-3 border-t border-white/5">
                    {item.subtext}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;

