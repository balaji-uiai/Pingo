"use client";

import React, { useState } from "react";
import {
  Calendar,
  Users,
  MessageSquare,
  Clock,
  HeartHandshake,
  TrendingUp,
  TrendingDown,
  Activity,
  Smile,
  Meh,
  Frown,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Zap,
  BarChart3,
  Award,
  ShieldCheck,
  ChevronRight,
  Filter,
} from "lucide-react";
import { analyticsIntelligenceData, DateFilterData } from "@/data/analyticsIntelligence";

export const AnalyticsDashboard: React.FC = () => {
  const { dashboard } = analyticsIntelligenceData;
  const [selectedRange, setSelectedRange] = useState<string>("Last 7 Days");

  const currentData: DateFilterData =
    dashboard.dataByFilter[selectedRange] || dashboard.dataByFilter["Last 7 Days"];

  const { customerActivity, conversationPerformance, responseTime, feedbackSentiment, weeklyDistribution } =
    currentData;

  // Max value for weekly distribution chart scaling
  const maxWeeklyInteraction = Math.max(...weeklyDistribution.map((d) => d.interactions));

  return (
    <section
      id="dashboard-preview"
      aria-label="Comprehensive Analytics Dashboard"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FAFBFE] dark:bg-[#0B0D19] transition-colors duration-200"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#635BFF]/8 dark:bg-[#635BFF]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/12 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <BarChart3 className="w-3.5 h-3.5 text-[#635BFF] dark:text-[#A5A0FF]" />
            <span>{dashboard.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {dashboard.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto font-normal">
            {dashboard.subheading}
          </p>

          {/* Interactive Date Filter Selector */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#62677D] dark:text-[#8D93AF]">
              <Filter className="w-3.5 h-3.5 text-[#635BFF]" />
              <span>Timeframe:</span>
            </div>
            {dashboard.dateOptions.map((opt) => {
              const isActive = selectedRange === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelectedRange(opt)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#635BFF] text-white shadow-[0_2px_12px_rgba(99,91,255,0.35)] scale-[1.02]"
                      : "bg-[#FFFFFF] dark:bg-[#16182C] text-[#464B63] dark:text-[#B5BAD0] border border-[#E2E6EF] dark:border-[#272B43] hover:border-[#635BFF]/40 hover:text-[#635BFF]"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            DASHBOARD CONTAINER
        ========================================================================= */}
        <div className="rounded-3xl border border-[#E2E6EF] dark:border-[#272B43] bg-[#FFFFFF] dark:bg-[#131526] shadow-xl p-6 sm:p-8 lg:p-10 space-y-10 sm:space-y-12">
          
          {/* Top Bar: Selected Period Banner & Live Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#EEF1F7] dark:border-[#232740]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#635BFF] dark:text-[#A5A0FF]">
                  Active Telemetry Filter
                </span>
                <span className="text-xs text-[#8F94A8]">•</span>
                <span className="text-xs text-[#8F94A8]">Historical & Live Stream</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#171B2E] dark:text-[#FFFFFF] mt-0.5">
                Overview for {selectedRange}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#059669] dark:text-[#34D399] text-xs font-semibold border border-[#10B981]/20">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                Live Sync Verified
              </span>
              <span className="text-xs text-[#8F94A8] hidden md:inline">
                Data refreshed every 15s
              </span>
            </div>
          </div>

          {/* =========================================================================
              GROUP A: CUSTOMER ACTIVITY
          ========================================================================= */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                    Group A: Customer Activity
                  </h4>
                  <p className="text-xs text-[#8288A0] dark:text-[#8D93AF]">
                    Inbound discovery, widget clicks, and audience engagement
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                customerActivity.websiteVisitors,
                customerActivity.activeChatVisitors,
                customerActivity.totalConversations,
                customerActivity.newConversations,
              ].map((item, idx) => (
                <div
                  key={item.id}
                  className="rounded-2xl p-5 bg-[#F8FAFD] dark:bg-[#181B33] border border-[#E5E9F2] dark:border-[#272B4B] hover:border-[#635BFF]/40 transition-all group"
                >
                  <div className="flex items-center justify-between text-xs text-[#62677D] dark:text-[#9DA3BC] mb-2">
                    <span className="font-semibold">{item.name}</span>
                    <span
                      className={`font-semibold inline-flex items-center gap-0.5 ${
                        item.trend === "up" ? "text-[#10B981]" : "text-[#EF4444]"
                      }`}
                    >
                      {item.trend === "up" ? "↑" : "↓"} {item.change}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#171B2E] dark:text-white tracking-tight">
                    {item.value}
                  </div>
                  <p className="text-[11px] text-[#8F94A8] dark:text-[#7A809C] mt-2 leading-tight">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================================
              GROUP B: CONVERSATION PERFORMANCE
          ========================================================================= */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB3FF] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                    Group B: Conversation Performance
                  </h4>
                  <p className="text-xs text-[#8288A0] dark:text-[#8D93AF]">
                    Inbound message volume, response ratios, and resolution efficacy
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                conversationPerformance.chatsReceived,
                conversationPerformance.chatsReplied,
                conversationPerformance.missedChats,
                conversationPerformance.unansweredChats,
                conversationPerformance.resolutionRate,
              ].map((item, idx) => {
                const isHighlight = idx === 4;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl p-4 sm:p-5 border transition-all ${
                      isHighlight
                        ? "bg-gradient-to-br from-[#635BFF]/10 to-[#3984FF]/10 dark:from-[#635BFF]/20 dark:to-[#3984FF]/20 border-[#635BFF]/40 dark:border-[#635BFF]/60"
                        : "bg-[#F8FAFD] dark:bg-[#181B33] border-[#E5E9F2] dark:border-[#272B4B]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs text-[#62677D] dark:text-[#9DA3BC] mb-2">
                      <span className="font-semibold truncate">{item.name}</span>
                      <span
                        className={`text-[11px] font-semibold ${
                          item.trend === "up" ? "text-[#10B981]" : "text-[#10B981]"
                        }`}
                      >
                        {item.change}
                      </span>
                    </div>
                    <div
                      className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                        isHighlight
                          ? "text-[#635BFF] dark:text-[#A5A0FF]"
                          : "text-[#171B2E] dark:text-white"
                      }`}
                    >
                      {item.value}
                    </div>
                    <p className="text-[11px] text-[#8F94A8] dark:text-[#7A809C] mt-2 leading-tight">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =========================================================================
              GROUP C: RESPONSE TIME ANALYSIS
          ========================================================================= */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#20C5D8]/10 text-[#0E8A99] dark:text-[#4FE3F4] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                    Group C: Response Time Analysis
                  </h4>
                  <p className="text-xs text-[#8288A0] dark:text-[#8D93AF]">
                    Acknowledgment speed, triage assignment, and overall handle time
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                responseTime.avgResponseTime,
                responseTime.firstResponseTime,
                responseTime.avgAssignmentTime,
                responseTime.avgResolutionTime,
              ].map((item, idx) => (
                <div
                  key={item.id}
                  className="rounded-2xl p-5 bg-[#F8FAFD] dark:bg-[#181B33] border border-[#E5E9F2] dark:border-[#272B4B] hover:border-[#20C5D8]/40 transition-all"
                >
                  <div className="flex items-center justify-between text-xs text-[#62677D] dark:text-[#9DA3BC] mb-2">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-[11px] font-semibold text-[#10B981]">
                      {item.change}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#171B2E] dark:text-white tracking-tight">
                    {item.value}
                  </div>
                  <p className="text-[11px] text-[#8F94A8] dark:text-[#7A809C] mt-2 leading-tight">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================================
              GROUP D & E: SENTIMENT BREAKDOWN & WEEKLY DISTRIBUTION
          ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* GROUP D: CUSTOMER FEEDBACK & SENTIMENT (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl p-6 bg-[#F8FAFD] dark:bg-[#181B33] border border-[#E5E9F2] dark:border-[#272B4B] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-[#10B981]/10 text-[#059669] dark:text-[#34D399] flex items-center justify-center">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      Group D: Feedback & Sentiment
                    </h4>
                    <p className="text-xs text-[#8F94A8]">
                      Based on {feedbackSentiment.totalReviews.toLocaleString()} verified customer ratings
                    </p>
                  </div>
                </div>

                {/* CSAT Hero Score */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-[#121424] border border-[#E8ECF4] dark:border-[#252945] mb-5">
                  <div>
                    <span className="text-xs text-[#62677D] dark:text-[#9DA3BC]">
                      Customer Satisfaction (CSAT)
                    </span>
                    <div className="text-3xl font-black text-[#171B2E] dark:text-white mt-0.5">
                      {feedbackSentiment.csatScore}{" "}
                      <span className="text-sm font-normal text-[#8F94A8]">/ 5.0</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                </div>

                {/* Sentiment Distribution Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="flex items-center gap-1.5 font-medium text-[#10B981]">
                        <Smile className="w-3.5 h-3.5" />
                        Positive Feedback
                      </span>
                      <span className="font-bold text-[#171B2E] dark:text-white">
                        {feedbackSentiment.positivePercentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#E8ECF4] dark:bg-[#252A47] overflow-hidden">
                      <div
                        className="h-full bg-[#10B981] rounded-full transition-all duration-500"
                        style={{ width: `${feedbackSentiment.positivePercentage}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="flex items-center gap-1.5 font-medium text-[#8F94A8]">
                        <Meh className="w-3.5 h-3.5" />
                        Neutral Feedback
                      </span>
                      <span className="font-bold text-[#171B2E] dark:text-white">
                        {feedbackSentiment.neutralPercentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#E8ECF4] dark:bg-[#252A47] overflow-hidden">
                      <div
                        className="h-full bg-[#3984FF] rounded-full transition-all duration-500"
                        style={{ width: `${feedbackSentiment.neutralPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="flex items-center gap-1.5 font-medium text-[#EF4444]">
                        <Frown className="w-3.5 h-3.5" />
                        Negative Feedback
                      </span>
                      <span className="font-bold text-[#171B2E] dark:text-white">
                        {feedbackSentiment.negativePercentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#E8ECF4] dark:bg-[#252A47] overflow-hidden">
                      <div
                        className="h-full bg-[#EF4444] rounded-full transition-all duration-500"
                        style={{ width: `${feedbackSentiment.negativePercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8ECF4] dark:border-[#232740] mt-4 flex items-center justify-between text-xs text-[#8F94A8]">
                <span>Automated NLP sentiment scoring</span>
                <span className="text-[#10B981] font-semibold">Healthy</span>
              </div>
            </div>

            {/* GROUP E: WEEKLY INTERACTION DISTRIBUTION (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl p-6 bg-[#F8FAFD] dark:bg-[#181B33] border border-[#E5E9F2] dark:border-[#272B4B] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#635BFF]/10 text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                        Group E: Weekly Interaction Distribution
                      </h4>
                      <p className="text-xs text-[#8F94A8]">
                        Day-by-day conversation load (Mon - Sun)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-[#62677D] dark:text-[#A5AABF]">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#635BFF]" /> Total Volume
                    </span>
                    <span className="flex items-center gap-1 text-[#62677D] dark:text-[#A5AABF]">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#20C5D8]" /> AI Resolved
                    </span>
                  </div>
                </div>

                {/* SVG Visual Bar Columns */}
                <div className="h-48 w-full flex items-end gap-3 pt-4 px-2">
                  {weeklyDistribution.map((item, idx) => {
                    const totalHeight = Math.round((item.interactions / maxWeeklyInteraction) * 100);
                    const botRatio = item.botResolved / item.interactions;
                    const botHeight = Math.round(totalHeight * botRatio);

                    return (
                      <div
                        key={item.day}
                        className="flex-1 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer"
                      >
                        {/* Tooltip on hover */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-[#171B2E] text-white px-2 py-0.5 rounded shadow-sm whitespace-nowrap mb-1">
                          {item.interactions.toLocaleString()}
                        </div>

                        {/* Bar */}
                        <div
                          className="w-full max-w-[36px] rounded-t-lg bg-gradient-to-t from-[#635BFF] to-[#3984FF] relative overflow-hidden transition-all duration-300 group-hover:brightness-110"
                          style={{ height: `${totalHeight}%` }}
                        >
                          {/* Inner layer for bot resolved */}
                          <div
                            className="absolute bottom-0 left-0 right-0 bg-[#20C5D8] opacity-80"
                            style={{ height: `${botRatio * 100}%` }}
                          />
                        </div>

                        {/* Label */}
                        <span className="text-xs font-semibold text-[#62677D] dark:text-[#8D93AF]">
                          {item.day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8ECF4] dark:border-[#232740] mt-4 flex items-center justify-between text-xs text-[#8F94A8]">
                <span>Peak load recorded: Wednesday & Thursday</span>
                <span className="text-[#635BFF] font-semibold">86.2% AI Self-Service Rate</span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              GROUP F: AGENT PERFORMANCE INSIGHTS
          ========================================================================= */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#3984FF]/10 text-[#3984FF] dark:text-[#7EB3FF] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                    Group F: Agent Performance Insights
                  </h4>
                  <p className="text-xs text-[#8288A0] dark:text-[#8D93AF]">
                    Workload distribution, individual response speeds, and satisfaction scores
                  </p>
                </div>
              </div>
              <span className="text-xs text-[#8F94A8]">Showing active agents & autonomous assistant</span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-[#E5E9F2] dark:border-[#272B4B]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFD] dark:bg-[#181B33] text-[#62677D] dark:text-[#9DA3BC] font-semibold border-b border-[#E5E9F2] dark:border-[#272B4B]">
                    <th className="py-3.5 px-4">Agent / Teammate</th>
                    <th className="py-3.5 px-4">Chats Handled</th>
                    <th className="py-3.5 px-4">First Response</th>
                    <th className="py-3.5 px-4">Avg Response</th>
                    <th className="py-3.5 px-4">CSAT Rating</th>
                    <th className="py-3.5 px-4">Missed Chats</th>
                    <th className="py-3.5 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF1F7] dark:divide-[#232740]">
                  {dashboard.agents.map((agent, idx) => {
                    const isAi = agent.avatar === "AI";
                    return (
                      <tr
                        key={agent.name}
                        className={`hover:bg-[#F9FAFE] dark:hover:bg-[#1A1D38] transition-colors ${
                          isAi ? "bg-[#635BFF]/5 dark:bg-[#635BFF]/10 font-medium" : ""
                        }`}
                      >
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[11px] ${
                                isAi
                                  ? "bg-gradient-to-tr from-[#635BFF] to-[#20C5D8] text-white"
                                  : "bg-[#E2E6EF] dark:bg-[#252945] text-[#171B2E] dark:text-white"
                              }`}
                            >
                              {agent.avatar}
                            </div>
                            <div>
                              <div className="font-bold text-[#171B2E] dark:text-white flex items-center gap-1.5">
                                {agent.name}
                                {isAi && (
                                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#635BFF] text-white uppercase font-mono">
                                    AI
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-[#8F94A8]">{agent.role}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-[#171B2E] dark:text-white">
                          {agent.conversationsHandled.toLocaleString()}
                        </td>
                        <td className="py-3.5 px-4 text-[#3984FF] font-medium">
                          {agent.firstResponseTime}
                        </td>
                        <td className="py-3.5 px-4 text-[#62677D] dark:text-[#A6ACCD]">
                          {agent.avgResponseTime}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1 font-bold text-[#10B981]">
                            ★ {agent.csat}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={
                              agent.missedChats === 0
                                ? "text-[#10B981] font-semibold"
                                : "text-[#EF4444] font-semibold"
                            }
                          >
                            {agent.missedChats}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#059669] dark:text-[#34D399] text-[10px] font-semibold">
                            Online
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;

