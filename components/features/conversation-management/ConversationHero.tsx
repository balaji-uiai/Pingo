"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  Bot,
  User,
  ShieldCheck,
  CheckCircle2,
  Database,
  Layers,
  Zap,
} from "lucide-react";
import { conversationManagementData } from "@/data/conversationManagement";

export const ConversationHero: React.FC = () => {
  const { hero } = conversationManagementData;

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#635BFF]/10 dark:bg-[#635BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#3984FF]/10 dark:bg-[#3984FF]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Small Label Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
              <MessageSquare className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.12]">
              {hero.headingPart1}{" "}
              <span className="bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
                {hero.headingPart2}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#62677D] dark:text-[#B5BAD0] max-w-xl font-normal leading-relaxed">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Link
                href={hero.primaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2B75E6] shadow-[0_0_25px_rgba(99,91,255,0.4)] hover:shadow-[0_0_35px_rgba(99,91,255,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{hero.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={hero.secondaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-[#171B2E] dark:text-[#FFFFFF] bg-white/80 dark:bg-[#1E2238]/80 hover:bg-[#F3F4F8] dark:hover:bg-[#252A47] border border-[#E2E6EF] dark:border-[#2D3356] transition-all duration-300 cursor-pointer shadow-xs"
              >
                <span>{hero.secondaryCta.text}</span>
              </Link>
            </div>

            {/* Supporting Micro Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#62677D] dark:text-[#B5BAD0]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#20C5D8] flex-shrink-0" />
                Natural Phrasing
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#635BFF] flex-shrink-0" />
                Context-Aware Memory
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3984FF] flex-shrink-0" />
                Grounded Knowledge
              </span>
            </div>
          </div>

          {/* Right Column: Premium Conversational AI Mockup */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#635BFF]/15 via-[#3984FF]/15 to-[#20C5D8]/15 rounded-3xl blur-2xl opacity-60 dark:opacity-80 -z-10" />

            <div className="rounded-3xl border border-[#E2E6EF] dark:border-[#272B43] bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FE] dark:from-[#15182C] dark:to-[#0F1122] shadow-2xl p-5 sm:p-6 lg:p-7 relative overflow-hidden">
              
              {/* Chat Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8ECF4] dark:border-[#242842] mb-5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#20C5D8] p-[2px]">
                      <div className="w-full h-full rounded-full bg-[#FFFFFF] dark:bg-[#15182C] flex items-center justify-center">
                        <Bot className="w-4 h-4 text-[#635BFF] dark:text-[#A5A0FF]" />
                      </div>
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-white dark:ring-[#15182C]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                        Pingo Assistant
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] border border-[#635BFF]/25">
                        Enterprise AI
                      </span>
                    </div>
                    <span className="text-xs text-[#8F94A8] dark:text-[#7A809C]">
                      Active Thread · Context Multi-turn
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0F2F9] dark:bg-[#1C2038] text-[11px] text-[#62677D] dark:text-[#B5BAD0]">
                  <Zap className="w-3 h-3 text-[#20C5D8]" />
                  <span>240ms Latency</span>
                </div>
              </div>

              {/* Chat Conversation Thread */}
              <div className="space-y-4">
                
                {/* 1. Customer Message */}
                <div className="flex items-start justify-end gap-2.5">
                  <div className="max-w-[85%] bg-gradient-to-r from-[#635BFF] to-[#5146EB] text-white rounded-2xl rounded-tr-xs px-4 py-3 shadow-md">
                    <p className="text-xs sm:text-sm leading-relaxed">
                      Can I configure SAML 2.0 single sign-on with Okta on our Enterprise plan, and will existing users need password resets?
                    </p>
                    <span className="text-[10px] text-white/70 block mt-1 text-right">
                      10:42 AM · Sent
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#E5E7F0] dark:bg-[#252A47] flex items-center justify-center flex-shrink-0 text-[#464B63] dark:text-[#B5BAD0]">
                    <User className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* 2. Pingo AI Assistant Message */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#635BFF]/10 dark:bg-[#635BFF]/20 flex items-center justify-center flex-shrink-0 text-[#635BFF] dark:text-[#A5A0FF]">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="max-w-[88%] bg-[#F3F5FA] dark:bg-[#1A1E35] border border-[#E5E8F2] dark:border-[#272C48] rounded-2xl rounded-tl-xs p-4 shadow-xs">
                    <p className="text-xs sm:text-sm text-[#171B2E] dark:text-[#FFFFFF] leading-relaxed mb-3">
                      Yes! SAML 2.0 SSO with Okta is directly supported in your Enterprise Workspace. Existing users won't need to reset passwords — they authenticate seamlessly using their existing Okta credentials.
                    </p>

                    {/* Grounded Citation Pill */}
                    <div className="rounded-lg p-2.5 bg-white dark:bg-[#14172B] border border-[#E2E6EF] dark:border-[#252945] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <Database className="w-3.5 h-3.5 text-[#20C5D8] flex-shrink-0" />
                        <span className="text-xs font-medium text-[#464B63] dark:text-[#B5BAD0] truncate">
                          Enterprise Security & SAML 2.0 Guide
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full flex-shrink-0">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Customer Follow-up Message */}
                <div className="flex items-start justify-end gap-2.5 pt-1">
                  <div className="max-w-[85%] bg-gradient-to-r from-[#635BFF] to-[#5146EB] text-white rounded-2xl rounded-tr-xs px-4 py-2.5 shadow-md">
                    <p className="text-xs sm:text-sm leading-relaxed">
                      Great! Does that also sync user groups automatically?
                    </p>
                    <div className="flex items-center justify-between gap-3 mt-1 text-[10px] text-white/70">
                      <span className="italic">Context: SAML 2.0 SSO</span>
                      <span>10:43 AM</span>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#E5E7F0] dark:bg-[#252A47] flex items-center justify-center flex-shrink-0 text-[#464B63] dark:text-[#B5BAD0]">
                    <User className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* 4. Pingo Follow-up Stream Preview */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#635BFF]/10 dark:bg-[#635BFF]/20 flex items-center justify-center flex-shrink-0 text-[#635BFF] dark:text-[#A5A0FF]">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="max-w-[88%] bg-[#F3F5FA] dark:bg-[#1A1E35] border border-[#E5E8F2] dark:border-[#272C48] rounded-2xl rounded-tl-xs p-3.5 shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#20C5D8] mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Context Kept: Okta Directory Sync</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#171B2E] dark:text-[#FFFFFF] leading-relaxed">
                      Yes, SCIM directory synchronization automatically maps your Okta groups into Pingo team roles and permissions.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Context Status Pill */}
              <div className="mt-5 pt-3 border-t border-[#E8ECF4] dark:border-[#242842] flex items-center justify-between text-xs text-[#8F94A8] dark:text-[#7A809C]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#20C5D8]" />
                  <span>Continuous Context Active</span>
                </div>
                <span className="text-[11px] font-semibold text-[#635BFF] dark:text-[#A5A0FF]">
                  Grounded in Knowledge
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConversationHero;

