"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles, ArrowRight, X, Bot, User, CheckCircle } from "lucide-react";

export const Hero: React.FC = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDemoOpen(false);
    };
    if (demoOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [demoOpen]);

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-hidden">
      {/* Background ambient radial gradients matching screenshot */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#782BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[650px] h-[650px] bg-[#4C16B8]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
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
              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium text-white bg-gradient-to-r from-[#782BFF] to-[#4C16B8] border border-white/20 shadow-[0_0_25px_rgba(120,43,255,0.45)] hover:shadow-[0_0_35px_rgba(120,43,255,0.7)] hover:from-[#8938FF] hover:to-[#5B1DDE] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>Watch a Demo</span>
              </button>

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

            {/* Mascot Image Container with gentle floating motion */}
            <div className="relative w-full max-w-[580px] lg:max-w-none transition-transform duration-500 animate-float">
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

      {/* Interactive Glassmorphism Demo Modal */}
      {demoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setDemoOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-[#141126] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(120,43,255,0.2)] p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <Image
                    src="/images/pingo-p.png"
                    alt="Pingo Mark"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Pingo Interactive Experience
                  </h3>
                  <p className="text-xs text-[#D5D0E5]">
                    AI Knowledge & Real-time Customer Assistant
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setDemoOpen(false)}
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#D5D0E5] hover:text-white transition-colors"
                aria-label="Close demo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Live Chat Conversation */}
            <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
              {/* User Message */}
              <div className="flex items-start gap-3 justify-end">
                <div className="p-3.5 rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#782BFF] to-[#5118BD] text-white text-xs sm:text-sm max-w-[80%] shadow-md">
                  How does Pingo handle customer support inquiries automatically?
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0 text-xs">
                  <User className="w-4 h-4" />
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-400/30 flex items-center justify-center text-[#B5FF45] flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3.5 rounded-2xl rounded-tl-sm bg-[#100D1D] border border-white/10 text-[#D5D0E5] text-xs sm:text-sm max-w-[85%] space-y-2">
                  <p>
                    Pingo learns directly from your business documentation, FAQs, and product knowledge base to deliver accurate, instant answers 24/7.
                  </p>
                  <div className="pt-1 flex flex-wrap gap-2 text-[11px]">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#B5FF45]/10 text-[#B5FF45] border border-[#B5FF45]/20 font-medium">
                      <CheckCircle className="w-3 h-3" /> 80%+ Auto-Resolution
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-600/20 text-purple-300 border border-purple-500/20">
                      Seamless Human Escalation
                    </span>
                  </div>
                </div>
              </div>

              {/* Second User Message */}
              <div className="flex items-start gap-3 justify-end">
                <div className="p-3.5 rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#782BFF] to-[#5118BD] text-white text-xs sm:text-sm max-w-[80%] shadow-md">
                  Can we customize the widget appearance for our brand?
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0 text-xs">
                  <User className="w-4 h-4" />
                </div>
              </div>

              {/* Bot Response 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-400/30 flex items-center justify-center text-[#B5FF45] flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3.5 rounded-2xl rounded-tl-sm bg-[#100D1D] border border-white/10 text-[#D5D0E5] text-xs sm:text-sm max-w-[85%]">
                  Yes, fully! Colors, typography, themes, conversation flows, and avatar styles can all be tailored directly in the Pingo management dashboard.
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <span className="text-xs text-[#D5D0E5]/70">
                Experience smart conversations in real time.
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDemoOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-medium text-[#D5D0E5] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                >
                  Close
                </button>
                <Link
                  href="/#contact"
                  onClick={() => setDemoOpen(false)}
                  className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#782BFF] to-[#4C16B8] hover:from-[#8938FF] hover:to-[#5B1DDE] transition-all shadow-md shadow-purple-900/30"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
