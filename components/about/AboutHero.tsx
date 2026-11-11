import React from "react";
import Image from "next/image";
import Link from "next/link";
import { aboutData } from "@/data/about";
import {
  Sparkles,
  Database,
  MessageSquare,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const AboutHero: React.FC = () => {
  const { hero } = aboutData;

  const pillarIcons = [
    Sparkles,
    Database,
    MessageSquare,
    Activity,
  ];

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
      {/* Background ambient lighting in Pingo brand colors */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#635BFF]/8 dark:bg-[#635BFF]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-[#3984FF]/8 dark:bg-[#3984FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="pill-badge">
                <span className="pill-dot" />
                <span>{hero.badge}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-tight">
              Smarter Conversations.{" "}
              <span className="bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
                Better Connections.
              </span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed font-normal">
              {hero.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Tagline Callout & Fast Exploration */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#20C5D8] shadow-[0_0_10px_#20C5D8]" />
                <span className="text-sm sm:text-base font-semibold text-[#171B2E] dark:text-[#FFFFFF] tracking-wide">
                  {hero.tagline}
                </span>
              </div>

              <Link
                href="/features/ai-automation"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#635BFF] dark:text-[#A5A0FF] hover:underline"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Interactive Core Architecture Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7F0] dark:border-[#292D45]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#635BFF]/10 dark:bg-[#635BFF]/20 border border-[#635BFF]/20 flex items-center justify-center">
                    <Image
                      src="/images/pingo-p.png"
                      alt="Pingo Mark"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      Pingo Architecture
                    </h3>
                    <p className="text-xs text-[#62677D] dark:text-[#B5BAD0]">
                      Conversational AI & Knowledge System
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#20C5D8]/10 text-[#20C5D8] border border-[#20C5D8]/30">
                  Active
                </span>
              </div>

              {/* 4 Pillars of Pingo */}
              <div className="space-y-3">
                {hero.corePillars.map((pillar, idx) => {
                  const Icon = pillarIcons[idx] || Sparkles;

                  return (
                    <div
                      key={pillar.title}
                      className="p-3.5 rounded-2xl bg-white dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#292D45] flex items-start gap-3 shadow-xs"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#635BFF]/10 to-[#3984FF]/10 text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#635BFF]/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-[#171B2E] dark:text-white leading-tight">
                          {pillar.title}
                        </h4>
                        <p className="text-[11px] text-[#62677D] dark:text-[#B5BAD0] mt-0.5 leading-snug">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status Note */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#62677D] dark:text-[#A5A1BF] border-t border-[#E5E7F0] dark:border-[#292D45]">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Grounded & Hallucination-Free
                </span>
                <span>UIAI Supported</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
