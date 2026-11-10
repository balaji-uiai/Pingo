"use client";

import React from "react";
import {
  SearchX,
  FolderGit2,
  MessageCircleOff,
  UserCheck,
  Clock,
  AlertTriangle,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { teamAssistanceData, ChallengeItem } from "@/data/teamAssistance";

const iconMap: Record<string, React.ElementType> = {
  SearchX,
  FolderGit2,
  MessageCircleOff,
  UserCheck,
  Clock,
};

export const TeamAssistanceChallenge: React.FC = () => {
  const { challenges } = teamAssistanceData;

  return (
    <section
      id="challenges"
      aria-label="Everyday Team Knowledge Challenges"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#FAFBFE] dark:bg-[#0A0815] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-28 w-[500px] h-[500px] bg-[#3984FF]/6 dark:bg-[#3984FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[480px] h-[480px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 dark:border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold tracking-wider uppercase shadow-xs">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{challenges.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {challenges.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {challenges.subheading}
          </p>
        </div>

        {/* 2-Column Workflow Interruption Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column (5/12): The Cost of Team Knowledge Fragmentation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-xl dark:shadow-[0_10px_35px_rgba(0,0,0,0.5)] space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500">
                  Team Impact Analysis
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-semibold border border-rose-500/20">
                  Friction
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-[#171B2E] dark:text-white leading-tight">
                Where Internal Work Gets Sidetracked
              </h3>

              <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                When employees cannot find verified process documents themselves, they are forced to interrupt teammates. This causes continuous context-switching and leaves senior staff re-answering the same routine questions.
              </p>

              <div className="p-4 rounded-xl bg-gradient-to-r from-rose-500/5 to-amber-500/5 dark:from-rose-500/10 dark:to-amber-500/10 border border-rose-500/20 space-y-2 text-xs">
                <span className="font-bold text-[#171B2E] dark:text-white block">
                  The Interruption Cycle:
                </span>
                <p className="text-[#62677D] dark:text-[#D5D0E5] leading-relaxed">
                  Information search fails ➔ Colleague pinged on chat ➔ Both employees lose focus ➔ Progress slows down.
                </p>
              </div>

              <div className="pt-2 border-t border-[#E5E7F0] dark:border-white/[0.08]">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#3984FF]/10 text-xs text-[#3984FF] dark:text-[#7EB5FF] font-medium">
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span>Pingo provides a central assistant where everyone gets instant, verified answers.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7/12): 5 Stacked Friction Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {challenges.items.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || AlertTriangle;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-5 bg-white dark:bg-[#120E24] border border-[#E5E7F0] dark:border-[#28223D] shadow-sm hover:border-[#3984FF]/40 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-[#171B2E] dark:text-white leading-snug">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-white/[0.06] text-[#62677D] dark:text-[#A5A1BF] flex-shrink-0">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="text-xs text-[#62677D] dark:text-[#B5BAD0] leading-relaxed mb-2.5">
                        {item.description}
                      </p>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-700 dark:text-amber-300 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>Friction: {item.teamFriction}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamAssistanceChallenge;

