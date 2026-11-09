"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-10 sm:pb-14 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#782BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[650px] h-[650px] bg-[#4C16B8]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#782BFF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1340px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Center-aligned Hero Copy */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col items-center text-center space-y-6 sm:space-y-8 z-10">
            {/* Main Headline - Exactly 2 lines on desktop, center-aligned */}
            <h1 className="w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.25rem] 2xl:text-[3.75rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.14]">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Smarter customer conversations.
              </span>
              <span className="block text-[#782BFF] dark:text-[#A855F7] bg-gradient-to-r from-[#782BFF] via-[#9047FF] to-[#4C16B8] dark:from-[#A855F7] dark:via-[#B57CFF] dark:to-[#782BFF] bg-clip-text text-transparent whitespace-normal lg:whitespace-nowrap">
                Powered by AI. Backed by humans.
              </span>
            </h1>

            {/* Supporting Content - Single continuous paragraph, center-aligned */}
            <p className="max-w-2xl sm:max-w-3xl text-center text-base sm:text-lg text-slate-600 dark:text-[#D5D0E5] leading-relaxed font-normal">
              Give your customers instant answers with AI agents trained on your
              business knowledge. When a conversation needs a human touch,
              seamlessly connect customers with your support team — without
              losing context. Build knowledge centers, manage conversations,
              support customers, and understand every interaction from one
              unified platform.
            </p>

            {/* Single CTA Button - Center-aligned */}
            <div className="pt-2 flex justify-center w-full">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium text-white bg-gradient-to-r from-[#782BFF] to-[#4C16B8] border border-white/20 shadow-[0_0_25px_rgba(120,43,255,0.45)] hover:shadow-[0_0_35px_rgba(120,43,255,0.7)] hover:from-[#8938FF] hover:to-[#5B1DDE] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>Get started for free</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Pingo Robot Mascot - Shifted slightly downward */}
          <div className="lg:col-span-4 xl:col-span-4 relative flex items-center justify-center mt-6 lg:mt-12 lg:translate-y-6">
            {/* Ambient Purple Light behind mascot */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#782BFF]/25 to-transparent rounded-full filter blur-2xl transform scale-90 pointer-events-none" />

            {/* Mascot Image Container with gentle floating motion */}
            <div className="relative w-full max-w-[480px] lg:max-w-none transition-transform duration-500 animate-float">
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
