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

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            {data.heading}
          </h2>

          {data.subheading && (
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#D5D0E5] leading-relaxed">
              {data.subheading}
            </p>
          )}
        </div>

        {/* Responsive Grid of Enquiry Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item: EnquiryItem) => {
            const Icon = iconMap[item.iconName] || Building2;
            const isClickable = Boolean(item.href);

            const cardContent = (
              <div className="group relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#141126]/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-purple-300 dark:hover:border-violet-500/40 hover:bg-slate-50 dark:hover:bg-[#181432]/75 transition-all duration-300 shadow-md dark:shadow-[0_12px_32px_rgba(0,0,0,0.45)] hover:shadow-xl dark:hover:shadow-[0_20px_45px_rgba(120,43,255,0.18)] hover:-translate-y-1 flex flex-col justify-between h-full">
                {/* Subtle top edge highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/40 dark:via-white/15 to-transparent rounded-t-2xl pointer-events-none" />

                <div>
                  {/* Icon badge */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#782BFF]/15 to-[#4C16B8]/20 border border-violet-400/30 flex items-center justify-center text-purple-600 dark:text-violet-300 group-hover:text-purple-700 dark:group-hover:text-white group-hover:scale-105 transition-all duration-300 mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Field Label */}
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#D5D0E5]/70 mb-1">
                    {item.label}
                  </div>

                  {/* Value / Primary Info */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-violet-200 transition-colors">
                    {item.value}
                  </h3>

                  {/* Subtext */}
                  {item.subtext && (
                    <p className="mt-1 text-xs text-slate-500 dark:text-[#D5D0E5]/70 leading-relaxed">
                      {item.subtext}
                    </p>
                  )}
                </div>

                {/* Footer action indicator if clickable */}
                {isClickable && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-medium text-purple-600 dark:text-violet-400 group-hover:text-purple-700 dark:group-hover:text-white transition-colors">
                    <span>Connect directly</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                )}
              </div>
            );

            if (isClickable && item.href) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="block h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-2xl"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div key={item.id} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
