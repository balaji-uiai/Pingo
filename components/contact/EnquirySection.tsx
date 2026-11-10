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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#635BFF]/8 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />

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

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-tight">
            {data.heading}
          </h2>

          {data.subheading && (
            <p className="text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
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
              <div className="group relative p-6 sm:p-7 rounded-2xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#635BFF]/50 hover:bg-[#FFFFFF] dark:hover:bg-[#1C2038] transition-all duration-300 shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.45)] hover:shadow-md hover:-translate-y-1 flex flex-col justify-between h-full">
                {/* Subtle top edge highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#635BFF]/25 to-transparent rounded-t-2xl pointer-events-none" />

                <div>
                  {/* Icon badge */}
                  <div className="w-11 h-11 rounded-xl bg-[#635BFF]/10 text-[#635BFF] dark:bg-[#635BFF]/20 dark:text-[#20C5D8] border border-[#635BFF]/20 flex items-center justify-center group-hover:scale-105 transition-all duration-300 mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Field Label */}
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#62677D] dark:text-[#B5BAD0] mb-1">
                    {item.label}
                  </div>

                  {/* Value / Primary Info */}
                  <h3 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] group-hover:text-[#635BFF] dark:group-hover:text-[#20C5D8] transition-colors">
                    {item.value}
                  </h3>

                  {/* Subtext */}
                  {item.subtext && (
                    <p className="mt-1 text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {item.subtext}
                    </p>
                  )}
                </div>

                {/* Footer action indicator if clickable */}
                {isClickable && (
                  <div className="mt-4 pt-3 border-t border-[#E5E7F0] dark:border-[#292D45] flex items-center justify-between text-xs font-medium text-[#635BFF] dark:text-[#20C5D8] group-hover:underline transition-colors">
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
                  className="block h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF] rounded-2xl"
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
