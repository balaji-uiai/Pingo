import React from "react";
import { aboutData } from "@/data/about";
import { Building2, Shield, Cpu } from "lucide-react";

export const WhoWeAre: React.FC = () => {
  const { whoWeAre } = aboutData;

  return (
    <section className="relative py-20 bg-[#F5F6FF] dark:bg-[#101326] border-y border-[#E5E7F0] dark:border-[#292D45] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="pill-badge">
                <span className="pill-dot" />
                <span>{whoWeAre.badge}</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF]">
              {whoWeAre.heading}
            </h2>

            <div className="space-y-4 text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
              {whoWeAre.paragraphs.map((p, idx) => {
                const parts = p.split("UIAI Technologies");
                return (
                  <p key={idx}>
                    {parts.map((part, pIdx) => (
                      <React.Fragment key={pIdx}>
                        {part}
                        {pIdx < parts.length - 1 && (
                          <span className="font-semibold text-[#171B2E] dark:text-[#FFFFFF] underline decoration-[#635BFF]/50 underline-offset-4">
                            UIAI Technologies
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Right Column: UIAI Technologies Showcase */}
          <div className="lg:col-span-5">
            <div className="relative p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6">
              <div className="flex items-center gap-4 pb-5 border-b border-[#E5E7F0] dark:border-[#292D45]">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#635BFF]/15 to-[#3984FF]/25 border border-[#635BFF]/30 flex items-center justify-center text-[#635BFF] dark:text-[#20C5D8]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] tracking-wide">
                    UIAI Technologies
                  </h3>
                  <p className="text-xs text-[#62677D] dark:text-[#B5BAD0]">
                    Parent Technology & Innovation Hub
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-[#F5F6FA] dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#292D45] flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-[#635BFF] dark:text-[#20C5D8] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#171B2E] dark:text-[#FFFFFF]">
                      AI Innovation
                    </h4>
                    <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] mt-0.5">
                      Pioneering intelligent software systems for businesses worldwide.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F6FA] dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#292D45] flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#3984FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#171B2E] dark:text-[#FFFFFF]">
                      Enterprise Security
                    </h4>
                    <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] mt-0.5">
                      Built with uncompromising data privacy and resilient infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
