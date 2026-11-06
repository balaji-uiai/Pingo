"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-hidden">
      {/* Background ambient radial gradients matching screenshot */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#782BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[650px] h-[650px] bg-[#4C16B8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#782BFF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-8 z-10">
            {/* Pill Tag */}
            <div>
              <div className="pill-badge">
                <span className="pill-dot" />
                <span>A BETTER WAY TO CONNECT</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white leading-[1.12]">
              Real-time answers.{" "}
              <span className="block text-[#A855F7] bg-gradient-to-r from-[#A855F7] via-[#B57CFF] to-[#782BFF] bg-clip-text text-transparent">
                Real-world impact.
              </span>
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-3.5 max-w-xl text-base sm:text-lg text-[#D5D0E5] leading-relaxed font-normal">
              <p>
                Meet Pingo — your business knowledge, AI-powered customer management
                service.
              </p>
              <p className="text-sm sm:text-base text-[#D5D0E5]/80">
                Help customers understand your services, find the right
                information, and get instant answers — all through one intelligent
                AI assistant.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium text-white bg-gradient-to-r from-[#782BFF] to-[#4C16B8] border border-white/20 shadow-[0_0_25px_rgba(120,43,255,0.45)] hover:shadow-[0_0_35px_rgba(120,43,255,0.7)] hover:from-[#8938FF] hover:to-[#5B1DDE] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>Watch a Demo</span>
              </Link>

              <Link
                href="/#features"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium text-white bg-[#141126]/60 backdrop-blur-md border border-white/15 hover:border-violet-400/40 hover:bg-[#1c1737]/80 hover:shadow-[0_4px_20px_rgba(120,43,255,0.15)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Features</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Pingo Robot Mascot */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center">
            {/* Ambient Purple Light behind mascot */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#782BFF]/25 to-transparent rounded-full filter blur-2xl transform scale-90 pointer-events-none" />

            {/* Mascot Image Container */}
            <div className="relative w-full max-w-[580px] lg:max-w-none transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/images/pingo-robot.png"
                alt="Pingo 3D Robot Mascot with Talk, Chat, Information, and Support badges"
                width={1280}
                height={805}
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

