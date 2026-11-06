import React from "react";
import Image from "next/image";
import { aboutData } from "@/data/about";
import { MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

export const AboutHero: React.FC = () => {
  const { hero } = aboutData;

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#782BFF]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-[#4C16B8]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="pill-badge">
                <span className="pill-dot" />
                <span>{hero.badge}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Smarter Conversations.{" "}
              <span className="text-[#A855F7] bg-gradient-to-r from-[#A855F7] via-[#B57CFF] to-[#782BFF] bg-clip-text text-transparent">
                Better Connections.
              </span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-[#D5D0E5] leading-relaxed">
              {hero.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Tagline Callout */}
            <div className="pt-3">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#141126]/80 backdrop-blur-md border border-[#782BFF]/30 shadow-[0_4px_20px_rgba(120,43,255,0.15)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B5FF45] shadow-[0_0_10px_#B5FF45]" />
                <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
                  {hero.tagline}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Glass Card Graphic */}
          <div className="lg:col-span-4">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#141126]/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                    <Image
                      src="/images/pingo-p.png"
                      alt="Pingo Mark"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Pingo Core</h3>
                    <p className="text-xs text-[#D5D0E5]">AI Conversational Engine</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#B5FF45]/10 text-[#B5FF45] border border-[#B5FF45]/30">
                  Active
                </span>
              </div>

              <div className="space-y-3 text-xs text-[#D5D0E5]">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-violet-400" />
                    Real-time Intelligence
                  </span>
                  <span className="font-semibold text-white">Instant</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-purple-400" />
                    Human + AI Collaboration
                  </span>
                  <span className="font-semibold text-white">Enabled</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B5FF45]" />
                    Customizable Brand Experience
                  </span>
                  <span className="font-semibold text-white">Adaptive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

