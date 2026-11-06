import React from "react";
import { aboutData } from "@/data/about";
import { Building2, Shield, Cpu } from "lucide-react";

export const WhoWeAre: React.FC = () => {
  const { whoWeAre } = aboutData;

  return (
    <section className="relative py-20 bg-[#100D1D]/40 border-y border-white/[0.05]">
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

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {whoWeAre.heading}
            </h2>

            <div className="space-y-4 text-base text-[#D5D0E5] leading-relaxed">
              {whoWeAre.paragraphs.map((p, idx) => {
                // Highlight UIAI Technologies
                const parts = p.split("UIAI Technologies");
                return (
                  <p key={idx}>
                    {parts.map((part, pIdx) => (
                      <React.Fragment key={pIdx}>
                        {part}
                        {pIdx < parts.length - 1 && (
                          <span className="font-semibold text-white underline decoration-violet-500/50 underline-offset-4">
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

          {/* Right Column: UIAI Technologies Glass Showcase */}
          <div className="lg:col-span-5">
            <div className="relative p-8 rounded-3xl bg-[#141126]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6">
              <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#782BFF]/30 to-[#4C16B8]/50 border border-violet-400/30 flex items-center justify-center text-violet-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    UIAI Technologies
                  </h3>
                  <p className="text-xs text-[#D5D0E5]/70">
                    Parent Technology & Innovation Hub
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-xs text-[#D5D0E5]">
                  <Shield className="w-4 h-4 text-[#B5FF45] mt-0.5 flex-shrink-0" />
                  <span>
                    Backed by institutional technical engineering, secure infrastructure, and dedicated enterprise support.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs text-[#D5D0E5]">
                  <Cpu className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Deep domain research in artificial intelligence, conversational NLP, and scalable microservices.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/15 text-xs text-purple-200/90 leading-relaxed">
                Building solutions that make a meaningful difference in how businesses connect with their customers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

